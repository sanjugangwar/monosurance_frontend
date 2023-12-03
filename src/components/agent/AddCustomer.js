import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { useNavigate } from 'react-router-dom'
import GetAllCustomers from '../customer/GetAllCustomers'
import { addCustomer } from '../../services/customer/CustomerService'
const AddCustomer = () => {
    const [id, setId] = useState()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPincode] = useState("");
    const [actionData, setActionData] = useState([])
    const [button, setButton] = useState(false);
    const navigate = new useNavigate();



    const data = {
        firstName,
        lastName,
        username,
        password,
        dateOfBirth,
        mobileNumber,
        email,
        houseNo,
        apartment,
        city,
        pinCode,
        state
    }

    const addCustomerData = async () => {
        try {
            let response = await addCustomer(data);
            setActionData(response);

        }
        catch (error) {

            alert(error.response.data.message)

        }

    }


    return (
        <>
            <Navbar></Navbar>


            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Add Your Customer</div>

            <div className='text-center my-2'>
                <button className='btn btn-outline-primary fw-bold' onClick={
                    () => {
                        navigate('/agent');
                    }
                }>Go To Dashboard</button>
            </div>


            <div className='container'>
                <form class="row g-3 p-5 ">
                    <div className='col-12 fw-bold fs-2'>

                        Profile Details

                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            value={firstName}
                            onChange={
                                (e) => {
                                    setFirstName(e.target.value);
                                    setButton(true);
                                }
                            }
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputEmail4"

                            value={lastName}
                            onChange={
                                (e) => {
                                    setLastName(e.target.value);
                                    setButton(true);
                                }
                            }
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Username</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            value={username}
                            onChange={
                                (e) => {
                                    setUsername(e.target.value);
                                    setButton(true);
                                }
                            }
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Password</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            value={password}
                            onChange={
                                (e) => {
                                    setPassword(e.target.value);
                                    setButton(true);
                                }
                            }
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"

                            value={email}
                            onChange={
                                (e) => {
                                    setEmail(e.target.value);
                                    setButton(true);
                                }
                            }

                        />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Mobile</label>
                        <input type="text" class="form-control"


                            value={mobileNumber}
                            onChange={
                                (e) => {
                                    setMobileNumber(e.target.value);
                                    setButton(true);
                                }
                            }

                        />
                    </div>

                    <div className='col-12 fw-bold fs-2'>

                        Address

                    </div>

                    <div class="col-md-3">
                        <label class="form-label">House Number</label>
                        <input type="text" class="form-control"

                            value={houseNo}
                            onChange={
                                (e) => {
                                    setHouseNo(e.target.value);
                                    setButton(true);
                                }
                            }

                        />
                    </div>

                    <div class="col-md-3">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"

                            value={city}
                            onChange={
                                (e) => {
                                    setCity(e.target.value);
                                    setButton(true);
                                }
                            }

                        />
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">State</label>
                        <input type="text" class="form-control"

                            value={state}
                            onChange={
                                (e) => {
                                    setState(e.target.value);
                                    setButton(true);
                                }
                            }

                        />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">PinCode</label>
                        <input type="text" class="form-control"

                            value={pinCode}
                            onChange={
                                (e) => {
                                    setPincode(e.target.value);
                                    setButton(true);
                                }
                            }

                        />
                    </div>
                    {
                        button ? <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-lg"

                                onClick={
                                    addCustomerData
                                }

                            >Add Customer</button>
                        </div> : null
                    }

                </form>
            </div>
            <div className='container'>

                <div className='row'>
                    <div className=' col-12'>
                        <GetAllCustomers data={actionData}></GetAllCustomers>
                    </div>
                </div>

            </div>


            <Footer></Footer>
        </>
    )
}

export default AddCustomer