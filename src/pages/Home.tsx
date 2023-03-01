import Form from '../components/Form';
import MainHome from '../styles/pages/Home';
import songify from '../assets/songify.svg';

function Home() {
  return (
    <MainHome>
      <img src={songify} alt="songify" />
      <h1>Songify!</h1>
      <Form />
    </MainHome>
  );
}

export default Home;
