import { RefObject } from "react";
import { Mesh, Object3D, Texture } from "three";
import { GLTF } from "three-stdlib";

export type TextureResult<T extends string | string[]> = T extends string
  ? Texture
  : Texture[];

export interface Props {
  boltColor?: string;
  truckColor?: string;
  deckTexture: Texture;
  wheelTexture: Texture;
  pos?: "upright" | "side";
}

export interface SMController {
  wheels: RefObject<Object3D[]>;
}

export type SkateboardGTLF = GLTF & {
  nodes: {
    GripTape: Mesh;
    Wheel1: Mesh;
    Wheel2: Mesh;
    Deck: Mesh;
    Wheel4: Mesh;
    Bolts: Mesh;
    Wheel3: Mesh;
    Baseplates: Mesh;
    Truck1: Mesh;
    Truck2: Mesh;
  };
};
