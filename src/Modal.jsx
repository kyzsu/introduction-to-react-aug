import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // elRef memiliki default value null
  const elRef = useRef(null);

  // step 1 adalah mengecek elRef.current.
  // apakah tidak ada elRef.current? jika tidak ada, maka assign task untuk create element div pada elRef.current
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  // step 2
  useEffect(() => {
    // kita menambahkan instance/shortcut dari element "modal" ke variable "modalRoot".
    const modalRoot = document.getElementById("modal");
    // kita menambahkan child ke dalam element "modal", dalam hal ini adalah elRef.current.
    modalRoot.appendChild(elRef.current);

    // step 3
    // flushing method --> method yang disediakan oleh useEffect yang dipanggil ketika modalnya ditutup.
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // children adalah tempat dimana kita memasukan form, label, dsbnya yang merupakan isi dari modal kita. Elref.current dalam createPortal ini merupakan wrappernya.
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
