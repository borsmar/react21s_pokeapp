import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({pokemon}) =>{


      return (
        <Card bg="dark" text="light" key={pokemon.name}>
                <Card.Header>{pokemon.name}</Card.Header>

                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
                </Card.Body>
              </Card>
    );
};

export default Cards