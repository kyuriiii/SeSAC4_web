import React, {Component} from 'react';

class ClassBind extends React.Component {
    constructor(props) {
      super(props);

      this.eventExample = this.eventExample.bind(this);
    }
    eventExample() {
        console.log( this );
    }

    eventExample2 = () => {
        console.log( this );
    }
  
    printConsole() {
        console.log( "printConsole" );
        console.log( this );
    }
    handleButton = () => {
        console.log( "handleButton" );
        console.log( this );
    }
    sendParameter = (msg) => {
        console.log(msg);
    }
  
    render() {
      return (
        <div>
            {/* <button onClick={printConsole}>printConsole</button> */}
            
            <button onClick={this.printConsole}>printConsole2</button>
            <button onClick={this.handleButton}>handleButton</button>



            <button onClick={()=>{this.sendParameter( 'sendParameter' )}}>
                sendParameter
            </button>


            <button onClick={this.sendParameter.bind(this,"sendParameter2")}>
                sendParameter2
            </button>

        </div>
      );
    }
}

export default ClassBind;