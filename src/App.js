// src/App.js
import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // You can choose other themes as well
import "prismjs/components/prism-jsx.min"; // Include other languages as needed

import "./App.css";

const App = () => {
  const [code, setCode] = useState(`import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`);

  const highlight = (code) =>
    Prism.highlight(code, Prism.languages.jsx, "jsx");

  return (
    <>
    <div className="App">
        <div className="container">
          <h1>react-simple-code-editor</h1>
          <p>A simple no-frills code editor with syntax highlighting.</p>
        </div>  
          <a className="button" href="https://github.com/react-simple-code-editor/react-simple-code-editor">GitHub</a>
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={highlight}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              border: "1px #ddd",
              borderRadius: "4px",
              height: "230px",
              width: "400px",
              overflow: "auto",
              textAlign: "left",
              marginTop: "20px",
              }}
            />
      </div>
    </>
  );
};

export default App;
