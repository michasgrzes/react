import React, { useState, useEffect } from "react";
import Episode from "./Episode";

function Episodes() {

    function addEpisode({ id, name, air_date, episode }) {
        return (
            <Episode
                key={id}
                id={id}
                name={name}
                air_date={air_date}
                episode={episode}
            />
        );
    }

    const [Episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP tatus: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setEpisodes(data.results); // <---------
            })
            .catch((error) => {
                console.error("Error fetching episodes:", error);
            });
    }, []);

    return <div class="episodes">{Episodes.map((episode) => addEpisode(episode))}</div>;
}

export default Episodes;