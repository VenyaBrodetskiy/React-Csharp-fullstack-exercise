import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { IMovie } from '../../business logic/interfaces/movie.interface';
import MoviesService from '../../business logic/services/movies.service';

export default function MoviesPage() {
    const [movies, setMovies] = useState<IMovie[]>();

    useEffect(() => {
        async function fetchData() {
            const games = await MoviesService.getMovies();
            if (typeof (games) === "string") {
                console.log("Error while fetching: ", games);
                // show pop up
            }
            else {
                setMovies(games);
            }
        }

        fetchData();
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: '#', minWidth: 50 },
        { field: 'movieName', headerName: 'Movie', flex: 2, minWidth: 150 },
        { field: 'rating', headerName: 'Rating', flex: 2, minWidth: 150 },
        { field: 'year', headerName: 'Year', flex: 1, minWidth: 80 },
    ];
    return (
        <div>
            <div className="display-4 mb-3">Movies</div>
            <hr />
            {movies && <DataGrid columns={columns} rows={movies} autoHeight className='bg-light col-lg-9' />}
        </div>
    )
}
