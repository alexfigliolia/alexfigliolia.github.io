import "react";

declare module "react" {
  export interface CSSProperties {
    "--delay"?: string;
    "--background-small"?: string;
    "--background-large"?: string;
  }
}
