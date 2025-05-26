import { memo, useEffect } from "react";
import { useSetup } from "@figliolia/galena-window";
import { Router } from "Components/Router";
import { Screen } from "Components/Screen";
import { ScreenLoader } from "Components/ScreenLoader";
import { Routes, Routing } from "Routing";
import { PageController } from "State/PageController";
import { Screen as ScreenState } from "State/Screen";
import { Preloader } from "Tools/Preloader";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";

// @ts-ignore
void window?.screen?.orientation?.lock?.("portrait")?.catch(() => {});
const preloader = Preloader.loadBackground();
Routing.registerForegroundTask(preloader);

export const App = memo(
  function App(_: PropLess) {
    useSetup(ScreenState);
    useEffect(() => {
      void preloader.then(() => {
        PageController.show();
      });
      return () => {
        TaskQueue.clearPendingTasks();
      };
    }, []);

    return (
      <Screen
        back={<ScreenLoader />}
        front={<Router defaultRoute="home" routes={Routes} />}
      />
    );
  },
  () => true,
);
