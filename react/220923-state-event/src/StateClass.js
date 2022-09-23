import React, {Component} from 'react';

class StateClass extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: "SeSAC",
    //         list: ['s','e','s','a','c']
    //     };
    // }
    state = {
        name: "SeSAC",
        cnt: 0,
        list: ['s','e','s','a','c']
    };

    render(){
        return(
            <div>
                <div>{this.state.name} StateClass {this.state.cnt }</div>
                <button onClick={()=>{ 
                    // this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    // this.setState({name: "영등포 캠퍼스",  cnt:this.state.cnt + 1});
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                }}>클릭</button>
                <button onClick={()=>{ this.setState({list: ['c','l','i']})}}>클릭2</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default StateClass;
