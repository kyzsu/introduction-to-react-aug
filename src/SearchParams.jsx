import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  // usestate mengembalikan dua variable dalam array, dimana var 1 adalah valuenya, dan var 2 adalah fungsi untuk memperbarui valuenya.

  //   const breeds = []; ganti dengan line yg dibawah
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // arg 1 (callback) -> callback adalah fungsi/method yang ingin kita jalankan setelah web ke-render untuk pertama kalinya, arg 2 (dependency) -> trigger

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    ); // fetch ini akan mengembalikan sebuah promise (pending -> kita sedang menghubungi server, fulfilled -> kita menerima response dari server, rejected -> gagal menghubungi server)

    const json = await res.json();

    setPets(json.pets);
  }

  //   console.log("event pada input: ", location);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // mencegah reload, dan tidak menggunakan metode submit yg disediakan oleh form tapi menggunakan metode submitnya kita yaitu pake requestPets()
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        );
      })}
    </div>
  );
};

export default SearchParams;
