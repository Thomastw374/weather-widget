import Nav from "../components/Nav/Nav";
import Weather from "../components/Weather/Weather";
import Card from "../containers/Card/Card";
import "./Home.scss"
import Carousel from "../components/Carousel/Carousel";
import ToDoList from "../components/ToDoList/ToDoList";

const Home = ({weather}) => {
    return (
      <div className="home">
        <header className="home__header">
          <Nav weather={weather} />
        </header>
        <main className="home__main">
          <h2>The Weather</h2>
          <Card content={<Weather weather={weather}/>} />
          <h2>Top News Today</h2>
          <Card content={<Carousel/>} />
          <h2>Your To Do List</h2>
          <Card content={<ToDoList />}/>
        </main>
      </div>
    );
}

export default Home;