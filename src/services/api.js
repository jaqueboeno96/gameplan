//api key: 5a27dc9fbc9a4cdabc281f89c0268f3e
// https://api.rawg.io/api/games?key=5a27dc9fbc9a4cdabc281f89c0268f3e&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params:{
    key: '5a27dc9fbc9a4cdabc281f89c0268f3e',
    language: 'pt-BR'
  }
});

export default api;