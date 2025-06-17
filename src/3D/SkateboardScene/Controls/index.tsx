import { CSSProperties, useMemo } from "react";
import { PropLess } from "Tools/Types";
import { useCustomizer } from "../CustomizerContext";
import { SkateboardOptions } from "../SkateboardOptions";
import { Option, Options } from "./Options";
import "./styles.scss";

export const Controls = (_: PropLess) => {
  const {
    deck,
    bolt,
    wheel,
    truck,
    updateBolts,
    updateDeck,
    updateTrucks,
    updateWheels,
  } = useCustomizer();

  const deckDimensions: CSSProperties = useMemo(
    () => ({
      width: "500%",
      height: "500%",
      translate: "20% -0%",
      objectFit: "cover",
    }),
    [],
  );

  const wheelDimensions: CSSProperties = useMemo(
    () => ({
      width: "125%",
      height: "125%",
      translate: "6% 8%",
      objectFit: "cover",
    }),
    [],
  );

  return (
    <div className="controls">
      <Options title="Deck" selectedName={deck}>
        {SkateboardOptions.DECK_OPTIONS.map(option => (
          <Option
            key={option}
            name={option}
            imageField={SkateboardOptions.DECKS[option]}
            onClick={updateDeck}
            imageStyles={deckDimensions}
            selected={option === deck}>
            {option}
          </Option>
        ))}
      </Options>
      <Options title="Wheels" selectedName={wheel}>
        {SkateboardOptions.WHEEL_OPTIONS.map(option => (
          <Option
            key={option}
            name={option}
            imageField={SkateboardOptions.WHEELS[option]}
            onClick={updateWheels}
            imageStyles={wheelDimensions}
            selected={option === wheel}>
            {option}
          </Option>
        ))}
      </Options>
      <Options title="Trucks" selectedName={truck}>
        {SkateboardOptions.METAL_OPTIONS.map(option => (
          <Option
            key={option}
            name={option}
            colorField={SkateboardOptions.METALS[option]}
            onClick={updateTrucks}
            selected={option === truck}>
            {option}
          </Option>
        ))}
      </Options>
      <Options title="Bolts" selectedName={bolt}>
        {SkateboardOptions.METAL_OPTIONS.map(option => (
          <Option
            key={option}
            name={option}
            colorField={SkateboardOptions.METALS[option]}
            onClick={updateBolts}
            selected={option === bolt}>
            {option}
          </Option>
        ))}
      </Options>
    </div>
  );
};
