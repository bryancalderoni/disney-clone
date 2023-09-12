import React from 'react'
import GenresList from '../Costant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
    {GenresList.genere.map((e, index) => index<=4&&(
        <div className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold
            '>{e.name}</h2>
            <MovieList genreId={e.id} index_={index} key={e.id}/>
        </div>
    ))}</div>
  )
}

export default GenreMovieList