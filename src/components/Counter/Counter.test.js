import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import Counter from './Counter.js'

afterEach(cleanup)

test('<Counter />',()=>{
    const {debug, getByTestId}=render(<Counter/>);
    // debug();
    const counterButton=getByTestId('counter-button')
    expect(counterButton.tagName).toBe("BUTTON");
    // Assert incrementor starts at 0
    expect(counterButton.textContent).toBe("0");
    fireEvent.click(counterButton)
    expect(counterButton.textContent).toBe("1");
    // debug();
});