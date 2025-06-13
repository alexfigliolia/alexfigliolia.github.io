import { PropLess } from "Tools/Types";
import { useCustomizer } from "../CustomizerContext";
import { SkateboardOptions } from "../SkateboardOptions";
import { Option, Options } from "./Options";
import "./styles.scss";

export const Controls = (_: PropLess) => {
  const { setBolt, setDeck, setTruck, setWheel, wheel, deck, truck, bolt } =
    useCustomizer();

  return (
    <div className="controls">
      <Options title="Deck" selectedName={deck}>
        {SkateboardOptions.DECKS.map(option => (
          <Option
            key={option}
            imageField={option}
            onClick={() => {
              setDeck(option);
            }}
            imageStyles={{
              width: "500%",
              height: "500%",
              translate: "20% -0%",
              objectFit: "cover",
            }}
            selected={option === deck}>
            {option.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Wheels" selectedName={wheel}>
        {SkateboardOptions.WHEELS.map(option => (
          <Option
            key={option}
            imageField={option}
            onClick={() => {
              setWheel(option);
            }}
            imageStyles={{
              width: "125%",
              height: "125%",
              translate: "6% 8%",
              objectFit: "cover",
            }}
            selected={option === wheel}>
            {option.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Trucks" selectedName={truck}>
        {SkateboardOptions.METALS.map(option => (
          <Option
            key={option}
            colorField={option}
            onClick={() => {
              setTruck(option);
            }}
            selected={option === truck}>
            {option.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Bolts" selectedName={bolt}>
        {SkateboardOptions.METALS.map(option => (
          <Option
            key={option}
            colorField={option}
            onClick={() => {
              setBolt(option);
            }}
            selected={option === bolt}>
            {option.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
    </div>
  );
};
