import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    useEffect(() => {

    }, [localStorage.getItem('token')])

    const navigate=new useNavigate();


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" style={{ backgroundColor: "#e6d0e6" }}>
                <div className="container-fluid ms-5">
                    <a className="navbar-brand text-primary fw-bold fs-2 ps-5" href="/"> <i class="bi bi-buildings-fill"></i> MonoSurance</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-around ms-5" id="navbarSupportedContent">
                       
                            
                                <div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-3 ps-5">
                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/">Home</a>
                                        </li>
                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/plans"> Plans</a>
                                        </li>
                                       
                                            {
                                            localStorage.getItem('role')=="ROLE_ADMIN"?
                                                <>
                                                <li className="nav-item ps-5">
                                                <a className="nav-link text-dark" href="/admin">Dashboard</a>
                                                </li>
                                                </>
                                                :null
                                            }
                                            {
                                            localStorage.getItem('role')=="ROLE_CUSTOMER"?
                                                <>
                                                <li className="nav-item ps-5">
                                                <a className="nav-link text-dark" href="/customer">Dashboard</a>
                                                </li>
                                                </>
                                                :null
                                            }
                                            {
                                            localStorage.getItem('role')=="ROLE_AGENT"?
                                                <>
                                                <li className="nav-item ps-5">
                                                <a className="nav-link text-dark" href="/agent">Dashboard</a>
                                                </li>
                                                </>
                                                :null
                                            }
                                            {
                                            localStorage.getItem('role')=="ROLE_EMPLOYEE"?
                                                <>
                                                <li className="nav-item ps-5">
                                                <a className="nav-link text-dark" href="/employee">Dashboard</a>
                                                </li>
                                                </>
                                                :null
                                            }
                                           
                                           
                                       

                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/about">About Us</a>
                                        </li>
                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/contact">Contact us</a>
                                        </li>

                                    </ul>

                                </div>
                               
                            
                                   
                        
                        <div className='d-flex '>
                            {
                                localStorage.getItem('auth') == null ? <a className='btn btn-outline-primary px-3 fw-bold' href='/login'>Login
                                
                                {/* <span><i class="bi bi-person-fill"></i>{localStorage.getItem('username')}</span> */}
                                
                                </a> :
                                    <a className='btn btn-outline-primary px-3 fw-bold'  onClick={
                                        (e) => {
                                            localStorage.clear();
                                            navigate('/login')
                                        }
                                    }>Logout <span><i class="bi bi-person-fill"></i>{localStorage.getItem('username')}</span> </a>
                            }
                        </div>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar