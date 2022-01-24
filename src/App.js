import React, { useEffect, useState } from "react";
import Header from "./components/Header";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import axios from "axios";
import PokeCard from "./components/PokeCard";
import Loader from "./components/Loader";

const App = () => {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );

      Promise.all(fetches).then((data) => {
        setPokemons(data);
        setIsLoading(false);
      });
      console.log(pokemons);
    });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && <Loader />}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
              />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
