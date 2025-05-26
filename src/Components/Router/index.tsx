import type { ComponentType } from "react";
import { memo, useEffect, useState } from "react";
import { useController } from "Hooks/useController";
import { Controller } from "./Controller";
import type { RouteMap } from "./types";

function IRouter<T extends RouteMap>({ defaultRoute, routes }: Props<T>) {
  const [Page, setPage] = useState<ComponentType | null>(null);

  const controller = useController(
    new Controller(routes, defaultRoute, setPage),
  );

  useEffect(() => {
    addEventListener("hashchange", controller.hashChange);
    void controller.loadInitial();
    return () => {
      window.removeEventListener("hashchange", controller.hashChange);
    };
  }, [controller]);

  if (!Page) {
    return null;
  }
  return <Page />;
}

export const Router = memo(IRouter);

interface Props<T> {
  readonly routes: T;
  readonly defaultRoute: Extract<keyof T, string>;
}
