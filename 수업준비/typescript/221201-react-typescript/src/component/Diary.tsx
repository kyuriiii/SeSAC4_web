import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";

interface DiaryProps {
  diary: IDiary; // any 를 써버리면 typescript를 쓰는 이유가 없어진다. ( any 남발 금지 ! )
}
export interface IDiary {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Diary = ({ diary: d }:DiaryProps) => {
  const [diary, setDiary] = useState(d); 
  // diary.~ 를 찾으면 property를 바로 찾을 수 있다.
  // diary.id.foreach 이런 거 다 오류난다. ( 숫자에서는 foreach 못한다! );
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useDispatch();

  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <tr>
      <td>{diary.title}</td>
      <td>{isShow && diary.content}</td>
      <td>
        <button onClick={toggleShow}>내용 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={()=>{dispatch({type: 'DIARY/DELETE', id: diary.id}); }} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
export default Diary;