import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { useNavigate } from 'react-router-dom'
import { editEmployeePorfile, getEmployeeByUsername } from '../../services/employee/EmployeeService'
const EmployeeProfile = () => {
    const [id, setId] = useState()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPincode] = useState("");
    const [agentData, setAgentData] = useState([])
    const [button, setButton] = useState(false);
    const navigate = new useNavigate();
    const getEmployeeData = async () => {
        let response = await getEmployeeByUsername();
        console.log(response)
        setId(response.data.id);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setMobileNumber(response.data.mobileNumber);
        setDateOfBirth(response.data.dateOfBirth);
        setCity(response.data.city);
        setState(response.data.state);
        setPincode(response.data.pincode);
        setApartment(response.data.apartment);
        setEmail(response.data.email);
        setHouseNo(response.data.houseNo);
        setUsername(response.data.username)
        setAgentData(response.data);

    }

    const data = {
        id,
        firstName,
        lastName,
        dateOfBirth,
        mobile: mobileNumber,
        email,
        houseNo,
        apartment,
        city,
        pinCode,
        state
    }

    const editEmployeeProfiledata = async () => {

        try {

            let response = await editEmployeePorfile(data);
            
            if (response.status==200) {
                alert("updated scucessfully");
            }
        }
        catch (erorr) {
            alert("some issue occured")
        }


    }

    useEffect(
        () => {
            getEmployeeData();
        }
        , []
    )
    return (
        <>
            <Navbar></Navbar>


            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Employee Profile</div>

            <div className='text-center my-2'>
                <button className='btn btn-outline-primary fw-bold' onClick={
                    () => {
                        navigate('/employee');
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

                                    editEmployeeProfiledata

                                }

                            >Edit Porfile</button>
                        </div> : null
                    }

                </form>
            </div>

            <Footer></Footer>
        </>
    )
}

export default EmployeeProfile