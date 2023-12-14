import React, { useEffect, useState } from 'react'
import employee from '../../images/employees.png'
import plan from '../../images/plan.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import schemes from '../../images/schemes.jpg'
import agents from '../../images/agents.jpeg'
import claims from '../../images/claims.webp'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const [valid, setValid] = useState(false);
    const navigate=new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ROLE_ADMIN') {
            alert("You are not logged in ")
            navigate('/login');
        }
        setValid(true);
    }

    useEffect(
        ()=>{
            validateUser();
        }
        ,[]
    )

    const employeeHandler=()=>{
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
                            <div class="card-body d-flex align-items-center">
                                <img src={employee} className='rounded-pill'
                                    style={{
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Employees</div>
                                    <button className='btn btn-lg btn-outline-success'
                                     
                                     onClick={employeeHandler}

                                    >View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={plan} className=' img-fluid pe-5'
                                    style={{
                                        
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Plans</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    onClick={
                                        ()=>{
                                            navigate('/allPlans')
                                        }
                                    }
                                    >View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={schemes} className='rounded-pill'
                                    style={{
                                      
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block  ms-3'>
                                    <div className='text2 fw-bold fs-1 '>Schemes</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    onClick={()=>navigate('/schemes')}
                                    >View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-5 justify-content-center'>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={agents} className='rounded-pill'
                                    style={{
                                        
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Agents</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    onClick={
                                        ()=>{
                                            navigate('/allAgents')
                                        }
                                    }
                                    >View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={claims} className='rounded-pill'
                                    style={{
                                      
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Claims</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    

                                    onClick={
                                        ()=>navigate('/admin/claims')
                                    }
                                    
                                    >View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default Admin