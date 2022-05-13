import React, {Component} from 'react'

type CounterState = {
    counter: number
}

class Counter extends Component {
    state: CounterState = {
        counter: 0
    }

    increment = () => {
        this.setState((prevState: CounterState) => ({
            counter: --prevState.counter
        }))
    }

    decrement = () => {
        this.setState((prevState: CounterState) => ({
            counter: ++prevState.counter
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

export default Counter