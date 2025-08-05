import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  // http://localhost:5173/details/:id
  // : --> merupakan sebuah transformator dimana kata yg ditambahkan setelahnya akan diubah menjadi variable. In this case, kita memiliki variable "id"

  const results = useQuery(["details", id], fetchPet);
  // useQuery menerima dua arg, arg 1 --> queryKey, arg 2 --> fungsi/methodnya

  // loading state, apabila isLoading adalah true, maka kita kembalikan HTML untuk menginfokan bahwa sedang fetching.
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💫</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed}. ${pet.city}, ${pet.state}`}</h2>
        <button>Adopsi si {pet.name}?</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
