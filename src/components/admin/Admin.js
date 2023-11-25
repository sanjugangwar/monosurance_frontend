import React from 'react'
import employee from '../../images/employees.png'
import plan from '../../images/plan.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'

const Admin = () => {
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
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
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
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={employee} className='rounded-pill'
                                    style={{
                                      
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Schemes</div>
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
                                <img src={employee} className='rounded-pill'
                                    style={{
                                        
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Agents</div>
                                    <button className='btn btn-lg btn-outline-success'>View More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card d-flex ">
                            <div class="card-body d-flex align-items-center">
                                <img src={employee} className='rounded-pill'
                                    style={{
                                      
                                        height: "10rem",
                                        width: "10rem"
                                    }} />
                                <div className='d-block '>
                                    <div className='text2 fw-bold fs-1'>Claims</div>
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

export default Admin