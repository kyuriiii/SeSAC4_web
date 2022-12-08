function CountButton({ increase, decrease }) {
    return (
      <div>
        <button onClick={increase} data-testid='increaseBtn'> + </button>
        <button onClick={decrease} data-testid='decreaseBtn'> - </button>
      </div>
    );
  }
  
  export default CountButton;