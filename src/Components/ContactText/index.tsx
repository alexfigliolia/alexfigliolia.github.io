import { memo } from "react";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

const contact = "CONTACT".split("");

export const ContactText = memo(
  function ContactText(_: PropLess) {
    return (
      <div className="contact-text">
        <h1 id="contactText" aria-label="Contact">
          {contact.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`} aria-hidden>
                {letter}
              </div>
            );
          })}
        </h1>
      </div>
    );
  },
  () => true,
);
