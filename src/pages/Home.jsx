import Nav from "../components/Nav/Nav";
import WeatherContainerCard from "../components/WeatherContainerCard/WeatherContainerCard";
import "./Home.scss"

const Home = ({weather}) => {
    return (
      
        <div className="home">
          <header className="home__header">
            <Nav weather={weather} />
          </header>
          <main className="home__main">
            <WeatherContainerCard weather={weather}/>
          </main>
        </div>
      
    );
}

export default Home;