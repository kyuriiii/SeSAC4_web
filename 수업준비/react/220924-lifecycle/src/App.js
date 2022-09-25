import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '1'
    }
  }
  componentDidMount() {
    console.log( "componentDidMount" );
  }
  
  componentDidUpdate(props, state){
    console.log( "componentDidUpdate" );
    console.log( "props : ", props );
    console.log( "State : ", state );
  }

  componentWillUnmount() {
    console.log( "componentWillUnmount" );
  }

  render() {
    return (
      <div>
        라이프사이클 {this.state.name}
        <button onClick={() => {this.setState({name:'hi'})}}>버튼</button>
      </div>
    );
  }
}
export default App;

// getEdrivedStateFromPops 메서드
// componentDidMount 메서드
// shouldComponentUpdate 메서드
// getSnapshotBeforeUpdate 메서드
// componentDidUpdate 메서드
// componentWillUnmount 메서드
// componentDidCatch 메서드
