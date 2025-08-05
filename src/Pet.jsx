import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, city, state, images, id } = props; // deconstruct property, lego yang udah jadi, kita ambil pecahannya satu-satu

  let defaultImage = "http://pets-images.dev-apis.com/pets/none.jpg"; // image default dari pada hewan jika tidak memiliki foto.
  if (images.length) {
    // jika memiliki foto maka akan menggunakan foto pertama dari prop images.
    defaultImage = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      {/* to itu equivalen dari href, dia memiliki fungsi yg sama seperti href di anchor tag */}
      <div className="image-container">
        <img src={defaultImage} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal}-{breed} {city} ,{state}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
