function syntheticEvent(e){
  console.log("SyntheticEvent");
  console.log( e );
}
function SyntheticEvent() {
  return (
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent</button>
    </div>
  );
}

export default SyntheticEvent;
