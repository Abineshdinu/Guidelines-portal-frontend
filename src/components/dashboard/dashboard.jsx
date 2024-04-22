import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      formData.append('name', name);

      await axios.post('http://localhost:8080/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // File uploaded successfully, you can add further handling here
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-9">
          <form onSubmit={handleSubmit}>
            <h1 className="text-white mb-4">Upload Files </h1>
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body">
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">File Name</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" value={name} className="form-control" onChange={handleNameChange} />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">File Category</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <select value={category}  className= "form-control" onChange={handleCategoryChange}>
                      <option value="">Select</option>
                      <option value="question-paper">Question Paper</option>
                      <option value="Study-materials">Study Materials</option>
                      <option value="Syllabus">Syllabus</option>
                    </select>
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Upload Folder </h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="file" className="form-control" onChange={handleFileChange} />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button
                    type="submit"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-lg"
                  >
                    Upload 
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Dashboard;
