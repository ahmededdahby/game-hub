import React from 'react'
import useGenres from '../Hooks/useGenres'


const GenresList = () => {
    const { Genres , error,isLoading}= useGenres()
    return (
        <>
            <ul>
                {Genres?.map(genre => <li key={genre.id}>{ genre.name}</li>)}
            </ul>
        </>
    )
}

export default GenresList
