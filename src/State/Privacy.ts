import { createUseState } from "@figliolia/react-galena";
import { PrivacyModel } from "Models/PrivacyModel";
import type { IPrivacy } from "Models/types";

export const Privacy = new PrivacyModel();
export const usePrivacy = createUseState(Privacy);

export const isPrivacyOpen = (state: IPrivacy) => state.open;
