import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPokemon } from "../../actions";
import { getPokemons } from "../../api/getPokemons";
import { PokemonList } from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonResponse) => {
        const pokemonData = pokemonResponse.map((response) => response.data);
        dispatch(setPokemon(pokemonData));
      })
      .catch((error) =>
        dispatch(setError({ message: "Ocurrio un error", error }))
      );
  }, []);
  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
