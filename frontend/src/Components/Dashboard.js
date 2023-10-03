import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';


function Dashboard() {

    return (
        <div class="dashboard-main-wrapper" >
            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>

                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}>Admin Dashboard</h4>
                    <hr />

                    <MDBRow style={{ marginTop: '6%' }}>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow style={{ marginTop: '3%' }}>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{ marginTop: '3%' }}>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="#">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ backgroundColor: '#333333', boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                        Name
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                    </MDBRow>

                </div>
            </div>
        </div >
    )
};


export default Dashboard;