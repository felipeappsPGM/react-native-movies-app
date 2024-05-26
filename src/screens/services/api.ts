import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "dc1c44f88847e20f3a87fd26777cf63e1",
        language: "pt-BR",
        include_adult: true,
    }
})