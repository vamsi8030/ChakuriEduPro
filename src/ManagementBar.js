import React from 'react';
import { Col, NavDropdown, Row, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const ManagementBar = () => {

    return(
        <div>
            <div classNameName="container-fluid">
                
                <div className="row">    {/* MAIN    ROW*/}
                  
                    <div className="col border-right ">  {/*FRIST col START*/}
                            <Col>
                                <Row>Name: Aditya Mukund</Row>
                                <Row>Current Role: Recruiter</Row>
                                <Row><Button variant="outline-primary" size="sm">SWITCH ROLE</Button></Row>
                            </Col>
 
                    </div> {/* Frist col ends*/}
                
                    <div className="col border-right ">
                    
                        <ul className="nav navbar-nav">
                            <li className="dropdown ">

                                <NavDropdown title="PROFILE MANAGEMENT" variant="dark" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">UPDATE PROFILE</NavDropdown.Item>
                                    <NavDropdown.Item href="#Password">PASSWORD</NavDropdown.Item>
                                    <NavDropdown.Item href="#WorkExperience">WORK EXPERIENCE</NavDropdown.Item>
                                    <NavDropdown.Item href="#YourProfileViewer">YOUR PROFILE VIEWER</NavDropdown.Item>
                                </NavDropdown>

                            </li>
                        </ul>
                    </div>
                 
                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li >
                                
                                <NavDropdown title="SKILLS EVALUATION" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/SelfAssessment">SELF ASSESSMENT</NavDropdown.Item>
                                    <NavDropdown.Item href="/ChakuriAssessment">CHAKURI ASSESSMENT</NavDropdown.Item>
                                    <NavDropdown.Item href="/ExternalAssessment">EXTERNAL ASSESSMENT</NavDropdown.Item>
                                </NavDropdown>
                            
                            </li>
                        </ul>
                    </div>
 
 
 
                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li >
                            
                                <NavDropdown title="JOB DASHBOARD" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#RecommendedJob">RECOMMENDED JOBS</NavDropdown.Item>
                                    <NavDropdown.Item href="#AppliedSavedJob">APPLIED/SAVED JOBS</NavDropdown.Item>
                                    <NavDropdown.Item href="#Employer">CONSULT WITH EMPLOYER</NavDropdown.Item>
                                    <NavDropdown.Item href="#Recruiter">CONSULT WITH RECRUITER</NavDropdown.Item>
                                </NavDropdown>
                            
                            </li>
                        </ul>
                    </div>
 
 
                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li >
                        
                                <NavDropdown title="TRAINING PROGRAMS DASHBOARD" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#Recommended">RECOMMENDED TRAINED</NavDropdown.Item>
                                    <NavDropdown.Item href="#Training">TRAINING IN PROGRESS</NavDropdown.Item>
                                    <NavDropdown.Item href="#Trainer">CONSULT WITH TRAINER</NavDropdown.Item>
                                    <NavDropdown.Item href="#Recruiter">CONSULT WITH RECRUITER</NavDropdown.Item>
                                </NavDropdown>

                            </li>
                        </ul>
                    </div>
 
 
 
                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li >
            
                                <NavDropdown title="PLACEMENT ACTIVITY" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#Reviewed">RESUME REVIEWED</NavDropdown.Item>
                                    <NavDropdown.Item href="#Shortlisted">RESUME SHORTLISTED</NavDropdown.Item>
                                    <NavDropdown.Item href="#Status">ROUND STATUS</NavDropdown.Item>
                                    <NavDropdown.Item href="#Offered">JOB OFFERED/REJECTED</NavDropdown.Item>
                                    <NavDropdown.Item href="#Details">ON JOB DETAILS</NavDropdown.Item>
                                </NavDropdown>
            
                            </li>
                        </ul>
                    </div>
 
                    <div className="col">
                        <ul className="nav navbar-nav">
                            <li>
    
                                <NavDropdown title="PAYMENT" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#Make">MAKE PAYMENT</NavDropdown.Item>
                                    <NavDropdown.Item href="#History">PAYMENT HISTORY</NavDropdown.Item>
                                    <NavDropdown.Item href="#Payment">PAYMENT ISSUES</NavDropdown.Item>
                                </NavDropdown>
    
                            </li>
                        </ul>
                    </div>
 
                </div>  {/* MAIN    ROW ENDS*/}
            </div>  {/* Container ENDS*/}
            <hr className ="border-dark-100 mx-auto" />
        </div>
        
    );

};

export default ManagementBar;