import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from "jspdf";
import 'jspdf-autotable';
import { reactLocalStorage } from 'reactjs-localstorage';
import { getToken } from '../utils/getToken';


function SalaryList() {

    const [salaries, setSalaries] = useState([]);
    const [searchName, setsearchName] = useState("");

    const get = async () => {
        try {
            const res = await axios({
                url: "http://localhost:5000/salary/allsalary/",    
                method: 'GET', 
                headers: {
                    Authorization: 'Bearer ' + getToken(),    
                }    
            })
            setSalaries(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    function remove(code) {
        axios.delete("http://localhost:5000" + "/salary/deletesalary/" + code).then(() => {
            window.location.href = "/SalaryList";

        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    function edit(code, name, email, students, fee) {
        const edit = true
        reactLocalStorage.setObject("Edit", [code, name, email, students, fee]);
        window.location.href = "/EditSalary";
    }
    const search = async () => {
        try {
            const res = await axios.get("http://localhost:5000" + "/salary/allsalary/" + searchName);
            setSalaries(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Salary Report";
        const headers = [["Code", "Name", "Email", "Salary (Rs)", "Net Salary (Rs)", "Date"]];

        const data = salaries.map(salaries => [salaries.code, salaries.name, salaries.email, salaries.salary, salaries.netsalary, salaries.date]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <div class="dashboard-main-wrapper" >
            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>

                    <hr />
                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >

                        <MDBRow className='mt-3'>
                            <div className='row'  >
                                <div className='col'>
                                    <MDBInput className="mt-3 bg-white" id='form1' type='text' placeholder="" style={{ width: "200px", }} onChange={(e) => {
                                        setsearchName(e.target.value);
                                    }} />
                                </div>

                                <div className='col' style={{ paddingTop: "15px" }}>
                                    <button type="button" className="btn btn-warning d-letter-spacing" onClick={search}>Search By name</button>
                                </div>
                                <div className='col' style={{ paddingTop: "15px", paddingLeft: "566px" }}>
                                    <button type="button" className="btn btn-success d-letter-spacing" style={{ backgroundColor: "red" }} onClick={exportPDF}>Get Report</button>
                                </div>
                            </div>
                            <MDBTable borderless className='mt-3' >
                                <MDBTableHead>
                                    <tr className="bg-dark">
                                        <th scope='col' className="text-white d-letter-spacing h6">Name</th>
                                        <th scope='col' className="text-white d-letter-spacing h6">Email</th>
                                        <th scope='col' className="text-white d-letter-spacing h6">Salary</th>
                                        <th scope='col' className="text-white d-letter-spacing h6">Net Salary</th>
                                        <th scope='col' className="text-white d-letter-spacing h6">Date</th>
                                        <th scope='col' className="text-white d-letter-spacing h6 text-center">Action</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {salaries.map((salaries, key) => (
                                        <tr className="bg-light">
                                            <td>
                                                <h6>
                                                    {salaries.name}
                                                </h6>
                                            </td>
                                            <td>
                                                <h6>
                                                    {salaries.email}
                                                </h6>
                                            </td>
                                            <td>
                                                <h6>
                                                    {salaries.salary} Rs /=
                                                </h6>
                                            </td>
                                            <td>
                                                <h6>
                                                    {salaries.netsalary} Rs /=
                                                </h6>
                                            </td>
                                            <td>
                                                <h6>
                                                    {salaries.date}
                                                </h6>
                                            </td>
                                            <td className="text-center">
                                                <MDBBtn size='sm' className="shadow-0" style={{ backgroundColor: "red", width: "80px" }} color='success' onClick={() => remove(salaries.code)}>Delete</MDBBtn>{''}&nbsp;&nbsp;
                                                <button size='sm' className="shadow-0" style={{ backgroundColor: "black", color: "white", width: "80px" }} type='submit' onClick={() => edit(salaries.code, salaries.name, salaries.email, salaries.students, salaries.fee)}>Edit</button>{''}&nbsp;&nbsp;
                                            </td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>
                    </div>
                </div>
            </div>
        </div >
    )
};


export default SalaryList
