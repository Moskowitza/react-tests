import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import MovieForm from './MovieForm.js'
afterEach(cleanup)

// const onSubmit = ()=>console.log('clicked onSubmit');
// Make this a SPY
const onSubmit=jest.fn();

test('<MovieForm/>',()=>{
    const {debug, getByTestId, queryByTestId, container, getByText} = render(<MovieForm submitForm={onSubmit}/>)
    expect(queryByTestId('movie-form')).toBeTruthy();
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledTimes(1);
})