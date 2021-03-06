#Testing with @testing-library/react
This Repo is based on the [levelUpTut](https://www.leveluptutorials.com) on react testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

_May not work_ [Deployed to gh-pages ](http://moskowitza.github.io/react-tests)

## Testing Packages

- jest comes with CRA, and scans the folder looking for test.js files

- testing done with `npm i --save-dev @testing-library/react jest-dom`
- we will also be using `npm i --save-dev jest-fetch-mock`
- React-Testing-Library fully renders child components, unlike enzyme which "shallow renders".

### Counter & Incrementor

`fireEvent` to check on click
`afterEach(cleanup)` To run more than one test we need to remove the component from the dom

Other example tests from a _counter_ like component

## Real World Components

### NewMovie

Integration test to see if form comes in with parent
`expect(queryByTestId('movie-form')).toBeTruthy()`
using `queryByTestId` instead of `getByTestId` if you're not sure it will be there

### Snapshot testing

we use the method `.toMatchSnapshot()` on the assertion of a visual dom element
use `container` to find what you want the snapshot to be of.
jest will automatically create a snapshot folder at the location of the test

### Using a Spy

use `const onSubmit=jest.fn();` to create a spy function to see if it was clicked
We can then check on our spy function:  
`fireEvent.click(getByText('Submit'))`  
`expect(onSubmit).toHaveBeenCalledTimes(1);`

_Tests pass with this expected error_

```
Error: Not implemented: HTMLFormElement.prototype.submit
```

### Controlled Inputs

This is tricky and I had to dig around some to pass this test, there are other/older solutions, so heads up. We often handle form inputs like this:

```
    handleChange(event) {
        const { value } = event.target;
        this.setState({text: value});
      }
  ...
    <label htmlFor="text">text
        <input
            type="text"
            id="text"
            value={text}
            onChange={this.handleChange}>
        </input>
    </label>
```

To make a test we need to do the following:

- Create reference to the input with a label. You should have labels anyway!!!
- In the test, use `getByLabelText` off the `render` to get a reference to the input field.
- set the value in your test `getByLabelText("text").value="hello"` before the `fireEvent.change`
- `fireEvent.change` to handle the onChange method with targetting the value
  ```
  fireEvent.change(getByLabelText("text"), {
      target:{value:'hello'}
  })
  ```
- You can now test an assertion with your new text `expect(onSubmit).toHaveBeenCalledWith({text:"hello"})`

## Errors

you can spy on exected errors, just like any other function call
`console.error=jest.fn();`
`expect(console.error).toBeCalled()`

## Reset Spies

If multiple tests are called in one test file, we can reset our mocks using the afterEach method

```
afterEach(()=>{
    cleanup();
    console.error.mockClear()
})
```

## Testing details

When we pass info to a component we should check that the information is recieved correctly. Assert that the expected attributes are _toBe_ what you expect

```
expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
```

## Fetching async Data

- `import { waitForElement } from '@testing-library/react';`
- use `jest-fetch-mock` to handle json formatted data
- make your test call back `async`
- await your waitForElement

## Getting all the data

- Mock fake data of the same form you're passing in to your mapping component.
- Try a method like `getAllByTestId` off of the render to get ALL of something. You can then check the length toBe a number.
- I guess this works out

```
const [movieLink, movieImg]= await waitForElement(()=>
        [getAllByTestId('movie-link'),
         getAllByTestId('movie-img')]
        )
        expect(queryByTestId("loading")).toBeFalsy()
        expect(movieLink[0].getAttribute('href')).toBe(`/${movies.results[0].id}`)
        expect(movieImg[0].src).toBe(`${POSTER_PATH}/${movies.results[0].poster_path}`)
```
