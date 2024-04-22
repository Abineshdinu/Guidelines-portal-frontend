import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Dashboard from "./components/dashboard/dashboard";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Materials from "./components/materials/materials";
import Question from "./components/quesionPaper/question";
import Register from "./components/register/register";
import Syllabus from "./components/syllabus/syllabus";
import Navbar from "./layouts/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/question" element={<Question />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
