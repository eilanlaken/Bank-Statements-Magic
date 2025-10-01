"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import CSVList from "./CSVList";
import { FaFileCsv } from "react-icons/fa6";

export default function PDFConverter() {
  const [error, setError] = useState<string>("");
  const [numPages, setNumPages] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [csvList, setCsvList] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      changeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      changeFile(e.target.files[0]);
    }
  };

  const changeFile = async (file: File) => {
    if (file.type !== "application/pdf") {
      setError(() => `PDF Converter accepts PDF files only.`);
      setFile(null);
      setNumPages(0);
      return;
    }

    setError("");
    setFile(file);
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    setNumPages(pdfDoc.getPageCount());
  };

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("bankName", "bankOfAmerica"); // hardcoded for now

    const res = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    // handle error
    // give a message
    // reassure them that they did not lose any credits.
    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      setError(JSON.stringify(error));
      return;
    }

    const csvText = await res.text();
    setCsvList((prev) => [...prev, "somefilename"]); // will be given from the server
  };

  return (
    <div className="upload-container">
      <div
        className={`dropzone ${isDragging ? "dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <p>{file ? file.name : "Upload bank statement PDF here"}</p>
        <input
          className="file-input"
          type="file"
          accept="application/pdf"
          onChange={handleFileSelect}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "300px",
        }}
      >
        {file && (
          <button className="convert-btn" onClick={handleSubmit}>
            <FaFileCsv size={20} style={{ marginRight: 8 }} />
            Convert to CSV
          </button>
        )}
        {numPages > 0 && <div>Cost: {numPages} tokens</div>}
        {error && <div className="error">Error: {error}</div>}
      </div>

      {/* CSV list */}
      {csvList.length > 0 && <CSVList items={csvList} />}
    </div>
  );
}
