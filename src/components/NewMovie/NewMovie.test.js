import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import NewMovie from './NewMovie.js'
import { exportAllDeclaration } from '@babel/types';

afterEach(cleanup)

test('<NewMovie/>',()=>{
    const {debug, getByTestId, queryByTestId} = render(<NewMovie/>)
    expect(getByTestId('page-title').textContent).toBe("New Movie")
    expect(queryByTestId('movie-form')).toBeTruthy()
    debug();
})

test('<NewMovie/> Two',()=>{
    const {debug} = render(<NewMovie/>)
    debug();
})