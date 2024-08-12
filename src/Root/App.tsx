import React, { memo, useEffect } from "react";
import { useSetup } from "@figliolia/galena-window";
import { Screen } from "Components/Screen";
import { ScreenLoader } from "Components/ScreenLoader";
import { Router } from "Router/index";
import { Routes } from "Router/Routes";
import { Routing } from "State/Routing";
import { Screen as ScreenState } from "State/Screen";
import { Preloader } from "Tools/Preloader";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";

// @ts-ignore
void window?.screen?.orientation?.lock?.("portrait").catch(() => {});
const preloader = Preloader.loadBackground();
Routes.registerForegroundTask(preloader);

export const App = memo(
  function App(_: PropLess) {
    useSetup(ScreenState);
    useEffect(() => {
      void preloader.then(() => {
        Routing.show();
      });
      return () => {
        TaskQueue.clearPendingTasks();
      };
    }, []);

    return (
      <Screen
        back={<ScreenLoader />}
        front={<Router defaultRoute="home" routes={Routes.routes} />}
      />
    );
  },
  () => true,
);
