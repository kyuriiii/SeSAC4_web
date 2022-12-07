import React from 'react';
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import Diary from "./Diary.js";

export default function Date() {
  const { date } = useParams();
  const allDiaries = useSelector((state) => state.diaries);
  const diaries = allDiaries.filter((diary) => diary.date == date );

  return (
    <>
      <h2>{date}</h2>
      {diaries.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {diaries.map(diary => (
            <Diary diary={diary} key={diary.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
