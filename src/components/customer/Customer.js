import React from 'react'
import employee from '../../images/employees.png'
import plan from '../../images/plan.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import profile from '../../images/profile.png'
import queries from '../../images/queries.jpg'
import document from '../../images/documents.webp'
import payment from '../../images/payment.png'
import { useNavigate } from 'react-router-dom'
const Customer = () => {

    const navigate=new useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Customer Dashboard</div>
            <div className='container'>

                <div className='row my-5'>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={profile} className='rounded-pill'
                                    style={{
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block ms-3'>
                                    <div className='text2 fw-bold fs-1'>Profile</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    
                                    onClick={
                                        ()=>{
                                            navigate('/customer/profile')
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
                                <img src={plan} className=' img-fluid pe-5'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Policies</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={queries} className='rounded-pill'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Queries</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-5 justify-content-center'>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={document} className='rounded-pill'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Your Documents</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={payment} className='rounded-pill'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Policy Payment</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
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

export default Customer