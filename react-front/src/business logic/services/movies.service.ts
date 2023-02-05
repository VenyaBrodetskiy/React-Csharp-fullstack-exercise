import axios from "axios";
import { IMovie } from "../interfaces/movie.interface";

class MoviesService {

    public async getMovies() {
        try {
            const games = await axios.get<IMovie[]>("http://localhost:7105/api/movies");
            console.log(games);
            if (games.status === 200 && games.data) {
                return games.data;
            } else {
                return games.statusText;
            }
        } catch (error) {
            console.log(error);
            return error as string;
        }
    }
}

/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new MoviesService();