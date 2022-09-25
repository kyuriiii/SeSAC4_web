import React, { useState, useEffect } from 'react';

const EffectInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    // useEffect(() => {
    //     console.log( '렌더링이 완료되었습니다.' );
    //     console.log( "name : ", name, " & email : ", email );
    // });

    // useEffect(() => {
    //     console.log("처음 렌더링될 때만 실행됨!!");
    // }, []);
    
    // useEffect(() => {
    //     console.log( "name이 변경될 때만 실행" );
    // }, [name]);

    useEffect (() => {
        console.log("effect");
        console.log(name);

        return () => {
            console.log("cleanup");
            console.log(name);
        };
    });

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={email} onChange={onChangeEmail} />
            </div>

            <div>
                <h2>이름: {name}</h2>
                <h2>이메일: {email}</h2>
            </div>
        </div>
    );
}

export default EffectInfo;