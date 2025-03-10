import React from "react";

function Character(props) {
    return (
        <div class="character">
            <h1>
                <p>id: {props.id}</p>
                <p>name: {props.name}</p>
                <p>status: {props.status}</p>
                <p>species: {props.species}</p>
            </h1>
            <img src={props.image} alt="" />
        </div>
    );
}

export default Character;