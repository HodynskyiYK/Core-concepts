import React, {Component} from 'react'

interface ICounterState {
    counter: number
}

export class Counter extends Component {
    state: ICounterState = {
        counter: 0
    }

    increment = () => {
        this.setState((prevState: ICounterState) => ({
            counter: prevState.counter - 1
        }))
    }

    decrement = () => {
        this.setState((prevState: ICounterState) => ({
            counter: prevState.counter + 1
        }))
    }

    render() {

        return (
            <div className="row align-items-center">
                <div className="col-auto">
                    <button
                        className="btn btn-danger"
                        onClick={this.increment}
                    >Minus</button>
                </div>
                <div className="col-auto">
                    <h3 style={{margin: '0'}}>
                        {this.state.counter}
                    </h3>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-primary"
                        onClick={this.decrement}
                    >Plus</button>
                </div>
            </div>
        )
    }
}
