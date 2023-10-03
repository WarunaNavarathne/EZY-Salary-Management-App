import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';


function EditSalary() {

    const [submit, setSubmit] = useState(true);
    var Edit = reactLocalStorage.getObject('Edit');
    const [ecode, setecode] = useState(Edit[0])
    const [name, setName] = useState(Edit[1])
    const [email, setEmail] = useState(Edit[2])
    const [students, setStudents] = useState(Edit[3])
    const [fee, setFee] = useState(Edit[4])
    const [salary, setSalary] = useState("")
    const [netsalary, setNetsalary] = useState("")
    const today = new Date();
    const date = today.toISOString().slice(0, 10);



    const valid = () => {
        if ((email != "") && (name != "") && (students != "") && (fee != "")) {
            setSubmit(false)
        }
        else {
            setSubmit(true)
        }
    }

    const calc = () => {
        const sal = students * fee
        setSalary(sal)
        const netSal = sal - (sal * 0.10)
        setNetsalary(netSal)
    }


    async function edited(e) {

        const code = ecode
        const salarys = { code, name, email, students, fee, salary, netsalary, date };
        try {
            const response = await axios.put("http://localhost:5000" + "/salary/updatesalary", salarys);
            console.log(response.data);
            Swal.fire({
                title: "Success!",
                text: "Edited",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            });
            setTimeout(() => {
                window.location.href = "/SalaryList";
            }, 1000);

        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Not Edited",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/EditSalary";
        }
    }

    useEffect(() => {

        valid()
        calc()

    }, [name, email, students, fee, salary, netsalary, date])

    return (
        <div class="dashboard-main-wrapper" >
            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>

                    <hr />
                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >

                        <MDBRow className='mt-3'>

                            <MDBCol sm='1'></MDBCol>
                            <MDBCol sm='10'>
                                <MDBCard className='shadow-0'>
                                    <MDBCardBody className="bg-light">
                                        <center>
                                            <h4>Edit Salary</h4>
                                        </center>
                                        <br />
                                        <br />
                                        <form >
                                            <div className='row'>
                                                <div className='col'>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label h6">Full Name</label>
                                                        <input type="text" class="form-control" placeholder=""
                                                            onChange={(e) => {
                                                                setName(e.target.value);
                                                            }} value={name} />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label h6">Email</label>
                                                        <input type="email" class="form-control" placeholder=""
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                            }} value={email} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label h6">Number of Students</label>
                                                        <input type="number" class="form-control" placeholder=""
                                                            onChange={(e) => {
                                                                setStudents(e.target.value);
                                                            }} value={students} />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label h6">One Student Fee</label>
                                                        <input type="number" class="form-control" placeholder=""
                                                            onChange={(e) => {
                                                                setFee(e.target.value);
                                                            }} value={fee} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label h6">Salary</label>
                                                <input type="text" class="form-control" placeholder=""
                                                    value={salary} disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label h6">Net Salary</label>
                                                <input type="text" class="form-control" placeholder=""
                                                    value={netsalary} disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label h6">Date</label>
                                                <input type="text" class="form-control" placeholder=""
                                                    value={date} disabled />
                                            </div>
                                            <br />
                                        </form>
                                        <div className="text-end">
                                                <button class="btn btn-success d-letter-spacing " onClick={edited} disabled={submit} style={{ width: "200px" }}>Edit</button>
                                            </div>
                                        <br />

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default EditSalary
