import React from 'react';
import { useRef, useState } from "react";
import { useNavigate  } from "react-router";
import { useSelector, useDispatch } from "react-redux"

export default function CreateDiary() {
  const dates = useSelector((state) => state.dates);
  const diaries = useSelector((state) => state.diaries);
  const history = useNavigate ();
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    let data = {
      id: diaries.length + 1,
      date: dateRef.current.value,
      title: titleRef.current.value,
      content: contentRef.current.value,
    }

    dispatch({type: 'DIARY/WRITE', payload: data});    
    alert("생성이 완료 되었습니다");
    history.push(`/date/${dateRef.current.value}`);
  }

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const dateRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>제목</label>
        <input type="text" placeholder="일기장 제목" ref={titleRef} />
      </div>
      <div className="input_area">
        <label>내용</label>
        <textarea placeholder="일기장 내용" ref={contentRef} />
      </div>
      <div className="input_area">
        <label>Date</label>
        <select ref={dateRef}>
          {dates.map(date => (
            <option key={date.id} value={date.date}>
              {date.date}
            </option>
          ))}
        </select>
      </div>
      <button>작성</button>
    </form>
  );
}
