import {useState, useEffect} from 'react';

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName( e.target.value );
    }
    const changeCnt = () => {
        setCnt( cnt + 1 );
    }
    // useEffect(() => {
    //     console.log("useEffect" );
    //     console.log( "name : ", name );
    // }, [cnt]);
    // componentDidUpdate(prevProps, prevState) {
    //     if ( prevState.name != this.state.name ) {
    //         // 실행
    //     }
    // }
    useEffect(() => {
        console.log( "name1 : ", name );
        return () => {
            console.log( "name2 : ", name );
        }
    }, [name]);
    return (
        <div class="1HookEffect">
            <div class="box">
                <input value={name} onChange={changeName} />
                <button onClick={changeCnt}>+1</button> 
            </div>

            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt} </h4>
        </div>
    )
}
// .1HookEffect .box {

// }

export default Hook;