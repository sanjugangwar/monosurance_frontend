import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PolicyClaim(data) {

    data = data.data;

    // console.log(data);

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleSubmit = () => {

        data.claimHandler();
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
                    <Modal.Title>MonoSurance's Payment System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group mb-3">
                            <label > Claim Amount</label>
                            <input type="number" class="form-control" value={data.claimAmount} 
                            
                            // onChange={
                            //     (e)=>{
                            //         data.setClaimAmount(e.target.value);
                            //     }
                            // }
                            />
                        </div>

                        <div class="form-group mb-3">
                            <label > Bank Name</label>
                            <input type="text" class="form-control" value={data.bankName} 
                            
                            onChange={
                                (e)=>{

                                    data.setBankName(e.target.value)

                                }
                            }
                            
                            
                            />
                        </div>
                       
                        <div class="form-group mb-3">
                            <label > Branch Name</label>
                            <input type="text" class="form-control"  
                            value={data.branchName} 
                            
                            onChange={
                                (e)=>{

                                    data.setBranchName(e.target.value)

                                }
                            }
                            
                            
                            
                            />
                        </div>

                        <div class="form-group mb-3">
                            <label > Ifsc Code</label>
                            <input type="text" class="form-control" 
                            
                            value={data.ifscCode} 
                            
                            onChange={
                                (e)=>{

                                    data.setIfscCode(e.target.value)

                                }
                            }
                            
                            />
                        </div>

                        <div class="form-group mb-3">
                            <label >Account Numbner</label>
                            <input type="text" class="form-control" 
                            
                            
                            value={data.accountNumber} 
                            
                            onChange={
                                (e)=>{

                                    data.setAccountNumber(e.target.value)

                                }
                            }
                            
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>
                    <button className='btn btn-outline-primary' onClick={handleSubmit}>Claim</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PolicyClaim;