import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  // http://localhost:5173/details/:id
  // : --> merupakan sebuah transformator dimana kata yg ditambahkan setelahnya akan diubah menjadi variable. In this case, kita memiliki variable "id"
  return <h2>{id}</h2>;
};

export default Details;
