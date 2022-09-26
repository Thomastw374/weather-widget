import Afternoon from "../../assets/afternoon.png";
import Evening from "../../assets/evening.png";
import Morning from "../../assets/morning.png";
import Night from "../../assets/night.png";
import "./Nav.scss"

const Nav = ({ weather }) => {
  let greeting = "Good day!";
  let imgPath = "";

  if (weather) {
    const currentTime = weather.current.last_updated.substring(11, 13);
    if (currentTime < 12 && currentTime >= 6) {
      imgPath = Morning;
      greeting = "Good morning!";
    } else if (currentTime >= 12 && currentTime <= 17) {
      imgPath = Afternoon;
      greeting = "Good afternoon!";
    } else if (currentTime > 17 && currentTime < 22) {
      imgPath = Evening;
      greeting = "Good evening!";
    } else {
      imgPath = Night;
      greeting = "Good night!";
    }
  }

  return (
    <div className="nav">
      <img src={imgPath} alt="" className="nav__greeting-image" />
      <h1 className="nav__greeting">{greeting}</h1>
    </div>
  );
};

export default Nav;
