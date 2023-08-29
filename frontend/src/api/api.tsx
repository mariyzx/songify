import react from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3003/', // trocar pela sua porta do backend
});
