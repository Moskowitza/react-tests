import React, { Component } from 'react'

export default class MovieForm extends Component {
    state={
        text:''
    }
    handleChange(event) {
        const { value } = event.target;
        this.setState({text: value});
      }
    render() {
        const {submitForm}=this.props;
        const {text}=this.state
        return (
            <form data-testid="movie-form" onSubmit={()=>submitForm({text})}>
                <label htmlFor="text">text
                <input 
                type="text" 
                id="text" 
                value={text}
                onChange={this.handleChange}></input>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
