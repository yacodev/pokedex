import react from "react";
import { Grid } from "semantic-ui-react";
import { PokemonCart } from "./PokemonCart";

const PokemonList = ({ pokemons }) => {
  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon, index) => (
        <PokemonCart pokemon={pokemon} key={`pokemon-${index}`} />
      ))}
    </Grid>
  );
};

PokemonList.defaultProps = {
  pokemons: [],
};

export { PokemonList };
