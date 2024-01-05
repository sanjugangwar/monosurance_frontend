import React, { useEffect, useState } from 'react'
import employee from '../../images/employees.png'
import plan from '../../images/plan.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import schemes from '../../images/schemes.jpg'
import agents from '../../images/agents.jpeg'
import claims from '../../images/salary.png'
import customer from '../../images/cartoon-customer.png'
import insurace_account from '../../images/insurance_account.png'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const [valid, setValid] = useState(false);
    const navigate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ROLE_ADMIN') {
            alert("You are not logged in ")
            navigate('/login');
        }
        setValid(true);
    }

    useEffect(
        () => {
            validateUser();
        }
        , []
    )

    const employeeHandler = () => {
        navigate('/allEmployee')
    }


    return (

        <div>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Admin Dashboard</div>
            <div className='container'>

                <div className='row my-5'>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={employeeHandler}

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={employee} className='rounded-pill'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>Employees</div>
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
                                        navigate('/allPlans')
                                    }
                                }
                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={plan} className=' img-fluid pe-5'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>Plans</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'
                                onClick={() => navigate('/schemes')}
                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={schemes} className='rounded-pill'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block  ms-3'>
                                        <div className='text2 fw-bold fs-1 '>Schemes</div>

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
                                        navigate('/allAgents')
                                    }
                                }
                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={agents} className='rounded-pill'
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


                                onClick={
                                    () => navigate('/admin/customers')
                                }

                            >
                                <div class="card-body d-flex">
                                    <img src={customer} className='img-fluid'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>All Customer</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'


                                onClick={
                                    () => navigate('/admin/claims')
                                }

                            >
                                <div class="card-body d-flex">
                                    <img src={claims} className='img-fluid'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'>All Claims</div>

                                    </div>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-4 mt-5'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'

                                onClick={
                                    () => {
                                        navigate('/admin/accounts')
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
                </div>
            </div>

            <Footer></Footer>

        </div >
    )
}

export default Admin