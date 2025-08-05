import Pet from "./Pet";

const Results = ({ pets = [] }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>Tidak ada hewan peliharaan yang ditemukan</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              key={pet.id} // ini adalah component yang unik / distinct yg diberikan dari FE
              images={pet.images}
              city={pet.city}
              state={pet.state}
              id={pet.id} // penanda uniqude Identifier (ID) si Pet dari API
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
