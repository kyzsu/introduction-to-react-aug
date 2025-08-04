import { useState, useEffect } from "react";

const localCache = {}; // gudang/storage untuk menyimpan jenis-jenis ras dari suatu hewan

// fungsi custom hooks --> memperoleh breedList daripada sebuah hewan. cat = british shorthair, havenese, sbgnya.
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]); // menyimpan value breedlist
  const [status, setStatus] = useState("belum kepake"); // menyimpan value status

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading...");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json(); // transformasi response dari server menjadi JSON

      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
