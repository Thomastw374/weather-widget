import "./Carousel.scss";
import newsData from "../../data/mockNews";
import { useState } from "react";
import RightArrow from "../../assets/right-arrow.png";
import LeftArrow from "../../assets/left-arrow.png";

const Carousel = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === newsData.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(newsData.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
      <img
        className="carousel__arrow"
        src={LeftArrow}
        alt="left arrow"
        onClick={handleIncrement}
      />
      <div className="carousel__body">
        <div className="carousel__header">
          <h3 className="carousel__title">{newsData[counter].title}</h3>
          <p className="carousel__text">{newsData[counter].source}</p>
        </div>
        <img
          className="carousel__image"
          src={newsData[counter].image_url}
          alt="News Story"
        />
        <p className="carousel__text">{newsData[counter].description}</p>
      </div>
      <img
        className="carousel__arrow"
        src={RightArrow}
        alt="right arrow"
        onClick={handleDecrement}
      />
    </div>
  );
};

export default Carousel;
