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

  return (
    <div className="controls">
      <Options
        title="Deck"
        selectedName={deck ?? SkateboardOptions.DECK_OPTIONS[0]}>
        {SkateboardOptions.DECK_OPTIONS.map(option => (
          <Option
            key={option}
            name={option}
            imageField={SkateboardOptions.DECKS[option]}
            onClick={updateDeck}
            imageStyles={{
              width: "500%",
              height: "500%",
              translate: "20% -0%",
              objectFit: "cover",
            }}
            selected={option === deck}>
            {option}
          </Option>
        ))}
      </Options>
      <Options
        title="Wheels"
        selectedName={wheel ?? SkateboardOptions.WHEEL_OPTIONS[0]}>
        {SkateboardOptions.WHEEL_OPTIONS.map(option => (
          <Option
            key={option}
            name={option}
            imageField={SkateboardOptions.WHEELS[option]}
            onClick={updateWheels}
            imageStyles={{
              width: "125%",
              height: "125%",
              translate: "6% 8%",
              objectFit: "cover",
            }}
            selected={option === wheel}>
            {option}
          </Option>
        ))}
      </Options>
      <Options
        title="Trucks"
        selectedName={truck ?? SkateboardOptions.METAL_OPTIONS[0]}>
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
      <Options
        title="Bolts"
        selectedName={bolt ?? SkateboardOptions.METAL_OPTIONS[0]}>
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
