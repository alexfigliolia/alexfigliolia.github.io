import { Logger, Profiler, State } from "@figliolia/galena";

export class BaseModel<T> extends State<T> {
  constructor(...params: ConstructorParameters<typeof State<T>>) {
    super(...params);
    BaseModel.bindMiddleware(this);
  }

  private static bindMiddleware(state: State) {
    if (process.env.NODE_ENV === "development") {
      state.registerMiddleware(new Logger(), new Profiler());
    }
  }
}
