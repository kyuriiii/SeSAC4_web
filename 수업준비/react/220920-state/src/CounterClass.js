import React, { Component } from "react";

class Counter extends Component {
    // 기존 버전
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            origin: 0
        };
    }
    // 현재 버전
    // state = {
    //     number: 0
    // };

    render() {
        const { number, origin } = this.state;
        return (
            <div>
                <h2>Origin : { origin }</h2>
                <h3>Count : {number}</h3>
                {/* <button onClick={() => { 
                    this.setState({ number: number + 1 });
                    this.setState({ number: this.state.number + 1 });
                }}>+</button> */}
                <button onClick={() => { 
                    this.setState(prevState => {
                        return {
                          number: prevState.number + 1
                        };
                    });

                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}>+</button>
            </div>
        );
    }
}

export default Counter;