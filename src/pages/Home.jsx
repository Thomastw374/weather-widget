import Nav from "../components/Nav/Nav";

const Home = ({weather}) => {
    return (
      <main className="home-page">
        <header>
          <Nav weather={weather} />
        </header>
      </main>
    );
}

export default Home;