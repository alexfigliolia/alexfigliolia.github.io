import gsap from "gsap";
import { degToRad } from "three/src/math/MathUtils.js";
import { IWaveShaderMaterial, WaveImageMesh } from "3D/Netflix/GLWaveImage";
import { Geometry } from "Tools/Geometry";
import { Callback } from "Tools/Types";

export class GeometryController extends Geometry<
  WaveImageMesh,
  IWaveShaderMaterial
> {
  private active = false;
  public resize() {
    if (!this.active) {
      return;
    }
    this.withMesh(mesh => {
      const { x, y } = this.getTargetScale();
      mesh.scale.set(x, y, mesh.scale.z);
      mesh.position.set(0, 0, 1);
    });
  }

  public fadeNoise() {
    this.withMaterial(material => {
      gsap.to(material.uniforms.uHoverState, {
        value: 0,
        duration: 1,
        delay: 0.5,
      });
    });
  }

  public activate(positionX = 0) {
    this.withMesh(mesh => {
      this.active = true;
      const { x, y } = this.getTargetScale();
      gsap
        .timeline()
        .to(mesh.scale, {
          y,
          x,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          mesh.position,
          {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          mesh.rotation,
          {
            y: this.rotateBy(positionX, true),
            duration: 0.3,
          },
          0.1,
        )
        .to(
          mesh.rotation,
          {
            y: 0,
            duration: 0.6,
          },
          0.4,
        );
    });
  }

  public deactivate({
    width,
    height,
    positionX = 0,
    positionY = 0,
    onTransitionComplete,
  }: IOriginalPosition) {
    this.withMesh(mesh => {
      this.active = false;
      gsap
        .timeline({
          // @ts-ignore
          onComplete: onTransitionComplete,
        })
        .to(mesh.scale, {
          x: width,
          y: height,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          mesh.position,
          {
            x: positionX,
            y: positionY,
            z: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          mesh.rotation,
          {
            y: this.rotateBy(positionX, true),
            duration: 0.4,
          },
          0.1,
        )
        .to(
          mesh.rotation,
          {
            y: 0,
            duration: 0.5,
          },
          0.5,
        );
    });
  }

  private rotateBy(positionX: number, forward: boolean) {
    return degToRad(
      (50 * positionX) / (window.innerWidth / (2 * (forward ? -1 : 1))),
    );
  }

  private getTargetScale() {
    const dimensions = this.withMesh(mesh => {
      const { x, y } = mesh.scale;
      let xSize: number;
      let ySize: number;
      if (window.innerWidth < window.innerHeight) {
        xSize = window.innerWidth;
        ySize = (xSize * y) / x;
      } else {
        ySize = window.innerHeight;
        xSize = (ySize * x) / y;
      }
      return { x: xSize, y: ySize };
    });
    return dimensions ?? { x: 0, y: 0 };
  }
}

export interface IOriginalPosition {
  width: number;
  height: number;
  positionX?: number;
  positionY?: number;
  onTransitionComplete: Callback;
}
