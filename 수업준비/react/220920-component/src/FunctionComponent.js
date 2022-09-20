import React from 'react';
import PropTypes from 'prop-types';

const FunctionComponent = (props) => {
    return (
        <div>
            새로운 MyComponent 이름은 { props.name } 
            <h5>props.children</h5>
        </div>
    );
};

FunctionComponent.defaultProps = {
    name: '기본 이름'
};

FunctionComponent.propTypes = {
    name: PropTypes.string
};

export default FunctionComponent;