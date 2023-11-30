import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddAgent(data) {

    data = data.data;

    console.log(data);

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleSubmit = () => {

        data.addAgentHandler();
        data.setShow(false);

    }




    return (
        <>


            <Modal
                show={data.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="p-2">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"
                                        
                                        value={data.firstName}

                                        onChange={
                                            (e)=>{
                                                data.setFirstName(e.target.value)
                                            }
                                            
                                        }
                                        
                                        />
                                        <label for="floatingInput">First Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"
                                         value={data.mobileNumber}

                                         onChange={
                                             (e)=>{
                                                 data.setMobileNumber(e.target.value)
                                             }
                                             
                                         }
                                        
                                        />
                                        <label for="floatingInput">Mobile Number</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"
                                        value={data.userName}

                                        onChange={
                                            (e)=>{
                                                data.setUsername(e.target.value)
                                            }
                                            
                                        }
                               
                                        
                                        />
                                        <label for="floatingInput">Username</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                        
                                        value={data.password}

                                         onChange={
                                             (e)=>{
                                                 data.setPassword(e.target.value)
                                             }
                                             
                                         }
                                
                                        />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword" 
                                        
                                        value={data.state}

                                         onChange={
                                             (e)=>{
                                                 data.setState(e.target.value)
                                             }
                                             
                                         }
                                
                                        />
                                        <label for="floatingPassword">State</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="floatingPassword"
                                        
                                        value={data.pincode}

                                         onChange={
                                             (e)=>{
                                                 data.setPincode(e.target.value)
                                             }
                                             
                                         }
                                
                                        
                                        />
                                        <label for="floatingPassword">Pincode</label>
                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                        value={data.lastName}

                                        onChange={
                                            (e)=>{
                                                data.setLastName(e.target.value)
                                            }
                                            
                                        }
                               
                                        
                                        />
                                        <label for="floatingPassword">Last Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
                                        
                                        value={data.email}

                                         onChange={
                                             (e)=>{
                                                 data.setEmail(e.target.value)
                                             }
                                             
                                         }
                                
                                        
                                        />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" placeholder='YYYY-MM-DD'
                                        
                                        value={data.dateOfBirth}

                                         onChange={
                                             (e)=>{
                                                 data.setDateOfBirth(e.target.value)
                                             }
                                             
                                         }
                                
                                        
                                        />
                                        <label for="floatingPassword">Date Of Birth</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                        
                                        value={data.houseNo}

                                         onChange={
                                             (e)=>{
                                                 data.setHouseNo(e.target.value)
                                             }
                                             
                                         }
                                
                                        />
                                        <label for="floatingPassword">House Number</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                        
                                        value={data.apartment}

                                         onChange={
                                             (e)=>{
                                                 data.setApartment(e.target.value)
                                             }
                                             
                                         }
                                
                                        
                                        />
                                        <label for="floatingPassword">Apartment</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                        
                                        value={data.city}

                                         onChange={
                                             (e)=>{
                                                 data.setCity(e.target.value)
                                             }
                                             
                                         }
                                
                                        />
                                        <label for="floatingPassword">City</label>
                                    </div>
                                   
                                   


                                </div>
                            </div>
                        </div>



                    </form>

                </Modal.Body>
                <Modal.Footer>

                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>
                    <button className='btn btn-outline-primary' onClick={handleSubmit}>Submit</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddAgent;