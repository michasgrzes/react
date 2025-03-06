import React, { useState, useEffect } from "react";
import Location from "./Location";

function Locations() {
  
  function addLocation({ id, name, type, dimentions }) {
    return (
      <Location
        key={id}
        id={id}
        name={name}
        type={type}
        dimentions={dimentions}
      />
    );
  }

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP tatus: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLocations(data.results); // <---------
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []); // Pusty array dependency powoduje, że fetch zostanie wykonany tylko raz po zamontowaniu komponentu

  return <div>{locations.map((location) => addLocation(location))}</div>;
}

export default Locations;
