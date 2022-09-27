import React, { Component, createRef } from 'react';
import './RefValidation.css';

class RefValidation extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
        });
    }
    
    input2 = React.createRef();
    checkInputValue = () => {
        console.log( this.input.value );
        console.log( this.input2.current.value );
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
                />
                <input type="text" ref={ (ref) => { this.input = ref } } onChange={this.checkInputValue}/>
                <input type="text" ref={this.input2} onChange={this.checkInputValue}/>

                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        );
    }
}

export default RefValidation;
