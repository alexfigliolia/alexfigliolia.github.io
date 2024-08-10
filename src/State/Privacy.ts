import { createUseState } from "@figliolia/react-galena";
import { PrivacyModel } from "Models/PrivacyModel";

export const Privacy = new PrivacyModel();
export const usePrivacy = createUseState(Privacy);
