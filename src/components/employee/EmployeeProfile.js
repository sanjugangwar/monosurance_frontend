import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { useNavigate } from 'react-router-dom'
import { editEmployeePorfile, getEmployeeByUsername } from '../../services/employee/EmployeeService'
import { alphanumericRegex, bankNameRegex, emailRegex, fullNameRegex, indianMobileRegex, nameRegex, pincodeRegex } from '../validation/Validation'
import { successAlet, warningAlert } from '../alerts/Alert'
import { cityError, emailError, firstNameError, houseError, lastNameError, mobileError, pincodeError, stateError } from '../validation/Error'
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
    const [errorMsg, setErrorMsg] = useState("")
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

        if (!nameRegex.test(firstName)) {
            warningAlert(firstNameError);
            return;
        }
        else if (!nameRegex.test(lastName)) {
            warningAlert(lastNameError);
            return;
        }
        else if (!emailRegex.test(email)) {
            warningAlert(emailError);
            return;
        }
        else if (!indianMobileRegex.test(mobileNumber)) {
            warningAlert(mobileError);
            return;
        }
        else if (!alphanumericRegex.test(houseNo)) {
            warningAlert(houseError);
            return;
        }
        else if (!nameRegex.test(city)) {
            warningAlert(cityError);
            return;
        }
        else if (!fullNameRegex.test(state)) {
            warningAlert(stateError);
            return;
        }
        else if (!pincodeRegex.test(pinCode)) {
            warningAlert(pincodeError);
            return;
        }


        try {

            let response = await editEmployeePorfile(data);

            if (response.status == 200) {
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

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                            onClick={
                                () => {
                                    navigate('/employee')
                                }
                            }
                        >
                            Go To Dashboard
                        </button>
                    </div>
                    <div className='col-8 offset-1'>


                        <div className='container'>
                            <form class="row mt-2">
                                <div className='col-12 fw-bold text-danger text-center mb-3'>

                                    {errorMsg}


                                </div>
                                <div className='col-12 fw-bold fs-2'>

                                    Profile Details

                                </div>


                                <div class="col-md-6">
                                    <div className='form-floating'>
                                        <input type="text" class="form-control" id="formfloat"
                                            value={firstName}
                                            onChange={
                                                (e) => {
                                                    setFirstName(e.target.value);
                                                    if (!nameRegex.test(e.target.value)) {
                                                        setErrorMsg("first name should only contains alphabets")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }
                                        />
                                        <label for="formfloat">First Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div className='form-floating'>

                                        <input type="text" class="form-control" id="inputEmail4"

                                            value={lastName}
                                            onChange={
                                                (e) => {
                                                    setLastName(e.target.value);
                                                    if (!nameRegex.test(e.target.value)) {
                                                        setErrorMsg("last name should only contains alphabets")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }
                                        />
                                        <label for="inputEmail4" >Last Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    <div className='form-floating'>
                                        <input type="email" class="form-control" id="inputEmail4"

                                            value={email}
                                            onChange={
                                                (e) => {
                                                    setEmail(e.target.value);
                                                    if (!emailRegex.test(e.target.value)) {
                                                        setErrorMsg("mail is not valid")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }

                                        />
                                        <label for="inputEmail4" class="form-label">Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    <div className='form-floating'>
                                        <input type="text" class="form-control"
                                            value={mobileNumber}
                                            onChange={
                                                (e) => {
                                                    setMobileNumber(e.target.value);
                                                    if (!indianMobileRegex.test(e.target.value)) {
                                                        setErrorMsg("Mobile must contain 10 digits")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }

                                        />
                                        <label class="form-label">Mobile</label>
                                    </div>
                                </div>

                                <div className='col-12 fw-bold fs-2'>

                                    Address

                                </div>

                                <div class="col-md-3">
                                    <div className='form-floating'>
                                        <input type="text" class="form-control"

                                            value={houseNo}
                                            onChange={
                                                (e) => {
                                                    setHouseNo(e.target.value);
                                                    if (!alphanumericRegex.test(e.target.value)) {
                                                        setErrorMsg("house number is not valid")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }

                                        />
                                        <label class="form-label">House Number</label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div className='form-floating'>
                                        <input type="text" class="form-control" id="inputCity"

                                            value={city}
                                            onChange={
                                                (e) => {
                                                    setCity(e.target.value);
                                                    if (!nameRegex.test(e.target.value)) {
                                                        setErrorMsg("city contains only alphabets")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }

                                        />
                                        <label for="inputCity" class="form-label">City</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className='form-floating'>
                                        <input type="text" class="form-control"

                                            value={state}
                                            onChange={
                                                (e) => {
                                                    setState(e.target.value);
                                                    if (!fullNameRegex.test(e.target.value)) {
                                                        setErrorMsg("state contains only alphabets")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }

                                        />

                                        <label class="form-label">State</label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div className="form-floating">
                                        <input type="text" class="form-control"

                                            value={pinCode}
                                            onChange={
                                                (e) => {
                                                    setPincode(e.target.value);
                                                    if (!pincodeRegex.test(e.target.value)) {
                                                        setErrorMsg("pincode must be of 6 digits")
                                                    }
                                                    else {
                                                        setErrorMsg("")
                                                    }
                                                }
                                            }

                                        />
                                        <label class="form-label">PinCode</label>
                                    </div>
                                </div>




                            </form>

                            <button type="submit" class="btn btn-primary btn-lg mt-3"

                                onClick={

                                    editEmployeeProfiledata

                                }

                            >Edit Porfile</button>

                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default EmployeeProfile