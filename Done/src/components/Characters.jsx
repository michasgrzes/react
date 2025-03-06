import React, { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
  
  function addCharacter({ id, name, status, species, type, image }) {
    return (
      <Character
        key={id}
        id={id}
        name={name}
        status={status}
        species={species}
        type={type}
        image={image}
      />
    );
  }

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP tatus: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results); // <---------
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []); // Pusty array dependency powoduje, że fetch zostanie wykonany tylko raz po zamontowaniu komponentu

  return <div>{characters.map((character) => addCharacter(character))}</div>;
}

export default Characters;
