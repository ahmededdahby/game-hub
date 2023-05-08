import React from 'react'
import useGenres from '../Hooks/useGenres'


const GenresList = () => {
    const { Data , error,isLoading}= useGenres()
    return (
        <>
            <ul>
                {Data.map(genre => <li key={genre.id}>{ genre.name}</li>)}
            </ul>
        </>
    )
}

export default GenresList
