import React, { useState } from 'react';

const Contact = (props) => {
    const [contactList, setList ] = useState([]);
    const [findList, setFind] = useState("");

    const selectContact = () => {
        let form = document.getElementById("form_select");
        let arr = [];
        if ( contactList.length == 0 ) {
            alert("등록된 전화번호부가 없습니다.");
            return false;
        }
        for ( let i = 0; i < contactList.length; i++ ) {
            if ( form.name.value == contactList[i].name ) {
                arr.push(
                <tr>
                    <td>{contactList[i].name}</td>
                    <td>{contactList[i].contact}</td>
                </tr>);
            }
        }
        setFind(arr);
    }
    const setContact = () => {
        let form = document.getElementById("form_register");
        let list = {
            name: form.name.value,
            contact: form.contact.value
        };
        contactList.push(list);
        setList(contactList);
        form.reset();
    }
    
    return(
        <div>
            <div style={{display: "flex", border: "1 solid black"}}>
                <fieldset>
                    <legend>전화번호부 검색</legend>
                    <form id="form_select">
                        <input type="text" name="name" placeholder='이름' />
                        <button type='button' onClick={selectContact}>검색</button>
                    </form>
                </fieldset>
                <fieldset>
                    <legend>전화번호부 등록</legend>
                    <form id="form_register">
                        <input type="text" name="name" placeholder='이름' /> <br />
                        <input type="tel" name="contact" placeholder='전화번호' /> 
                        <button type='button' onClick={setContact}>등록</button>
                    </form>
                </fieldset>
            </div>
            <table id="table_find">
                <thead><tr><td>이름</td><td>연락처</td></tr></thead>
                    {findList}
            </table>
        </div>
    );
}

export default Contact;