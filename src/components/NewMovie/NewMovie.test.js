import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import NewMovie from './NewMovie.js'

afterEach(cleanup)

test('<NewMovie/>',()=>{
    const {debug, getByTestId, queryByTestId, container} = render(<NewMovie/>)
    expect(getByTestId('page-title').textContent).toBe("New Movie")
    expect(queryByTestId('movie-form')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
    // debug();
    // console.log(container.firstChild)
})

// if you render more than once, use cleanup in afterEach
// test('<NewMovie/> Two',()=>{
//     const {debug} = render(<NewMovie/>)
//     debug();
// })