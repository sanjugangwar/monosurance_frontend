import React, { useEffect, useState } from 'react'
import profile from '../../images/profile.png'
import docoument from '../../images/documents.webp'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import insurace_account from '../../images/insurance_account.png'
import commission from '../../images/commission.webp'
import agents from '../../images/agents.jpeg'
import queries from '../../images/queries.jpg'
import { useNavigate } from 'react-router-dom'


const Employee = () => {

    const [valid, setValid] = useState(false);
    const navigate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('token') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ROLE_EMPLOYEE') {
            alert("You are not logged in ")
            navigate('/');
        }
        setValid(true);
    }

    useEffect(
        () => {
            // validateUser();
        }
        , []
    )

    return (
        <div>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Employee Dashboard</div>
            <div className='container'>

                <div className='row my-5'>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={
                                    () => {
                                        navigate('/employee/profile')
                                    }
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={profile} className='rounded-pill'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1 ms-3'>Profile</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={
                                    () => {
                                        navigate('/allAgents')
                                    }
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={agents} className=' img-fluid pe-5'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>Agents</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={() => {
                                    navigate('/employee/approve')
                                }}

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={docoument} className='rounded-pill'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'> Approve Documents</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row my-5 justify-content-center'>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={
                                    () => {
                                        navigate('/employee/accounts')
                                    }
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={insurace_account} className='rounded-pill'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>Insurance Accounts</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={
                                    () => navigate('/employee/queries')
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={queries} className='rounded-pill'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>Customer Queries</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    {/* <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={commission} className='rounded-pill'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'> Agents Commission</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <Footer></Footer>

        </div >
    )
}

export default Employee