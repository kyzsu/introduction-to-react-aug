const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1]; // menyertakan index 1 --> elemen kedua dalam array
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!res.ok) {
    // jika responnya tidak OK atau gagal, maka lempar error
    throw new Error(`details/${id} gagal fetching`);
  }

  return res.json();
};

export default fetchPet;
