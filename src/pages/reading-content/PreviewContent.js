import React from "react";
import "./preview-content.css";
import { useLocation } from "react-router-dom";
import PDFDocument from "./PDFDocument";

function PreviewContent() {
  const location = useLocation();

  // Create a URLSearchParams object to work with query parameters
  const queryParams = new URLSearchParams(location.search);

  // Extract the values from query parameters
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  const pdfFileUrl = `${process.env.PUBLIC_URL}/matecconf_icmes2016_07016.pdf`;

  return (
    <div className="preview-content">
      <div className="wrapper">
        {/* preview-content
        <h1>Preview Content</h1>
        <p>Content ID: {id}</p>
        <p>Content Name: {name}</p>
        <hr />
        <h1>Path Parameters</h1>
        <p>id: {id}</p>
        <p>name: {name}</p> */}
        <PDFDocument width={"100%"} height={"100vh"} fileUrl={pdfFileUrl} />
      </div>
    </div>
  );
}

export default PreviewContent;
