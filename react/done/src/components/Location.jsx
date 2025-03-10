import React from "react";

function Location(props) {
    return (
        <div class="location">
            <h1>
                <p>id: {props.id}</p>
                <p>name: {props.name}</p>
                <p>type: {props.type}</p>
                <p>dimension: {props.dimension}</p>
            </h1>
        </div>
    );
}

export default Location;
