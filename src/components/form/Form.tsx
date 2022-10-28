/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RichTextEditor from "../richTextEditor/RichTextEditor";

const formContainer = css({
  width: "700px",
  height: "700px",
  backgroundColor: "white",
  borderRadius: "10px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const title = css({
  margin: "10px 0 20px",
});

const Form = () => {
  return (
    <div css={formContainer}>
      <h1 css={title}>Rich Text Editor Demo</h1>
      <RichTextEditor />
      Open console to see the generated html
    </div>
  );
};

export default Form;
