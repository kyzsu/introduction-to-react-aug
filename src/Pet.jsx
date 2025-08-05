const Pet = (props) => {
  const { name, animal, breed, city, state, images, id } = props; // deconstruct property, lego yang udah jadi, kita ambil pecahannya satu-satu

  let defaultImage = "http://pets-images.dev-apis.com/pets/none.jpg"; // image default dari pada hewan jika tidak memiliki foto.
  if (images.length) {
    // jika memiliki foto maka akan menggunakan foto pertama dari prop images.
    defaultImage = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={defaultImage} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal}-{breed} {city} ,{state}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
