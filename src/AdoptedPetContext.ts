import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

// createContext itu dianalogikan sebagai sebuah gudang yang memiliki fungsi provider dan consumer.
const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 1,
    name: "Yanto",
    animal: "dog",
    description: "lorem ipsum",
    breed: "Labrador",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
