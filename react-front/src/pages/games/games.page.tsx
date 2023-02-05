import React, { useEffect, useState } from 'react'

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import GamesService from '../../business logic/services/games.service';
import { IGame } from '../../business logic/interfaces/game.interface';

export default function GamesPage() {
    const [games, setGames] = useState<IGame[]>();

    useEffect(() => {
        async function fetchData() {
            const games = await GamesService.getGames();
            if (typeof (games) === "string") {
                console.log("Error while fetching: ", games);
                // show pop up
            }
            else {
                setGames(games);
            }
        }

        fetchData();
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: '#', minWidth: 50 },
        { field: 'gameName', headerName: 'Game', flex: 2, minWidth: 150 },
        { field: 'rating', headerName: 'Rating', flex: 2, minWidth: 150 },
        { field: 'year', headerName: 'Year', flex: 1, minWidth: 80 },
    ];
    return (
        <div>
            <div className="display-4 mb-3">Games</div>
            <hr />


            {games && <DataGrid columns={columns} rows={games} autoHeight className='bg-light col-lg-9' />}
        </div>
    )
}
