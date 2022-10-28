import CustomUndo from "./CustomUndo";
import CustomRedo from "./CustomRedo";
import { Quill } from "react-quill";

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 150,
    maxStack: 100,
    userOnly: true,
  },
};

const FontStyle = Quill.import('attributors/style/font');
FontStyle.whitelist = ["sans-serif", "comic-sans", "georgia", "helvetica", "lucida"];
Quill.register(FontStyle, true);

var AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);

export const formats = [
  "undo",
  "redo",
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "align",
  "color",
  "bullet",
  "list",
  "link",
];

export const Toolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Normal</option>
      </select>
      <select className="ql-font">
        <option value="sans-serif">Sans Serif</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <select className="ql-align" />
      <select className="ql-color" />
      <button className="ql-list" value="bullet" />
      <button className="ql-list" value="ordered" />
      <button className="ql-link" />
    </span>
  </div>
);

export default Toolbar;
