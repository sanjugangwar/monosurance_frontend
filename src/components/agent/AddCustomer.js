import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { useNavigate } from 'react-router-dom'
import GetAllCustomers from '../customer/GetAllCustomers'
import { addCustomer } from '../../services/customer/CustomerService'
import { alphanumericRegex, bankNameRegex, eightCharAlphanumericPasswordRegex, emailRegex, fullNameRegex, indianMobileRegex, nameRegex, pincodeRegex } from '../validation/Validation'
import { successAlet, warningAlert } from '../alerts/Alert'
import { cityError, emailError, firstNameError, houseError, lastNameError, mobileError, passwordError, pincodeError, stateError } from '../validation/Error'
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
    const [errorMsg, setErrorMsg] = useState("")
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

    const addCustomerData = async (e) => {
        // console.log(data);
        e.preventDefault();
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
        else if (!eightCharAlphanumericPasswordRegex.test(password)) {
            warningAlert(passwordError)
            return;
        }
        // console.log("here",data);
        try {

            let response = await addCustomer(data);
            if (response) {
                successAlet("Customer Added")
                navigate('/agent/customers')
            }

        }
        catch (error) {

            warningAlert(error.response?.data?.message == "undefined" ? "Some Error Occured" : error?.response?.data?.message)

        }

    }


    return (
        <>
            <Navbar></Navbar>


            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Add Your Customer</div>




            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>

                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                            onClick={
                                () => {
                                    navigate('/agent')
                                }
                            }
                        >
                            Go To Dashboard
                        </button>

                    </div>
                    <div className='col-8 offset-1'>


                        <form class="row g-3 ">
                            <div className='col-12 fw-bold text-danger text-center mb-3'>

                                {errorMsg}


                            </div>
                            <div className='col-12 fw-bold fs-2'>

                                Profile Details

                            </div>
                            <div class="col-md-4">
                                <div className='form-floating'>
                                    <input type="text" class="form-control" id="inputEmail4"
                                        value={firstName}
                                        onChange={
                                            (e) => {
                                                setFirstName(e.target.value);
                                                if (!nameRegex.test(e.target.value)) {
                                                    setErrorMsg(firstNameError)
                                                }
                                                else {
                                                    setErrorMsg("")
                                                }

                                            }
                                        }
                                    />
                                    <label for="inputEmail4" class="form-label">First Name</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className='form-floating'>
                                    <input type="text" class="form-control" id="inputEmail4"

                                        value={lastName}
                                        onChange={
                                            (e) => {
                                                setLastName(e.target.value);
                                                if (!nameRegex.test(e.target.value)) {
                                                    setErrorMsg(lastNameError)
                                                }
                                                else {
                                                    setErrorMsg("")
                                                }
                                            }
                                        }
                                    />
                                    <label for="inputEmail4" class="form-label">Last Name</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className='form-floating'>
                                    <input type="date" class="form-control" id="inputEmail4"

                                        value={dateOfBirth}
                                        max="2005-12-31"

                                        onChange={
                                            (e) => {
                                                const selectedDate = e.target.value;
                                                let formattedDate = new Date(selectedDate)
                                                    .toISOString()
                                                    .split("T")[0];
                                                console.log(formattedDate.substring(0, 4));
                                                setDateOfBirth(formattedDate);

                                            }

                                        }

                                    />
                                    <label for="inputEmail4" class="form-label">Date Of Birth</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className='form-floating'>
                                    <input type="text" class="form-control" id="inputEmail4"
                                        value={username}
                                        onChange={
                                            (e) => {
                                                setUsername(e.target.value);

                                            }
                                        }
                                    />
                                    <label for="inputEmail4" class="form-label">Username</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className='form-floating'>
                                    <input type="text" class="form-control" id="inputEmail4"
                                        value={password}
                                        onChange={
                                            (e) => {
                                                setPassword(e.target.value);
                                                if (!eightCharAlphanumericPasswordRegex.test(e.target.value)) {
                                                    setErrorMsg(passwordError)
                                                }
                                                else {
                                                    setErrorMsg("")
                                                }

                                            }
                                        }
                                    />
                                    <label for="inputEmail4" class="form-label">Password</label>
                                </div>
                            </div>
                            <div class="col-md-6">
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
                           
                            <div class="col-md-6">
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
                                <div className='form-floating'>

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
                            {
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-lg fw-bold"

                                        onClick={
                                            (e) => addCustomerData(e)
                                        }

                                    >Add Customer</button>
                                </div>
                            }

                        </form>
                    </div>
                </div>
            </div>
            <div className='container'>

                <div className='row'>
                    <div className=' col-12'>
                        {/* <GetAllCustomers data={actionData}></GetAllCustomers> */}
                    </div>
                </div>

            </div>


            <Footer></Footer>
        </>
    )
}

export default AddCustomer