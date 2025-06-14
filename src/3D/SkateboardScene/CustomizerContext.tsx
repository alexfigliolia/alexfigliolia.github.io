import { createContext, useContext, useMemo, useState } from "react";
import { OptionalChildren } from "@figliolia/react-lazy";
import { Callback } from "Tools/Types";
import { SkateboardOptions } from "./SkateboardOptions";

const CustomizerContext = createContext<ICustomizerContext>({
  wheel: SkateboardOptions.WHEELS[0],
  setWheel: () => {},
  deck: SkateboardOptions.DECKS[0],
  setDeck: () => {},
  truck: SkateboardOptions.METALS[0],
  setTruck: () => {},
  bolt: SkateboardOptions.METALS[0],
  setBolt: () => {},
});

interface ICustomizerContext {
  wheel: string;
  setWheel: Callback<[string]>;
  deck: string;
  setDeck: Callback<[string]>;
  truck: string;
  setTruck: Callback<[string]>;
  bolt: string;
  setBolt: Callback<[string]>;
}

export const CustomizerContextProvider = ({ children }: OptionalChildren) => {
  const [wheel, setWheel] = useState(SkateboardOptions.WHEELS[0]);
  const [bolt, setBolt] = useState(SkateboardOptions.METALS[0]);
  const [deck, setDeck] = useState(SkateboardOptions.DECKS[0]);
  const [truck, setTruck] = useState(SkateboardOptions.METALS[0]);

  const value = useMemo(
    () => ({ wheel, setWheel, bolt, setBolt, deck, setDeck, truck, setTruck }),
    [wheel, bolt, deck, truck],
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
