import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import MainNotFound from '../styles/pages/NotFound';

function NotFound() {
  const navigate = useNavigate();
  return (
    <MainNotFound>
      <h1>Not Found! :(</h1>
      <button type="button" onClick={() => navigate(-1)}>
        <span>
          <BiArrowBack />
        </span>
        Go back{' '}
      </button>
    </MainNotFound>
  );
}

export default NotFound;
