import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
const movies=[
    {
    id:'1',
    backdrop_path:"kgAi87gyx6b4oGJYSC36tVkJyJu",
    title: "A Clockwork Orange",
    poster_path:"kgAi87gyx6b4oGJYSC36tVkJyJu.jpg"        
    },
    {
    id:'1',
    title: "A Clockwork Orange",
    poster_path:"kgAi87gyx6b4oGJYSC36tVkJyJu.jpg"        
    },
]

// test('<MovieDetail>',()=>{
//     render(<MovieDetail/>);
//     expect(console.error).toHaveBeenCalledTimes(1)
// })
test('<MovieDetail /> with Deetails',()=>{
    fetch.mockResponseOnce(JSON.stringify({
        movie:{
            id:'1',
            backdrop_path:"kgAi87gyx6b4oGJYSC36tVkJyJu",
            title: "A Clockwork Orange",
            poster_path:"kgAi87gyx6b4oGJYSC36tVkJyJu.jpg"        
            }
        }))

    const {getByTestId, debug} =render(
            <MovieDetail match={match}/>
        );
})