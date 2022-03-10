import react from "react";
import { Grid } from "semantic-ui-react";
import { PokemonCart } from "./PokemonCart";

const PokemonList = () => {
  const pokemons = Array(20).fill("");
  return (
    <Grid className="PokemonList">
      {pokemons.map((pk) => (
        <PokemonCart />
      ))}
    </Grid>
  );
};

export { PokemonList };
