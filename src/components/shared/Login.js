import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import login from '../../images/login2.webp'

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
                <div className='row align-items-center my-5'>
                    <div className='col-6'>
                        <img className='' src={login} alt="login image"></img>
                    </div>
                    <div className='col-6'>
                        <div className='' style={{ 
                            borderBottom: "2px solid #638ceb" ,
                            borderRight:"2px solid #638ceb"
                    
                    }}>
                            <div className='text-white fs-1 text-center fw-bold mb-3 background2'>Login Form</div>
                            <form >
                                <select class="form-select py-3 mb-3" aria-label="Default select example">
                                    <option selected>Login As</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Customer</option>
                                    <option value="3">Employee</option>
                                    <option value="3">Agent</option>
                                </select>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div >
                                    <button className='btn btn-lg px-3 fw-bold btn-outline-primary my-3 ms-2'>Login</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login