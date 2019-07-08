import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Counter from './Counter.js'

test('<Counter />',()=>{
    const wrapper=render(<Counter/>);
    wrapper.debug();
    expect(wrapper.getByText("0").tagName).toBe("BUTTON");
});