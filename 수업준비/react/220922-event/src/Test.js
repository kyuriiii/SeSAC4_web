import React, {useState} from 'react';

function Test () {
    const [name, setName] = useState('');
    function changeName1(){
        setName('aaaa');
    }
    function changeName2(){
        setName('tttt');
    }
    return(
        <div>
            {name}
            <br />
            <button type='text' onClick={changeName1}>변경1</button>
            <button type='text' onClick={changeName2}>변경2</button>
            <br />
            {name == "" ? <h5>비어있음</h5> : <h3>비어있지 않음</h3>}
        </div>
    )
}
export default Test;