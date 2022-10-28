import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    console.log( process.env.REACT_APP_MODE );
    console.log( process.env.REACT_APP_DB_HOST );
    // let response = await axios.get('http://localhost:8000/react');
    // let response = await axios.get(process.env.REACT_APP_DB_HOST + '/react'); // proxy 설정하면
    // console.log( response );
    // console.log( response.data );
    // setUsers(response.data.result );
    // setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  if ( loading ) return <div>로딩중입니다</div>;

  return (
    <div>
      로딩 완료
    </div>
  );
}

export default App;
