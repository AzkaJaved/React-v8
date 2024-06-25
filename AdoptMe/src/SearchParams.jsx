import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";

const ANIMAL = ["", "cat", "bird", "reptile", "dog", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPet] = useState([]);

  const [breeds] = useBreedList(animal);
  console.log("breed list", breeds);

  useEffect(() => {
    requestPets();
  }, []);

  const requestPets = async () => {
    const res =
      await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
  `);
    const json = await res.json();
    setPet(json.pets);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          const formData = new FormData();
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location.toLocaleUpperCase()}
          placeholder="location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          {ANIMAL.map((animal) => (
            <option value={animal}>{animal}</option>
          ))}
        </select>
        {/* <label htmlFor="breed">Breed</label>
        <select
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          disabled={breeds.length === 0}
        >
          {breeds.map((bred) => (
            <option value={bred}>{bred}</option>
          ))}
        </select> */}
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.name}
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
        />
      ))}
    </div>
  );
};
export default SearchParams;
