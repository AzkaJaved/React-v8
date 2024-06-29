import { Link } from "react-router-dom";

const Pet = ({ name, images, location, animal, breed, id, key }) => {
  console.log(
    "name, images, location, animal, breed, id, key...",
    name,
    images,
    location,
    animal,
    breed,
    id,
    key
  );
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  // if (images.length) {
  //   hero = images[0];
  // }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>
          -{location}-{animal}
        </p>
      </div>
    </a>
  );
};
export default Pet;
