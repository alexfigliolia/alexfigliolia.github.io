import { BaseModel } from "./BaseModel";
import type { IPrivacy } from "./types";

export class PrivacyModel extends BaseModel<IPrivacy> {
  constructor() {
    super("Privacy", { open: false });
  }

  public toggle() {
    this.update(state => {
      state.open = !state.open;
    });
  }
}
