import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  // default value dari pada haserror harus false, kalo gak nanti halaman yang ingin kita tampilkan tidak muncul melainkan halaman error messagenya
  state = { hasError: false };

  // error lifecycle, semisal dia mendeteksi error, dia akan memperbarui state has error menjadi true
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(
      "Error Boundary telah menangkap error, detail sbg berikut: ",
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Terdapat error ketika mencoba menampilkan halaman. Silahkan{" "}
          <Link to="/">Click disini</Link> untuk diarahkan ke beranda.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
