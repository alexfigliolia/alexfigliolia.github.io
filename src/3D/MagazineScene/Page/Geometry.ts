import {
  Bone,
  BoxGeometry,
  Color,
  Float32BufferAttribute,
  MeshStandardMaterial,
  Skeleton,
  SkinnedMesh,
  Texture,
  Uint16BufferAttribute,
  Vector3,
} from "three";

export class Geometry {
  public static readonly PAGE_WIDTH = 1.28;
  public static readonly PAGE_HEIGHT = 1.71;
  public static readonly PAGE_DEPTH = 0.003;
  public static readonly PAGE_SEGMENTS = 30;
  public static readonly TURN_EASE_FACTOR = 0.5;
  public static readonly FOLD_EASE_FACTOR = 0.3;

  public static readonly WHITE = new Color("#fff");
  public static readonly EMISSIVE = new Color("orange");
  public static readonly INSIDE_CURVE_STRENGTH = 0.18;
  public static readonly OUTSITE_CURVE_STRENGTH = 0.05;
  public static readonly TURNING_CURVE_STRENGTH = 0.09;
  public static readonly WHITE_MATERIAL = new MeshStandardMaterial({
    color: this.WHITE,
  });
  public static readonly SEGMENT_WIDTH = this.PAGE_WIDTH / this.PAGE_SEGMENTS;

  public static readonly pageGeometry = new BoxGeometry(
    this.PAGE_WIDTH,
    this.PAGE_HEIGHT,
    this.PAGE_DEPTH,
    this.PAGE_SEGMENTS,
    2,
  );

  public static readonly pageMaterials = [
    this.WHITE_MATERIAL.clone(),
    new MeshStandardMaterial({ color: "#111" }),
    this.WHITE_MATERIAL.clone(),
    this.WHITE_MATERIAL.clone(),
  ];

  static {
    this.pageGeometry.translate(this.PAGE_WIDTH / 2, 0, 0);
    const { position } = this.pageGeometry.attributes;
    const vertex = new Vector3();
    const skinIndices: number[] = [];
    const skinWeights: number[] = [];
    const { count } = position;

    for (let i = 0; i < count; i++) {
      vertex.fromBufferAttribute(position, i);
      const { x } = vertex;
      const skinIndex = Math.max(0, Math.floor(x / this.SEGMENT_WIDTH));
      const skinWeight = (x % this.SEGMENT_WIDTH) / this.SEGMENT_WIDTH;
      skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
      skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
    }

    this.pageGeometry.setAttribute(
      "skinIndex",
      new Uint16BufferAttribute(skinIndices, 4),
    );

    this.pageGeometry.setAttribute(
      "skinWeight",
      new Float32BufferAttribute(skinWeights, 4),
    );
  }

  public static createSkinnedMesh(frontImage: Texture, backImage: Texture) {
    const bones = this.createBones();
    const skeleton = new Skeleton(bones);
    const materials = this.createPageMaterials(frontImage, backImage);
    const mesh = new SkinnedMesh(this.pageGeometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }

  private static createBones() {
    const bones: Bone[] = [];
    for (let i = 0; i < this.PAGE_SEGMENTS; i++) {
      const bone = new Bone();
      if (i === 0) {
        bone.position.x = 0;
      } else {
        bone.position.x = this.SEGMENT_WIDTH * i;
      }
      bones?.[i - 1]?.attach?.(bone);
      bones.push(bone);
    }
    return bones;
  }

  private static createPageMaterials(frontImage: Texture, backImage: Texture) {
    return [
      ...this.pageMaterials,
      new MeshStandardMaterial({
        color: this.WHITE,
        map: frontImage,
        roughness: 0.1,
        emissive: this.EMISSIVE,
        emissiveIntensity: 0,
      }),
      new MeshStandardMaterial({
        color: this.WHITE,
        map: backImage,
        roughness: 0.1,
        emissive: this.EMISSIVE,
        emissiveIntensity: 0,
      }),
    ];
  }
}
