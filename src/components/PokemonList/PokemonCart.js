import React from "react";
import { Grid, Image, Divider, Label, Icon } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
import "./styles.css";

const PokemonCart = ({ pokemon }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computes={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR} />
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt="Pokemon Front"
        />
        <h2 className="PokemonCard-title"> {pokemon.name} </h2>
        <Divider />
        {pokemon.types.map((type) => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${pokemon.name}`}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};

export { PokemonCart };
