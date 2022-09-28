import React, {Component, createRef} from 'react';

class Ref extends Component {

    event1(){
        let input = document.getElementById("input1");
        console.log( input.value );
    }
    event2 = () => {
        console.log( this.input.value );
    }
    input3 = React.createRef();
    event3 = () => {
        console.log(this.input3.current.value);
    }
    render() {
        return (<>
            <div>
                <input type="text" id="input1" />
                <button onClick={this.event1}>버튼</button>
            </div>
            <div>
                <input type="text" ref={ (ref) => { this.input = ref } } />
                <button onClick={this.event2}>버튼2</button>
            </div>
            <div>
                <input type="text" ref={this.input3} />
                <button onClick={this.event3}>버튼3</button>
            </div>
        </>);
    }
}

export default Ref;