import React, { useState } from 'react';

function RepeatMap() {
    const [list, setList] = useState(['s','e','s','a','c']);

    function checkRepeat(){

        let list = ['a','b','c','d','e'];
        for ( let i = 0; i < list.length; i++ ) {
            console.log( list[i] );
        }

        let test ="A";

        let items = list.map((txt, id, arr) => {
            console.log( "txt : ", txt );
            console.log( "id : ", id );
            console.log( "arr : ", arr );
            return txt + id;
        });
        console.log( items );

    }
    function checkFilter(){
        
        let words = ['dog', 'cat', 'rabbit'];
        
        let result = words.filter(word => word.length > 3);
        console.log( result );


        let result2 = words.filter((word) => {
            return word.includes('a');
        });
        console.log( result2 );
    }
    return (
        <div>
            <button onClick={checkFilter}>checkFilter</button>
            <button onClick={checkRepeat}>checkRepeat</button>
            <ul>
                {list.map((name, id) => {
                    return <li key={id}>{name}</li>;
                })}
            </ul>
        </div>
    )
}

export default RepeatMap;