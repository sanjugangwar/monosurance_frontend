import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import loginimage from '../../images/login2.webp'
import { login } from '../../services/common/CommonServices'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [roleType, setRoleType] = useState();

    const navigate = new useNavigate();


    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            let response = await login(username, password, roleType);
            localStorage.setItem('auth', response.data.accessToken);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('role', response.data.roleType);
            if (response.data.roleType == "ROLE_ADMIN") {
                navigate('/admin');
            }
            else if (response.data.roleType == "ROLE_CUSTOMER") {
                navigate('/customer');
            }
            else if (response.data.roleType == "ROLE_AGENT") {
                navigate('/agent');
            }
            else if (response.data.roleType == "ROLE_EMPLOYEE") {
                navigate('/employee')
            }
        }
        catch (error) {

            alert(error.response.data.message);

        }
    }

    const logoutHandler = () => {
        localStorage.clear();
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
                <div className='row align-items-center my-5'>
                    <div className='col-6'>
                        <img className='' src={loginimage} alt="login image"></img>
                    </div>
                    <div className='col-6'>
                        <div className='' style={{
                            borderBottom: "2px solid #638ceb",
                            borderRight: "2px solid #638ceb"

                        }}>
                            <div className='text-white fs-1 text-center fw-bold mb-3 background2'>Login Form</div>
                            <form >
                                <select class="form-select py-3 mb-3" aria-label="Default select example"

                                    onChange={(e) => {

                                        setRoleType(e.target.value)

                                    }}

                                >
                                    <option selected>Login As</option>
                                    <option value="ROLE_ADMIN">Admin</option>
                                    <option value="ROLE_CUSTOMER">Customer</option>
                                    <option value="ROLE_EMPLOYEE">Employee</option>
                                    <option value="ROLE_AGENT">Agent</option>
                                </select>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control " id="floatingInput"

                                        onChange={
                                            (e) => {

                                                setUsername(e.target.value)

                                            }
                                        }

                                    />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password"

                                        onChange={
                                            (e) => {
                                                setPassword(e.target.value);
                                            }
                                        }

                                    />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div >


                                    <button className='btn btn-lg px-3 fw-bold btn-outline-primary my-3 ms-2'

                                        onClick={loginHandler}

                                    >Login</button>




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