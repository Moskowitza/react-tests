import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Incrementor from './Incrementor.js'

test('<Incrementor />',()=>{
    const {debug, getByTestId}=render(<Incrementor/>);
    debug();
    // Assert button is button
    expect(getByTestId('incrementor-button').tagName).toBe("BUTTON");
    // Assert incrementor starts at 0
    expect(getByTestId('incrementor-button').textContent).toBe("0");

});