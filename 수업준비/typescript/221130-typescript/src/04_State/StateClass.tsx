import {Component} from 'react';

class StateClass extends Component {
    constructor(props) {
        super(props);
        
    }
    render(){
        return (
            <div>{this.state.name}</div>
        )
    }
}
export default StateClass;