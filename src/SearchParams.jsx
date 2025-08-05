import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  // const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  // const [breed, setBreed] = useState("");
  // const [pets, setPets] = useState([]);
  const [requestParams, setRequestParams] = useState({
    location: "",
    breed: "",
    animal: "",
  });
  // usestate mengembalikan dua variable dalam array, dimana var 1 adalah valuenya, dan var 2 adalah fungsi untuk memperbarui valuenya.

  //   const breeds = []; ganti dengan line yg dibawah
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  // useEffect(() => {
  //   requestPets();
  // }, []); // arg 1 (callback) -> callback adalah fungsi/method yang ingin kita jalankan setelah web ke-render untuk pertama kalinya, arg 2 (dependency) -> trigger

  // async function requestPets() {
  //   const res = await fetch(
  //     `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   ); // fetch ini akan mengembalikan sebuah promise (pending -> kita sedang menghubungi server, fulfilled -> kita menerima response dari server, rejected -> gagal menghubungi server)

  //   const json = await res.json();

  //   setPets(json.pets);
  // }

  //   console.log("event pada input: ", location);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // mencegah reload, dan tidak menggunakan metode submit yg disediakan oleh form tapi menggunakan metode submitnya kita yaitu pake requestPets()
          // requestPets();

          const formData = new FormData(e.target);
          const object = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };

          // object --> gabungan dari beberapa key-value pair

          setRequestParams(object);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
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
          <select disabled={!breeds.length} name="breed" id="breed">
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
