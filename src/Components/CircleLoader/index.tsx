import { Propless } from "3D/MagazineScene/types";
import "./styles.scss";

export const CircleLoader = (_: Propless) => {
  return (
    <div className="circle-loader">
      <svg viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="32" />
      </svg>
    </div>
  );
};
