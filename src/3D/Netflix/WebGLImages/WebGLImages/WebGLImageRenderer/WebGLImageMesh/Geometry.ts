import gsap from "gsap";
import { Vector2 } from "three";
import {
  DEFAULT_MOUSE_COORDINATES,
  IWaveShaderMaterial,
  WaveImageMesh,
} from "3D/Netflix/GLWaveImage";
import { IPointerEvent } from "3D/Netflix/WebGLImages/Context";
import { Geometry } from "Tools/Geometry";
import { Point } from "Tools/Types";
/* eslint-disable @typescript-eslint/no-misused-spread */

export class GeometryController extends Geometry<
  WaveImageMesh,
  IWaveShaderMaterial
> {
  public get meshPosition() {
    if (this.mesh) {
      const { x, y } = this.mesh.position;
      return { "position-x": x, "position-y": y };
    }
  }

  public onPointer = ({ type, position }: IPointerEvent) => {
    switch (type) {
      case "pointer-enter": {
        this.onPointerEnter(position);
        return;
      }
      case "pointer-move": {
        this.onPointerMove(position);
        return;
      }
      case "pointer-leave": {
        this.onPointerLeave();
        return;
      }
      case "activation": {
        this.fadeMesh();
        return;
      }
      case "deactivation": {
        this.revealMesh();
        return;
      }
      default:
        return;
    }
  };

  private onPointerEnter({ x, y }: Point) {
    this.withMaterial(material => {
      this.transitionUniforms([[material.uniforms.uHoverState, 1]]);
      material.uniforms.uMouseCoordinates.value = new Vector2(x, y);
    });
  }

  private onPointerMove(position: Point) {
    const { x, y } = this.pointerEventFromCenter(position);
    this.withMaterial(material => {
      this.transitionVector2(
        material.uniforms.uMouseCoordinates.value as Vector2,
        new Vector2(position.x, position.y),
        0.25,
      );
      this.transitionUniforms([[material.uniforms.uXPointerFromCenter, x]]);
    });
    this.withMesh(mesh => {
      this.rotateMesh(mesh, x * 0.1, y * -0.1);
    });
  }

  private onPointerLeave() {
    this.withMaterial(material => {
      this.transitionUniforms([
        [material.uniforms.uHoverState, 0],
        [material.uniforms.uXPointerFromCenter, 0],
      ]);
      this.transitionVector2(
        material.uniforms.uMouseCoordinates.value as Vector2,
        DEFAULT_MOUSE_COORDINATES,
        0.25,
      );
    });
    this.withMesh(mesh => {
      this.rotateMesh(mesh, 0, 0);
    });
  }

  private pointerEventFromCenter(position: Point) {
    return {
      x: this.pointerFromCenter(position.x),
      y: this.pointerFromCenter(position.y),
    };
  }

  private pointerFromCenter(uv: number) {
    return uv <= 0.5 ? 0.5 - uv : -(uv - 0.5);
  }

  private transitionUniforms(transitions: [{ value: number }, number][]) {
    for (const [property, value] of transitions) {
      gsap.to(property, {
        duration: 0.5,
        value,
      });
    }
  }

  private transitionVector2(uniform: Vector2, value: Vector2, duration = 0.5) {
    gsap.to(uniform, {
      ...value,
      duration,
    });
  }

  private rotateMesh(mesh: WaveImageMesh, x: number, y: number) {
    gsap.to(mesh.rotation, {
      duration: 0.5,
      y: x,
      x: y,
    });
  }

  private fadeMesh() {
    this.withMaterial(material => {
      gsap.to(material.uniforms.uOpacity, {
        duration: 0.2,
        delay: 0.1,
        value: 0,
      });
    });
  }

  private revealMesh() {
    this.withMaterial(material => {
      gsap.to(material.uniforms.uOpacity, {
        duration: 0.1,
        value: 1,
      });
    });
  }
}
