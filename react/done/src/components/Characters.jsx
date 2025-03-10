import React, { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {

    function addCharacter({ id, name, status, species, image }) {
        return (
            <Character
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                image={image}
            />
        );
    }

    const [Characters, setCharacters] = useState([]);

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
    }, []);

    return <div class="characters">{Characters.map((character) => addCharacter(character))}</div>;
}

export default Characters;  