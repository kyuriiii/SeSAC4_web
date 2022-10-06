import React from 'react';

// Props 타입 명시
// 컴포넌트가 상위 컴포넌트로부터 어떤 속성을 전달받을 지에 대한 props 정의
// interface ButtonProps {
//     children?: React.ReactNode;
//     width: number; // 상위 요소가 버튼의 width를 조정 가능
//     onClick?: () => void;
// }

type ButtonProps = {
    children: React.ReactNode;
    width: number;
    onClick: ()=>void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { width, children, onClick } = props;

    return (
        <button style={{width: `${width}px`, height: '30px', display: 'flex', justifyContent: "center", alignItems: "center"}} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;