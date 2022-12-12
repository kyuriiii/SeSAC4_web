import React, { useEffect, useState } from "react";
import "./editor.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const Editor = () => {
  const [value, setValue] = useState("");
  // useEffect(() => {
  //   axios.get("/api").then((res) => console.log(res.data));
  // });
  return (
    <div className="writer_wrapper">
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          // const data = editor.getData();
          setValue(editor.getData());
          console.log(value);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default Editor;
