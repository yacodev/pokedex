import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails } from "../../actions";
import { PokemonList } from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getPokemonWithDetails());
  }, []);
  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
