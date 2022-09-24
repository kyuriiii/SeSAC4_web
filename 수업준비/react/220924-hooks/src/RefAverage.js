import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산..!');

    if ( numbers.length === 0 ) return 0;
    const sum = numbers.reduce( (a, b) => a + b );
    return sum / numbers.length;
};

const RefAverage = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const input = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
        input.current.focus();
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={input} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ul>

            <div>
                <b>평균값: {avg}</b>
            </div>
        </div>
    );
}

export default RefAverage;