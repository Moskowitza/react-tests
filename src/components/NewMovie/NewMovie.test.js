import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import NewMovie from './NewMovie.js'

afterEach(cleanup)

test('<NewMovie/>',()=>{
    const {debug, getByTestId, queryByTestId, container} = render(<NewMovie/>)
    expect(getByTestId('page-title').textContent).toBe("New Movie")
    expect(queryByTestId('movie-form')).toBeTruthy()
    // debug();
    console.log(container)
})

// if you render more than once, use cleanup in afterEach
// test('<NewMovie/> Two',()=>{
//     const {debug} = render(<NewMovie/>)
//     debug();
// })