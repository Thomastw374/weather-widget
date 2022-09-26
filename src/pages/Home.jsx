import Nav from "../components/Nav/Nav";
import WeatherContainerCard from "../components/WeatherContainerCard/WeatherContainerCard";

const Home = ({weather}) => {
    return (
      <>
        <header className="home__header">
          <Nav weather={weather} />
        </header>
        <main className="home__main">
          <WeatherContainerCard weather={weather}/>
        </main>
      </>
    );
}

export default Home;