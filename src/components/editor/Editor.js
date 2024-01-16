import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { createArticle } from "../../utils/apiHelper";
import { AlertPopUp } from "../../validation/alert";

export default function BlogEditor() {
  const [issuccess, setIsSuccess] = useState("");
  const [placeImage, setfile] = useState();
  const editorRef = React.useRef(null);
  const log = () => {
    if (editorRef.current) {
      let content = editorRef.current.getContent();
      console.log(content);
    }
  };
  return (
    <div style={{ marginBottom: "15px" }}>
      <Editor
        apiKey="your-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button style={{ marginTop: "15px" }} onClick={log}>
        Log editor content
      </button>
    </div>
  );
}
