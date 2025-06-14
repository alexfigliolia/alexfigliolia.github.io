import { Material, Mesh } from "three";
import { Callback } from "./Types";
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

export class Geometry<T extends Mesh = Mesh, M extends Material = Material> {
  public mesh: T | null = null;

  public cacheReference = (mesh: T) => {
    this.mesh = mesh;
  };

  public get meshXY() {
    return this.withMesh(mesh => {
      const { x, y } = mesh.position;
      return { "position-x": x, "position-y": y };
    });
  }

  public withMesh<F extends Callback<[T], any>>(fn: F) {
    if (!this.mesh) {
      return;
    }
    return fn(this.mesh) as ReturnType<F>;
  }

  public withMaterial<F extends Callback<[M]>>(fn: F) {
    return this.withMesh(mesh => {
      return fn(mesh.material as M) as ReturnType<F>;
    });
  }
}
