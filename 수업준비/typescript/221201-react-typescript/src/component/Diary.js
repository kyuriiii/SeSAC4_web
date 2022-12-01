import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Diary({ diary: d }) {
  const [diary, setDiary] = useState(d);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  function toggleShow() {
    setIsShow(!isShow);
  }

  if (diary.length === 0) {
    return null;
  }

  return (
    <tr>
      <td>{diary.title}</td>
      <td>{isShow && diary.content}</td>
      <td>
        <button onClick={toggleShow}>내용 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={()=>{dispatch({type: 'DIARY/DELETE', id: diary.id}); setDiary(0);}} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE
