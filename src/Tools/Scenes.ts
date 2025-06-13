import { Group, Material, Mesh, MeshStandardMaterial, Object3D } from "three";

export class Scenes {
  public static forEachMesh(scene: Group, callback: (mesh: Mesh) => void) {
    scene.traverse(object => {
      if (this.isMesh(object)) {
        callback(object);
      }
    });
  }

  public static forEachMaterial(
    materials: Material | Material[],
    fn: (material: MeshStandardMaterial) => void,
  ) {
    const iterable = Array.isArray(materials) ? materials : [materials];
    for (const material of iterable) {
      fn(material as MeshStandardMaterial);
    }
  }

  private static isMesh(object: Object3D): object is Mesh {
    return object instanceof Mesh;
  }
}
