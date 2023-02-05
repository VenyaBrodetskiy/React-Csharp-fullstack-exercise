import axios from "axios";
import { IGame } from "../interfaces/game.interface";

class GameService {

    public async getGames() {
        try {
            const games = await axios.get<IGame[]>("http://localhost:7105/api/games");
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
export default new GameService();