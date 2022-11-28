
function PracticeDefault() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : 000원</h3>
      <Button />
    </div>
  );
}

const Button = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <input type="text" />
      <button>입금</button>
      <button>출금</button>
    </div>
  )
}

export default PracticeDefault;
