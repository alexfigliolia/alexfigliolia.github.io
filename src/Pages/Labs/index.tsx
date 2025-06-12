import { memo } from "react";
import { ContactText } from "Components/ContactText";
import { Page } from "Components/Page";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export default memo(
  function Labs(_: PropLess) {
    useMenuButtonDelay();
    return (
      <Page name="contact">
        <div>
          <ContactText />
        </div>
      </Page>
    );
  },
  () => false,
);
