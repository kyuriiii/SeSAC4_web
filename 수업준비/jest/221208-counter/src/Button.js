function CountButton({ increase, decrease }) {
    return (
      <div>
        <button onClick={increase}> + </button>
        <button onClick={decrease}> - </button>
      </div>
    );
  }
  
  export default CountButton;