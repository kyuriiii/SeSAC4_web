import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    // let response = await axios.get('http://localhost:8000/react');
    let response = await axios.get('/react'); // proxy 설정하면
    console.log( response.data );
    setUsers(response.data.result );
    setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  if ( loading ) return <div>로딩중입니다</div>;

  return (
    <div>
      <div>
        <h5>사용자 목록</h5>
        <table border="1" style={{marginTop: "10px"}}>
          <thead>
            <tr>
              <td>ID</td>
              <td>이름</td>
              <td>비밀번호</td>
            </tr>
          </thead>
          <tbody>
            { users.map((user) => (
              <tr key={"tr_" + user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.pw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
