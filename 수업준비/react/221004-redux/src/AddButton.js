import {add} from './actions';
import {connect} from 'react-redux';

var AddButton = (props) => {
    return (
        <input value="+100" type="button" onClick={props.addString} />
    )
}

/**
 * 데이터 세팅
 * @param {func} dispatch
 * @param {object} props 부모 컴포넌트에서 전달한 props
 * @returns {any}
 */
let mapDispatchToProps = (dispatch, props) => {
    // App.js에서 전달한 props 변수
    console.log(props.AddProp);
    return {
        addString: () => dispatch(add())
    }
}

// connect에 reducer에 액션 전달하는 dispatch 사용
AddButton = connect(null, mapDispatchToProps)(AddButton);

export default AddButton;