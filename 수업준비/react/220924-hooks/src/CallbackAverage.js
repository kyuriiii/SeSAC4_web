import React, { useState, useMemo, useEffect, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산..!');

    if ( numbers.length === 0 ) return 0;
    const sum = numbers.reduce( (a, b) => a + b );
    return sum / numbers.length;
};

const CallbackAverage = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    // list의 값이 바뀔 때만 콜백함수로 들어온 getAverage 를 실행하고 그 결과를 반환해서 avg 에 담는다.
    const avg = useMemo(() => getAverage(list), [list]);
    
    // useMemo를 이런 식으로 변경도 가능하다. 그 대신 avg 값이 변경될 때마다 해당 부분이 다시 불러와져야 하니 state로 만들어야 한다.
    // const [avg, setAvg] = useState(0);
    // useEffect(() => {
    //     setAvg(getAverage(list));
    // }, [list]);

    // useCallback을 사용하지 않았을 때
    // const onChange = e =>{
    //     setNumber(e.target.value);
    // };
    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber("");
    // };

    
    // useCallback을 사용했을 때
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }, [number, list]);


    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ul>

            <div>
                {/* <b>평균값: {getAverage(list)}</b> */}
                {/* 렌더링 될 때마다 getAverage 가 실행된다. */}
                
                <b>평균값: {avg}</b>
            </div>
        </div>
    );
}

export default CallbackAverage;