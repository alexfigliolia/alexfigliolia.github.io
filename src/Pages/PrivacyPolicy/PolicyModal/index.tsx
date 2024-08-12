import type { MouseEvent } from "react";
import React, { memo, useCallback, useEffect } from "react";
import { useClassNames } from "@figliolia/classnames";
import { isPrivacyOpen, Privacy, usePrivacy } from "State/Privacy";
import type { PropLess } from "Tools/Types";
import "./styles.scss";
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export const PolicyModal = memo(
  function PolicyModal(_: PropLess) {
    const open = usePrivacy(isPrivacyOpen);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e?.keyCode === 27 || e?.key === "Escape" || e?.code === "Escape") {
        Privacy.toggle();
      }
    }, []);

    const hide = useCallback((e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      // @ts-ignore
      if (e?.target?.tagName === "ARTICLE") {
        Privacy.toggle();
      }
    }, []);

    useEffect(() => {
      if (open) {
        document.addEventListener("keydown", onKeyDown);
      } else {
        document.removeEventListener("keydown", onKeyDown);
      }
      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [open, onKeyDown]);

    const classes = useClassNames("policy-modal", { open });

    return (
      // @ts-ignore
      <article onClick={hide} className={classes}>
        <div>
          <div>
            <h2>Privacy Policy</h2>
            <div className="contents">
              <p>
                The products made by myself (Alex Figliolia) harvest no user
                data of any kind. Period.
              </p>
              <p>
                User privacy has become a primary concern over the last decade
                in an effort to support transparency and minimal tracking. I
                believe this effort to be prudent in creating a truly open and
                democratized internet. As a result, my products will only store
                the minimum amount of information required to ensure that your
                identity is protected.
              </p>
              <p>
                To ensure your privacy, my products will typically require the
                usage of an email address specific to you, in order to log you
                in or maintain your progress. The email that you provide is the
                sole data point that I will store relating to you as an
                individual.
              </p>
              <p>
                If you happen to be a player of{" "}
                <a href="https://apps.apple.com/us/app/word-clouds/id1435511292">
                  Word Clouds
                </a>{" "}
                and have been using our login feature to sync your progress
                across multiple devices, deleting your email address from our
                servers is as simple as opening the Settings View and pressing
                the Delete Account button.
              </p>
              <p>
                A little more on{" "}
                <a href="https://apps.apple.com/us/app/word-clouds/id1435511292">
                  Word Clouds
                </a>
                : in order to keep{" "}
                <a href="https://apps.apple.com/us/app/word-clouds/id1435511292">
                  Word Clouds
                </a>{" "}
                a free game to play forever, we provide non-invasive
                advertisements to our players. These advertisements allow us to
                provide two things:
              </p>
              <ol>
                <li>
                  <p>
                    A free game where the costs of maintenance can be covered by
                    people who enjoy playing
                  </p>
                </li>
                <li>
                  <p>
                    The ability to exchange watching a video for hints to help
                    you complete a difficult puzzle in the game
                  </p>
                </li>
              </ol>
              <p>
                <a href="https://apps.apple.com/us/app/word-clouds/id1435511292">
                  Word Clouds
                </a>{" "}
                utilizes a third party advertiser called{" "}
                <a href="https://www.applovin.com">Applovin</a> to provide
                advertisements. <a href="https://www.applovin.com">Applovin</a>{" "}
                is a reputable and publicly traded company whose ads are served
                in tens of thousands of games across the world. A link to their
                Privacy Policy can be found{" "}
                <a href="https://www.applovin.com/privacy/">here</a>.
              </p>
              <p>
                In addition to advertisements,{" "}
                <a href="https://apps.apple.com/us/app/word-clouds/id1435511292">
                  Word Clouds&apos;s
                </a>{" "}
                login service is provided by{" "}
                <a href="https://www.meta.com/">Meta</a> through their Facebook
                product. A link to{" "}
                <a href="https://www.meta.com">Meta&apos;s</a> Privacy Policy
                can be found{" "}
                <a href="https://www.facebook.com/privacy/policy">here</a>
              </p>
              <p>
                If you&apos;ve enjoyed using any of the products that I&apos;ve
                built, I thank you for your support. In return, I&apos;ll
                continue to create stuff that&apos;s fun and safe for you to use
                :)
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  },
  () => true,
);
