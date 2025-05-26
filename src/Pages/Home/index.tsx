import { memo, useCallback } from "react";
import { AlexText } from "Components/AlexText";
import { CTAButton } from "Components/CTAButton";
import { Page } from "Components/Page";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export default memo(
  function Home(_: PropLess) {
    useMenuButtonDelay();

    const navigate = useCallback(() => {
      window.location.hash = "#Work";
    }, []);

    return (
      <Page name="home">
        <div>
          <AlexText />
          <CTAButton text="Work" onClick={navigate} className="work-button" />
        </div>
      </Page>
    );
  },
  () => true,
);
