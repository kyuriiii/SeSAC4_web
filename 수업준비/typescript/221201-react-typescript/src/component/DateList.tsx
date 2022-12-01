import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

interface IDate {
  id: number;
  date: string;
}
interface RootState {
  dates: [];
  diaries: [];
}
export default function DateList() {
  const dates: IDate[] = useSelector((state: RootState) => { return state['dates']});
  
  if (dates.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_date">
      {dates.map((date: IDate ) => (
        <li key={date.id}>
          <Link to={`/date/${date.date}`}>{date.date}</Link>
        </li>
      ))}
    </ul>
  );
}
