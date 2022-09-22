import React, { Component } from 'react';

class RepeatMapClass extends React.Component {
    state = {
        list : ['a','b','c','d','e']
    };
    checkRepeat = () => {
        console.log( this.state.list );
        this.state.list.map((element, id) => {
            console.log( "element : ", element );
            console.log( "id : ", id );
            console.log( "this : ", this );
        }, this );
    }

    render() {

        return(
            <button onClick={this.checkRepeat}>checkRepeat</button>
        );
    }
}
export default RepeatMapClass;