import axios from 'axios';

export const video_api = axios.create({
  baseURL:"https://api.themoviedb.org/3"
});
