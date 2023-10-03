import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddSalary from "./Components/AddSalary";
import SalaryList from "./Components/SalaryList";
import EditSalary from "./Components/EditSalary";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddSalary" element={<AddSalary />} />
        <Route path="/EditSalary" element={<EditSalary />} />
        <Route path="/SalaryList" element={<SalaryList />} />
      </Routes>
    </Router>
  );
}

export default App;
