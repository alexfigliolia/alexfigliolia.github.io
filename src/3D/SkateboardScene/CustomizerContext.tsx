import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { OptionalChildren } from "@figliolia/react-lazy";
import { CameraControls } from "@react-three/drei";
import { Callback } from "Tools/Types";
import { SkateboardOptions } from "./SkateboardOptions";
import { useCameraControls } from "./useCameraControls";

const CustomizerContext = createContext<ICustomizerContext>({
  wheel: SkateboardOptions.WHEEL_OPTIONS[0],
  updateWheels: () => {},
  deck: SkateboardOptions.DECK_OPTIONS[0],
  updateDeck: () => {},
  truck: SkateboardOptions.METAL_OPTIONS[0],
  updateTrucks: () => {},
  bolt: SkateboardOptions.METAL_OPTIONS[0],
  updateBolts: () => {},
  lookAtDeck: () => {},
  camera: createRef(),
});

interface ICustomizerContext {
  wheel: string;
  updateWheels: Callback<[string]>;
  deck: string;
  updateDeck: Callback<[string]>;
  truck: string;
  updateTrucks: Callback<[string]>;
  bolt: string;
  lookAtDeck: Callback;
  updateBolts: Callback<[string]>;
  camera: RefObject<CameraControls | null>;
}

export const CustomizerContextProvider = ({ children }: OptionalChildren) => {
  const [wheel, setWheel] = useState(SkateboardOptions.WHEEL_OPTIONS[0]);
  const [bolt, setBolt] = useState(SkateboardOptions.METAL_OPTIONS[0]);
  const [deck, setDeck] = useState(SkateboardOptions.DECK_OPTIONS[0]);
  const [truck, setTruck] = useState(SkateboardOptions.METAL_OPTIONS[0]);
  const { camera, lookAtBolts, lookAtTruck, lookAtWheel, lookAtDeck } =
    useCameraControls();

  const createLookAt = useCallback(
    (stateSetter: Dispatch<SetStateAction<string>>, lookAt: Callback) =>
      (update: string) => {
        stateSetter(update);
        lookAt();
      },
    [],
  );

  const updateWheels = useMemo(
    () => createLookAt(setWheel, lookAtWheel),
    [createLookAt, lookAtWheel],
  );
  const updateTrucks = useMemo(
    () => createLookAt(setTruck, lookAtTruck),
    [createLookAt, lookAtTruck],
  );
  const updateDeck = useMemo(
    () => createLookAt(setDeck, lookAtDeck),
    [createLookAt, lookAtDeck],
  );
  const updateBolts = useMemo(
    () => createLookAt(setBolt, lookAtBolts),
    [createLookAt, lookAtBolts],
  );

  const value = useMemo(
    () => ({
      camera,
      wheel,
      bolt,
      deck,
      truck,
      lookAtDeck,
      updateWheels,
      updateTrucks,
      updateDeck,
      updateBolts,
    }),
    [
      wheel,
      bolt,
      deck,
      truck,
      camera,
      lookAtDeck,
      updateWheels,
      updateTrucks,
      updateDeck,
      updateBolts,
    ],
  );
  return (
    <CustomizerContext.Provider value={value}>
      {children}
    </CustomizerContext.Provider>
  );
};

export const useCustomizer = () => {
  return useContext(CustomizerContext);
};
