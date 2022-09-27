import Carousel from "../../components/Carousel/Carousel";
import "./Card.scss"



const Card = ({content}) => {
    

    return (
      <div className="news-card">
        {content}
      </div>
    );
}

export default Card;