import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
import axios from "axios";
import { Button } from "react-bootstrap";

const PokeList = () =>{

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPokemons, setNextPokemons] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    getPokemons();
  }, []);

const getPokemons = () => {
    axios.get(nextPokemons).catch(error => {
        console.log(error);
      }).then((res) => {
        const fetches = res.data.results.map((p) =>
          axios.get(p.url).then((res) => res.data)
        );

        setNextPokemons(res.data.next);

        Promise.all(fetches).then((data) => {
          setPokemons((prevState) => [...prevState, ...data]);
          setIsLoading(false);
        });
      });
}

    return (
        <>
        <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Loader/>
          )}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <Cards  pokemon={pokemon}/>
            ))}
        </Row>
      </Container>
      <Button variant="primary" size='lg' onClick={getPokemons()}>Load MORE</Button>
      </>
    );
};

export default PokeList