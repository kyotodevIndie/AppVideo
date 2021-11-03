import { useState } from "react";
import "./App.css";

export default function App() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  function handleAdd() {}
  return (
    <div className="App">
      <h1>Music</h1>
      <iframe
        width="500"
        height="300"
        src="https://www.youtube.com/embed/qiOV0DjdFgQ"
        title="YouTube video"
        frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div>
        <h1>Next</h1>
        {/* map aq */}
        <div>
          <h2>Title</h2>
          <img src="../public/favicon.ico" alt="video thumbnail" />
        </div>
      </div>
      <div>
        <h2>Videos</h2>
        <input
          placeholder="Youtube Link"
          value={url}
          onChange={(e) => setUrl(e)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
