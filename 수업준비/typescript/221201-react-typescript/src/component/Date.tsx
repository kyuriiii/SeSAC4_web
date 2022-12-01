import React from 'react';
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import Diary, {IDiary} from "./Diary";

interface RootState {
  dates: [];
  diaries: [];
}

export default function Date() {
  const { date } = useParams<{date: string}>();
  const allDiaries: IDiary[] = useSelector((state: RootState) => { return state['diaries']});
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
