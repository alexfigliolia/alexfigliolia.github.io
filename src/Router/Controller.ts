import type { TimedPromiseResolution } from "@figliolia/promises";
import { TimedPromise } from "@figliolia/promises";
import type { LazyComponent } from "@figliolia/react-lazy/dist/types/types";
import { Routing } from "State/Routing";
import type { PropLess } from "Tools/Types";
import type { ISetPage, RouteMap } from "./types";

export class Controller<T extends RouteMap> {
  private routes: RouteMap;
  private setPage: ISetPage;
  private defaultRoute: Extract<keyof T, string>;
  private initialRoute: Extract<keyof T, string>;
  private initialLoad: Promise<TimedPromiseResolution<LazyComponent<PropLess>>>;
  constructor(
    routes: T,
    defaultRoute: Extract<keyof T, string>,
    setPage: ISetPage,
  ) {
    this.routes = routes;
    this.setPage = setPage;
    this.defaultRoute = defaultRoute;
    this.initialRoute = this.currentRoute;
    this.initialLoad = this.createLoader(this.initialRoute, 1750).run();
  }

  public async loadInitial() {
    this.onRouteLoaded(this.initialRoute, await this.initialLoad);
  }

  public hashChange = () => {
    const hash = this.currentRoute;
    void Routing.flipScreen().then(async () => {
      try {
        const Task = this.createLoader(hash);
        this.onRouteLoaded(hash, await Task.run());
      } catch (error) {
        // silence
      }
    });
  };

  private createLoader(hash: Extract<keyof T, string>, threshold = 1000) {
    return new TimedPromise(() => this.routes[hash](), threshold);
  }

  private onRouteLoaded(
    hash: string,
    { result, remainingMS }: TimedPromiseResolution<LazyComponent<PropLess>>,
  ) {
    this.setPage(result.default);
    Routing.initialize(remainingMS, () => {
      Routing.setRouteName(hash);
    });
  }

  private get currentRoute() {
    return (window.location.hash.slice(1).toLowerCase() ||
      this.defaultRoute) as Extract<keyof T, string>;
  }
}
