#Testing with @testing-library/react
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing Packages

- jest comes with CRA, and scans the folder looking for test.js files

- testing done with `npm i --save-dev @testing-library/react jest-dom`

- React-Testing-Library fully renders child components, unlike enzyme which "shallow renders".

### Counter

`fireEvent` to check on click
`afterEach(cleanup)` To run more than one test we need to remove the component from the dom

### Incrementor

Other example tests from a _counter_ like component

### NewMovie

Integration test to see if form comes in with parent
`expect(queryByTestId('movie-form')).toBeTruthy()`
using `queryByTestId` instead of `getByTestId` if you're not sure it will be there

### Snapshot testing

we use the method `.toMatchSnapshot()` on the assertion of a visual dom element
use `container` to find what you want the snapshot to be of.

### Using a Spy

use `const onSubmit=jest.fn();` to create a spy function to see if it was clicked
We can then check on our spy function
`fireEvent.click(getByText('Submit'))`
`expect(onSubmit).toHaveBeenCalledTimes(1);`
