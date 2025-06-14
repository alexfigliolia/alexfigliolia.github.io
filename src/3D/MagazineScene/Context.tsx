import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { OptionalChildren } from "./types";

export const MagazineContext = createContext<IMagazineContext>({
  current: 1,
  setCurrent: () => {},
});

export const MagazineContextProvider = ({ children }: OptionalChildren) => {
  const [current, setCurrent] = useState(1);

  const value = useMemo(() => ({ current, setCurrent }), [current]);

  return <MagazineContext value={value}>{children}</MagazineContext>;
};

interface IMagazineContext {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}
