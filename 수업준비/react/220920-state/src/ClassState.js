import React, { Component } from "react";

class ClassState extends Component {
    state = {
        number: 0,
    };
    render() {
        const { number } = this.state;
        return (
            <div>
                <div> <h3>Number : {number}</h3> </div>
                <button onClick={() => { 
                    this.setState(prevState => {
                        return {
                          number: prevState.number + 1
                        };
                    });

                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}> 설정 </button>            
            </div>
        );
    }
}
export default ClassState;