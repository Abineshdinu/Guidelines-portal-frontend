import React, { useState, useEffect } from "react";
import axios from "axios";

function Question({ category }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchUploadedFiles();
  }, [category]);

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/uploaded-files?category=question-paper`);
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching uploaded files:", error);
    }
  };

  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/uploaded-files/download/${filename}`, {
        responseType: 'blob', // Important: responseType set to blob
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <section id="services" className="services sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Question-Papers</h2>
        </div>
        <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
          {files.map((file) => (
            <div className="col-lg-4 col-md-6" key={file._id}>
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-file-earmark-text" />
                </div>
                <h3>{file.name}</h3>
                <p>{file.category}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownload(file.filename)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Question;
