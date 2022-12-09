import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

type TDate = {
  id: number;
  date: string;
}
type RootState = {
  dates: TDate[];
  diaries: [];
}
export default function DateList() {
  const dates:TDate[] = useSelector((state:RootState) => state.dates);
  
  if (dates.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_date">
      {dates.map((date:TDate) => (
        <li key={date.id}>
          <Link to={`/date/${date.date}`}>{date.date}</Link>
        </li>
      ))}
    </ul>
  );
}
