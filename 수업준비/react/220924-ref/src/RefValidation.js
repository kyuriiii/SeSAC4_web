import React, { Component } from 'react';
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

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
                />

                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        );
    }
}

export default RefValidation;