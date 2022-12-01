import React from 'react';

type CardProps = {
    name: string;
    sign?: string;
}
const Card:React.FC<CardProps> = ({name, sign = '!'}) => {
    return (
        <div>{name}{sign}</div>
    )
}

export default Card;