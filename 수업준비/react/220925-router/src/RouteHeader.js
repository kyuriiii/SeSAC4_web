import React from 'react';
import { Link } from 'react-router-dom';

function ReactHeader(props) {
    return (
        <>
            <Link to="/">
                <h1>헤더입니다.</h1>
            </Link>
        </>
    );
}

export default ReactHeader;