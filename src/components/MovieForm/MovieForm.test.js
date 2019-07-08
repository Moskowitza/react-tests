import React from 'react';
import { render, rerender, cleanup, fireEvent } from '@testing-library/react'
import MovieForm from './MovieForm.js'
afterEach(cleanup)

// const onSubmit = ()=>console.log('clicked onSubmit');
// Make this a SPY
const onSubmit=jest.fn();

test('<MovieForm/>',()=>{
    const {debug, getByTestId, queryByTestId, getByLabelText, getByText} = render(<MovieForm submitForm={onSubmit}/>)
    expect(queryByTestId('movie-form')).toBeTruthy();

    fireEvent.click(getByText('Submit'))

    
    getByLabelText("text").value="hello"
    fireEvent.change(getByLabelText("text"), {
        target:{value:'hello'}
    })
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({text:""})
})