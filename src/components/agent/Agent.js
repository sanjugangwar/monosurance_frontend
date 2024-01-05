import React from 'react'
import profile from '../../images/profile.png'
import plan from '../../images/plan.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import marketting from '../../images/markettingimg.png'
import customer from '../../images/addCustomer.png'
import insurace_account from '../../images/insurance_account.png'
import customers from '../../images/customer.jpg'

import commission from '../../images/salary.png'
import { useNavigate } from 'react-router-dom'
const Agent = () => {

    const navigate = new useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Agent Dashboard</div>
            <div className='container'>

                <div className='row my-5'>
                    <div className='col-4'>

                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn'
                                onClick={
                                    () => {
                                        navigate('/agentProfile')
                                    }
                                }
                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={profile} className='rounded-pill'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block'>
                                        <div className='text2 fw-bold fs-1 ms-5 '>Profile</div>

                                    </div>

                                </div>
                            </button>
                        </div>

                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <button className='btn btn-lg customBtn' onClick={
                                () => { navigate('/agent/marketting') }}

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={marketting} className=' img-fluid pe-5'
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className=' fw-bold fs-1 text2'>Marketting</div>

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
                                        navigate('/agent/addCustomer')
                                    }
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={customer}
                                        style={{

                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1'> Add Customer</div>

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
                                        navigate('/agent/commission')
                                    }
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={commission} className='img-fluid'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1 ms-4'>Income</div>

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
                                        navigate('/agent/customers')
                                    }
                                }

                            >
                                <div class="card-body d-flex align-items-center">
                                    <img src={customers} className='img-fluid'
                                        style={{
                                            height: "10rem",
                                            width: "10rem"
                                        }} />
                                    <div className='d-block '>
                                        <div className='text2 fw-bold fs-1 '>All Customers</div>

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

export default Agent