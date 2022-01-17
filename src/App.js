import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";

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
    });
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">PokeApp</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <Card bg="dark" text="light" key={pokemon.name}>
                <Card.Header>{pokemon.name}</Card.Header>

                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
