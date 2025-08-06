/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component, MouseEvent } from "react";

export interface IProps {
  images: string[];
}

class Carousel extends Component<IProps> {
  // state --> seperti useState di functional component. tugasnya untuk menyimpan var
  state = {
    active: 0,
  };

  // props --> menyimpan properti
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // infokan handleIndexClick bahwa event yang kita maksudkan adalah sebuah event dengan mouse/cursor pada html element.
  handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    // jika target event tersebut bukan sebuah element HTML, maka tidak usah dipedulikan.
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
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
