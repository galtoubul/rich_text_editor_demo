/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import CustomToolbar, { modules, formats } from "./ToolBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

const rte = css({
  marginBottom: "10px",
  flexBasis: "90%",
  width: "95%",
});

const preHtml = `<h1><span style="font-family: comic-sans;">Hi</span></h1><h2>This <em>is a demo</em></h2><p>to <strong>demonstrate</strong> this rte</p><ol><li><span style="color: rgb(0, 97, 0);">a</span></li><li><span style="color: rgb(0, 97, 0);">b</span></li><li><span style="color: rgb(0, 97, 0);">cc</span></li></ol>`

const RichTextEditor = () => {
  const [value, setValue] = useState(preHtml);
  const handleChange = (content: any, delta: any, source: any, editor: any) => {
    setValue(value);
    console.log(editor.getHTML());
  };

  return (
    <div css={rte}>
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default RichTextEditor;
