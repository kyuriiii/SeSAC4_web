import React, { useState } from 'react';

const SayFunction = () => {
    const [ message, setMessage ] = useState("");
    const onClickEnter = () => { setMessage("안녕하세요~"); };
    const onClickLeave = () => { setMessage("안녕히가세요."); };

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default SayFunction;