import React from 'react';

type CardProps = {
    name: string;
    sign?: string;
}
// const Card:React.FC<CardProps> = ({name, sign = '!'}) => {
//     return (
//         <div>{name}{sign}</div>
//     )
// }
const Card:React.FC<{name: string}> = ({name}) => {
    return (
        <div>{name}</div>
    )
}

export default Card;