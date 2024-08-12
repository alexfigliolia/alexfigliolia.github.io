import { useRef } from "react";

export const useController = <T>(Controller: T) => {
  const controller = useRef<T>(Controller);
  return controller.current;
};
