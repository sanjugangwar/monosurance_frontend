import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { alphanumericRegex, bankNameRegex, eightCharAlphanumericPasswordRegex, emailRegex, fullNameRegex, indianMobileRegex, nameRegex, pincodeRegex } from '../validation/Validation'
import { successAlet, warningAlert } from '../alerts/Alert'
import { cityError, emailError, firstNameError, houseError, lastNameError, mobileError, passwordError, pincodeError, stateError } from '../validation/Error'

function AddEmployee(data) {

    data = data.data;

    console.log(data);

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!nameRegex.test(data.firstName)) {
            warningAlert(firstNameError);
            return;
        }
        else if (!nameRegex.test(data.lastName)) {
            warningAlert(lastNameError);
            return;
        }
        else if (!emailRegex.test(data.email)) {
            warningAlert(emailError);
            return;
        }
        else if (!indianMobileRegex.test(data.mobileNumber)) {
            warningAlert(mobileError);
            return;
        }
        else if (!alphanumericRegex.test(data.houseNo)) {
            warningAlert(houseError);
            return;
        }
        else if (!nameRegex.test(data.city)) {
            warningAlert(cityError);
            return;
        }
        else if (!fullNameRegex.test(data.state)) {
            warningAlert(stateError);
            return;
        }

        else if (!eightCharAlphanumericPasswordRegex.test(data.password)) {
            warningAlert(passwordError)
            return;
        }
        

        data.addEmployeeHandler();
        data.setShow(false);

    }




    return (
        <>


            <Modal
                size="lg"
                centered={true}
                show={data.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='background2'>
                    <Modal.Title className='text-white fw-bold fs-3'>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="p-2" onSubmit={(e)=>handleSubmit(e)}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"

                                            value={data.firstName}

                                            onChange={
                                                (e) => {
                                                    data.setFirstName(e.target.value)
                                                }


                                            }
                                            required
                                        />
                                        <label for="floatingInput">First Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"
                                            value={data.mobileNumber}

                                            onChange={
                                                (e) => {
                                                    data.setMobileNumber(e.target.value)
                                                }


                                            }
                                            required
                                        />
                                        <label for="floatingInput">Mobile Number</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="floatingPassword"

                                            value={data.salary}

                                            onChange={
                                                (e) => {
                                                    data.setSalary(e.target.value)
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingPassword">Salary</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"
                                            value={data.userName}

                                            onChange={
                                                (e) => {
                                                    data.setUsername(e.target.value)
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingInput">Username</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"

                                            value={data.houseNo}

                                            onChange={
                                                (e) => {
                                                    data.setHouseNo(e.target.value)
                                                }


                                            }
                                            required
                                        />
                                        <label for="floatingPassword">House Number</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"

                                            value={data.state}

                                            onChange={
                                                (e) => {
                                                    data.setState(e.target.value)
                                                }

                                            }


                                            required
                                            
                                        />
                                        <label for="floatingPassword">State</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="floatingPassword"

                                            value={data.pincode}

                                            onChange={
                                                (e) => {
                                                    data.setPincode(e.target.value)
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingPassword">Pincode</label>
                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            value={data.lastName}

                                            onChange={
                                                (e) => {
                                                    data.setLastName(e.target.value)
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingPassword">Last Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"

                                            value={data.email}

                                            onChange={
                                                (e) => {
                                                    data.setEmail(e.target.value)
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" placeholder='YYYY-MM-DD'

                                            value={data.dateOfBirth}
                                            max="2005-12-31"

                                            onChange={
                                                (e) => {
                                                    const selectedDate = e.target.value;
                                                    let formattedDate = new Date(selectedDate)
                                                        .toISOString()
                                                        .split("T")[0];
                                                    console.log(formattedDate.substring(0,4));
                                                    data.setDateOfBirth(formattedDate);
                                                
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingPassword">Date Of Birth</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"

                                            value={data.password}

                                            onChange={
                                                (e) => {
                                                    data.setPassword(e.target.value)
                                                }


                                            }
                                            required
                                        />
                                        <label for="floatingPassword">Password</label>
                                    </div>


                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"

                                            value={data.apartment}

                                            onChange={
                                                (e) => {
                                                    data.setApartment(e.target.value)
                                                }

                                            }


                                            required
                                        />
                                        <label for="floatingPassword">Apartment</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"

                                            value={data.city}

                                            onChange={
                                                (e) => {
                                                    data.setCity(e.target.value)
                                                }


                                            }
                                            required
                                        />
                                        <label for="floatingPassword">City</label>
                                    </div>




                                </div>
                                <div className='col-2'>
                                    <input type='submit' className='btn btn-outline-primary btn-lg fw-bold' value='submit' />

                                </div>

                            </div>
                        </div>



                    </form>

                </Modal.Body>
                <Modal.Footer>

                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;