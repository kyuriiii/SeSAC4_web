import styled from 'styled-components';

const Mybox = styled.div`
    width: 500px;
    display: flex;
    align-itmes: center;
    margin: 200px auto;
`;

const Button = styled.button`
    width: 200px;
    outline: none;
    padding: 30px;
    font-size: 25px;
    font-weight: 500;
    margin: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:first-child {
        color: orange;
        background-color: black;
        border-bottom: orange 10px solid;
    }

    &:last-child {
        color: black;
        background-color: orange;
        border-bottom: black 10px solid;
    }
`;

const StyledComponent = () => {
    return (
        <Mybox>
            <Button>버튼1</Button>
            <Button>버튼2</Button>
        </Mybox>
    );
}
export default StyledComponent;

