import { connect } from "@figliolia/react-galena";
import { PrivacyModel } from "Models/PrivacyModel";

export const Privacy = new PrivacyModel();

export const connectPrivacy = connect(Privacy);
