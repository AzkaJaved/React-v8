import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets founds</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            // {...pet}
            key={pet.id}
            id={pet.id}
            name={pet.name}
            breed={pet.breeds}
            animal={pet.animal}
            images={pet.image}
            location={`${pet.city},${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
