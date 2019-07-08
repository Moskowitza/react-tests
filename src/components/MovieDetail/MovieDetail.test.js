import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import MovieDetail, {BACKDROP_PATH, POSTER_PATH} from './MovieDetail.js';

global.fetch=require('jest-fetch-mock')

afterEach(()=>{
    cleanup();
})

console.error=jest.fn();

const match={
    params:{
        id:"1",
    }
}
const movie={
    id:'1',
    title: 'A Clockwork Orange',
    backdrop_path:'kgAi87gyx6b4oGJYSC36tVkJyJu',
    poster_path:"kgAi87gyx6b4oGJYSC36tVkJyJu.jpg",
    release_date:"10/10/10",
    overview:'UltraViolent'
}
test('<MovieDetail /> with Details', async ()=>{
    fetch.mockResponseOnce(JSON.stringify(movie))

        const {getByText,getByTestId, } =render(
            <MovieDetail match={match}/>
        );
        await waitForElement(()=>
            getByText('A Clockwork Orange')
        )
        expect(getByTestId('movie-title').textContent).toBe(movie.title)
        expect(getByTestId('movie-release_date').textContent).toBe(movie.release_date)
        expect(getByTestId('movie-poster').src).toBe(`${POSTER_PATH}/${movie.poster_path}`)
})