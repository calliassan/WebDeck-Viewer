import { useState } from "react";
import FileUpload from "./components/FileUpload";
import Viewer from "./components/Viewer";
import Controls from "./components/Controls";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < urls.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="container">
      <h1>Website Viewer</h1>

      <FileUpload setUrls={setUrls} setIndex={setIndex} />

      {urls.length > 0 && (
        <>
          <Controls index={index} total={urls.length} next={next} prev={prev} />
          <Viewer url={urls[index]} />
        </>
      )}
    </div>
  );
}

export default App;
