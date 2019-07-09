import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Movie, {POSTER_PATH} from './Movie.js';
import {MemoryRouter} from 'react-router-dom';

afterEach(()=>{
    cleanup();
    console.error.mockClear()
})

console.error=jest.fn();

const movie={
    id:1,
    title: "A Clockwork Orange",
    poster_path:"kgAi87gyx6b4oGJYSC36tVkJyJu.jpg"        
}

test('<Movie>',()=>{
    render(<Movie/>);
    expect(console.error).toHaveBeenCalledTimes(1)
})
test('<Movie /> with movie',()=>{
    
    const {getByTestId} =render(
        <MemoryRouter>
            <Movie movie={movie}/>
        </MemoryRouter>
        );
 
    expect(console.error).not.toHaveBeenCalled()
    expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
    expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}/${movie.poster_path}`)

})