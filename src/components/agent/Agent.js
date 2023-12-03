import React from 'react'
import profile from '../../images/profile.png'
import plan from '../../images/plan.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import marketting from '../../images/What-is-marketing.webp'
import customer from '../../images/customer.jpg'
import insurace_account from '../../images/insurance_account.png'
import payment from '../../images/payment.png'
import commission from '../../images/commission.webp'
import { useNavigate } from 'react-router-dom'
const Agent = () => {

    const navigate=new useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Agent Dashboard</div>
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
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Profile</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    onClick={
                                        ()=>{
                                            navigate('/agentProfile')
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
                                <img src={marketting} className=' img-fluid pe-5'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Marketting</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={customer} className='rounded-pill'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Customers</div>
                                    <button className='btn btn-lg btn-outline-success'
                                    
                                    onClick={
                                        ()=>{
                                            navigate('/agent/addCustomer')
                                        }
                                    }
                                    
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
                                <img src={commission} className='rounded-pill'
                                    style={{

                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Commission</div>
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

export default Agent