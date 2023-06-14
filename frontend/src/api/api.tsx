import react from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'http://songify-production.up.railway.app/', // trocar pela url do deploy
});
