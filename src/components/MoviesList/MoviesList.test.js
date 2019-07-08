import React from 'react';
import { render, cleanup, wait, waitForElement} from '@testing-library/react';
import MoviesList  from './MoviesList.js';
import {POSTER_PATH} from '../Movie/Movie.js';
import {MemoryRouter} from 'react-router-dom';

global.fetch=require('jest-fetch-mock')

afterEach(()=>{
    cleanup();
})

console.error=jest.fn();

const movies={
    results:[{
    id:'1',
    title: 'A Clockwork Orange',
    backdrop_path:'kgAi87gyx6b4oGJYSC36tVkJyJu',
    poster_path:"kgAi87gyx6b4oGJYSC36tVkJyJu.jpg",
    release_date:"10/10/10",
    overview:'In a futuristic Britain, Alex DeLarge is the leader of a gang of "droogs", Georgie, Dim and Pete. One night, after getting intoxicated on drug-laden "milk-plus", they engage in an evening of "ultra-violence", which includes a fight with a rival gang led by Billyboy. '
    },
    {
    id:'2',
    title: 'Avengers: Infinity War',
    backdrop_path:'7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    poster_path:"7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    release_date:"10/10/10",
    overview:'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy…'    },
    {
    id:'3',
    title: 'Men in Black',
    backdrop_path:'f24UVKq3UiQWLqGWdqjwkzgB8j8.jpg',
    poster_path:"f24UVKq3UiQWLqGWdqjwkzgB8j8.jpg",
    release_date:"July 2, 1997",
    overview:'After a police chase with an otherworldly being, a New York City cop is recruited as an agent in a top-secret organization established to monitor and police alien activity on Earth: the Men in Black. Agent Kay and…'    },
    ],
    }
test('<MoviesList /> with Details', async () =>{
    fetch.mockResponseOnce(JSON.stringify(movies))
        const { getByTestId, getAllByTestId, queryByTestId} =render(<MemoryRouter><MoviesList/></MemoryRouter>);
        expect(queryByTestId("loading")).toBeTruthy()
        const [movieLink, movieImg]= await waitForElement(()=> 
        [ getAllByTestId('movie-link'),
          getAllByTestId('movie-img')]
        )
        expect(queryByTestId("loading")).toBeFalsy()
        expect(movieLink[0].getAttribute('href')).toBe(`/${movies.results[0].id}`)
        expect(movieImg[0].src).toBe(`${POSTER_PATH}/${movies.results[0].poster_path}`)
})

// test('<MoviesList /> check for all', async () =>{
//     fetch.mockResponseOnce(JSON.stringify(movies))
//         const { getByTestId,queryByTestId,getAllByTestId} =render(<MemoryRouter><MoviesList/></MemoryRouter>);
//         expect(getByTestId("loading")).toBeTruthy()
//         await waitForElement(() => getAllByTestId('movie-link'))
//         expect(queryByTestId("loading")).toBeFalsy()
//         expect(getAllByTestId('movie-link').length).toBe(movies.results.length)

// })