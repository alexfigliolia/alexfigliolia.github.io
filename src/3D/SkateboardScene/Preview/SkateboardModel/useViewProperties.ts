import { useMemo } from "react";
import { Props } from "./types";
import { useBolts } from "./useBolts";
import { useDeck } from "./useDeck";
import { useGripTape } from "./useGripTape";
import { useTrucks } from "./useTrucks";
import { useWheels } from "./useWheels";

const POSITIONS = {
  side: { rotation: [0, 0, Math.PI / 2], position: [0.25, 0.295, 0] },
  upright: { rotation: [0, 0, 0], position: [0, 0, 0] },
} as const;

export const useViewProperties = ({
  boltColor,
  truckColor,
  deckTexture,
  wheelTexture,
  pos = "upright",
}: Props) => {
  const gripTapeMaterial = useGripTape();
  const boltMaterial = useBolts(boltColor);
  const truckMaterial = useTrucks(truckColor);
  const deckMaterial = useDeck(deckTexture);
  const wheelMaterial = useWheels(wheelTexture);
  const position = useMemo(() => POSITIONS[pos], [pos]);

  return {
    position,
    wheelMaterial,
    deckMaterial,
    truckMaterial,
    boltMaterial,
    gripTapeMaterial,
  };
};
