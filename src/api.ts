import dotenv from 'dotenv'; 
dotenv.config();

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  method: "GET",
  headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.ACCESS_TOKEN}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));