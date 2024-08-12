import React, { memo, useCallback } from "react";
import { ContactText } from "Components/ContactText";
import { Page } from "Components/Page";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import type { PropLess } from "Tools/Types";
import { ContactButton } from "./ContactButton";
import "./styles.scss";
/* eslint-disable react-hooks/exhaustive-deps */

export default memo(
  function Contact(_: PropLess) {
    useMenuButtonDelay();

    const openLink = useCallback((link: string) => {
      return () => {
        window.open(link, "_blank");
      };
    }, []);
    const toGithub = useCallback(openLink("https://github.com/alexfigliolia"), [
      openLink,
    ]);
    const toNPM = useCallback(
      openLink("https://www.npmjs.com/~alexfigliolia"),
      [openLink],
    );
    const emailMe = useCallback(() => {
      window.location.href =
        "mailto:alexfigliolia@gmail.com?subject=Hey%20Alex,%20let's%20chat!";
    }, []);

    return (
      <Page name="contact">
        <div>
          <ContactText />
          <div className="buttons">
            <ContactButton text="Email" onClick={emailMe} />
            <ContactButton text="Github" onClick={toGithub} />
            <ContactButton text="NPM" onClick={toNPM} />
          </div>
        </div>
      </Page>
    );
  },
  () => false,
);
