import Nav from "../components/Nav/Nav";
import Weather from "../components/Weather/Weather";
import Card from "../containers/Card/Card";
import "./Home.scss"
import Carousel from "../components/Carousel/Carousel";
import ToDoList from "../components/ToDoList/ToDoList";
import WeekForecast from "../containers/WeekForecast/WeekForecast";


const Home = ({weather, newsData, forecast}) => {
    return (
      <div className="home">
        <header className="home__header">
          <Nav weather={weather} />
        </header>
        <main className="home__main">
          <h2 className="home__subheader">The Weather Today</h2>
          <Card content={<Weather weather={weather} />} />
          <h2 className="home__subheader">Weekly Forecast</h2>
          <Card content={<WeekForecast forecast={forecast} />} />
          <h2 className="home__subheader">Top News Today</h2>
          <Card content={<Carousel newsData={newsData} />} />
          <h2 className="home__subheader">Your To Do List</h2>
          <Card content={<ToDoList />} />
        </main>
      </div>
    );
}

export default Home;