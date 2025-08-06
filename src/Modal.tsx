import { MutableRefObject, ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  // elRef memiliki default value null
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // step 1 adalah mengecek elRef.current.
  // apakah tidak ada elRef.current? jika tidak ada, maka assign task untuk create element div pada elRef.current
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  // step 2
  useEffect(() => {
    // kita menambahkan instance/shortcut dari element "modal" ke variable "modalRoot".
    const modalRoot = document.getElementById("modal");

    if (!modalRoot || !elRef.current) {
      return;
    }
    // kita menambahkan child ke dalam element "modal", dalam hal ini adalah elRef.current.
    modalRoot.appendChild(elRef.current);

    // step 3
    // flushing method --> method yang disediakan oleh useEffect yang dipanggil ketika modalnya ditutup.
    return () => {
      // ngecek apabila elRef.current ada isi atau bernilai true, maka silahkan hapus dia dari modalRoot. Kalo tidak ada/false, flushnya berhenti.
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  // alasan kita menambahkan if ke dalam useEffect dikarenakan elRef (useRef dalam hal ini) dapat memiliki nilai null. Oleh karena nilai null tersebut dia perlu dicek disetiap tempat si elRef dipakai/digunakan.

  // children adalah tempat dimana kita memasukan form, label, dsbnya yang merupakan isi dari modal kita. Elref.current dalam createPortal ini merupakan wrappernya.
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
