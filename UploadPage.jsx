import React, { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a music file.");
      return;
    }

    // Here you would upload to backend or cloud
    console.log("Uploading file:", file);
    setMessage("Music uploaded successfully!");
    setFile(null);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Upload Your Music</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept=".mp3,.wav" onChange={handleChange} />
        <button type="submit" style={{ display: "block", marginTop: "10px" }}>Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}