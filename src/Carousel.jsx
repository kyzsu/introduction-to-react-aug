/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";

class Carousel extends Component {
  // state --> seperti useState di functional component. tugasnya untuk menyimpan var
  state = {
    active: 0,
  };

  // props --> menyimpan properti
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  // render --> return fn
  render() {
    // kita declare ulang state sama props supaya bisa dipake dalam render
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        {/* image gedenya or thumbnail */}
        <img src={images[active]} alt="animal thumbnail" />
        {/* carouselnya, kita bisa memilih image yang akan ditampilkan di thumbnail */}
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              className={index === active ? "active" : ""}
              src={photo}
              alt={`animal-${index}`}
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
