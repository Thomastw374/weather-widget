import Nav from "../components/Nav/Nav";
import WeatherContainerCard from "../components/WeatherContainerCard/WeatherContainerCard";
import NewsGallery from "../containers/NewsGallery/NewsGallery";
import "./Home.scss"

const Home = ({weather}) => {
    return (
      <div className="home">
        <header className="home__header">
          <Nav weather={weather} />
        </header>
        <main className="home__main">
          <h2>The Weather</h2>
          <WeatherContainerCard weather={weather} />
          <h2>Top News Today</h2>
          <NewsGallery />
        </main>
      </div>
    );
}

export default Home;