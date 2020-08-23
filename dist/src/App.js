import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
