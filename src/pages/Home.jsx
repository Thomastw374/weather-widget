
const Home = ({getLocation}) => {
    return (
      <>
        <button onClick={() => getLocation()}>Get Location</button>
      </>
    );
}

export default Home;