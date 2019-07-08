import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Counter from 'Counter'

test('<Counter />',()=>{
    const wrapper=render(<Counter/>);
})