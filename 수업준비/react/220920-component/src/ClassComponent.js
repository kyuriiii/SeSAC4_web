import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    static defaultProps = {
        name: "기본 이름"
    };
    
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return(
            <h1>Class Component 입니다. 이름은 { this.props.name }</h1>
        );
    }
}

export default ClassComponent;