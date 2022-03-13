import { CLEAR_ERROR, SET_ERROR, SET_POKEMON } from "./type";
import { getPokemons } from "../api/getPokemons";
import axios from "axios";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const getPokemonWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonResponse) => {
      debugger;
      const pokemonData = pokemonResponse.map((response) => response.data);
      dispatch(setPokemon(pokemonData));
    })
    .catch((error) =>
      dispatch(setError({ message: "Ocurrio un error", error }))
    );
};
