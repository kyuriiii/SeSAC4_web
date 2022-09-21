import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent - function</h2>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.props.location}</h5>
            </div>
        );
    }
    
    static propTypes = {
    name: PropTypes.string
}
}
// function ClassComponent (props){
//     return (
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }

ClassComponent.defaultProps = {
    name: '기본이름',
    location: '기본위치'
}

export default ClassComponent;