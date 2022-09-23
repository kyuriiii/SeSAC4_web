import React, {Component} from 'react';

class EventClass extends Component {

    constructor(props){
        super( props );

        this.printConsole = this.printConsole.bind(this);
    }
    printConsole(msg) {
        console.log( "printConsole " );
        console.log( msg );
        console.log( this );
    }
    printConsole2 = () => {
        console.log( "printConsole2" );
        console.log( this );
    }
    sendParameter = () => {
        this.printConsole('2')
    }
    render() {
        return (
            <div>
                <button onClick={this.sendParameter}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventClass;