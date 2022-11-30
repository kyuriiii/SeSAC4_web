type ButtonProps = {
    name: string;
    onAlert: (text: string) => void;
}

const Button = ({name, onAlert}:ButtonProps) => {
    return (
        <button onClick={()=>{ onAlert('text'); }}>{name}</button>
    )
}
export default Button;