import React from 'react';

type Card2Props = {
    name: string;
    sign?: string;
}
const Card2 = ({ name, sign }: Card2Props) => {
    return (
        <div>{name}{sign}</div>
    )
}
Card2.defaultProps = {
    sign: '?'
}

export default Card2;