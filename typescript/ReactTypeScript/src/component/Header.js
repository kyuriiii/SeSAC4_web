import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Daily 일기장</Link>
      </h1>
      <div className="menu">
        <Link to="/create_diary" className="link">
          일기장 추가
        </Link>
        <Link to="/create_date" className="link">
          날짜 추가
        </Link>
      </div>
    </div>
  );
}
