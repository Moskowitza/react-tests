import React, { Component } from 'react'

export default class Incrementor extends Component {
    state={
        count:0
    }
    render() {
        const {count}=this.state
        return (
            <div>
                <button data-testid=
                "incrementor-button"
                >{count}</button>
            </div>
        )
    }
}
