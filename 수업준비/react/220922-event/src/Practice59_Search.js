import React, {useState} from 'react';
import './Practice59_Search.css';

function Select() {
    const [lists, setList] = useState([]);
    const [results, setResult] = useState([]);

    function writeList() {
        let form = document.getElementById("form_write");

        let newList = { writer: form.writer.value, title: form.title.value };
        setList(lists.concat(newList));
        form.reset();
    }
    function searchList() {
        let form = document.getElementById("form_search");
        let type = form.type.value;

        let newResult = lists.filter((list) => {
            if ( list[type].includes(form.search.value) ) return list;
        });
        setResult(newResult);
    }
    function allList() {
        setResult(lists);
    }
    return (
        <div>
            <form id="form_write">
                <fieldset>
                    작성자 : <input type="text" name="writer" placeholder='작성자'/>
                    제목 : <input type="text" name="title" />
                    <button type='button' onClick={writeList}>작성</button>
                </fieldset>
            </form>
            <form id="form_search">
                <select name="type">
                    <option value='writer'>작성자</option>
                    <option value='title'>제목</option>
                </select>
                <input type="text" name="search" size={30} placeholder="검색어" />
                <button type="button" onClick={searchList}>검색</button>
                <button type="button" onClick={allList}>전체</button>
            </form>
            
            <table border={1} cellPadding={5} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th><th>제목</th><th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list, index) => {
                        return (
                            <tr key={"tr_" + index}>
                                <td>{index+1}</td>
                                <td>{list.title}</td>
                                <td>{list.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {results.length > 0 ? (
                <div>
                    <h5> 검색 결과 </h5>
                    <table border={1} cellPadding={5} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>번호</th><th>제목</th><th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => {
                                return (
                                    <tr key={"tr_" + index}>
                                        <td>{index+1}</td>
                                        <td>{result.title}</td>
                                        <td>{result.writer}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ): <h5>검색 결과가 없습니다.</h5>}
        </div>
    );
}
export default Select;