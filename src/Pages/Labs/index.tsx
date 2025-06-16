import { memo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { useUnmount } from "@figliolia/react-hooks";
import { Experiment } from "Components/Experiment";
import { LabsText } from "Components/LabsText";
import { Page } from "Components/Page";
import { Scene } from "Components/Scene";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import { Labs, ready, useLabs } from "State/Labs";
import type { PropLess } from "Tools/Types";
import { API } from "./API";
import "./styles.scss";

export default memo(
  function LabsPage(_: PropLess) {
    useMenuButtonDelay();
    const active = useLabs(ready);

    useUnmount(() => {
      Labs.destroy();
    });

    const classes = useClassNames("labs", { "no-scroll": active });

    return (
      <Page name={classes}>
        <div className="heading">
          <LabsText />
        </div>
        <div className="experiments">
          {API.map((item, i) => (
            <Experiment key={i} {...item} />
          ))}
        </div>
        <Scene />
      </Page>
    );
  },
  () => false,
);
