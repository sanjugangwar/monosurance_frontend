import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Payment(data) {

    data = data.data;

    console.log(data);

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleSubmit = () => {

        data.handlePay();
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
                            <label >Amount</label>
                            <input type="number" class="form-control" value={data.amount} />
                        </div>
                        <div class="form-group mb-3">
                            <select class="form-select" aria-label="Default select example"
                            
                            onChange={
                                (e)=>{
                                    data.setPaymentType(e.target.value)
                                }
                            }
                            
                            >
                                <option selected>Payment Type</option>
                                <option value="CREDIT_CARD">CREDIT CARD</option>
                                <option value="DEBIT_CARD">DEBIT CARD</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label >Card Number</label>
                            <input type="text" class="form-control" 
                            
                            value={data.cardNumber}
                            onChange={
                                (e)=>{
                                    data.setCardNumber(e.target.value)
                                }
                                
                            }
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label >Cvv</label>
                            <input type="number" class="form-control"
                            
                            value={data.cvv}

                            onChange={
                                (e)=>{
                                    data.setCvv(e.target.value)
                                }
                            }
                            
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label >Expiry</label>
                            <input type="text"  class="form-control" placeholder="MM/YY"
                            
                            value={data.expiry}
                            
                            onChange={
                                (e)=>{

                                    data.setExpiry(e.target.value)

                                }
                            }
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>
                    <button className='btn btn-outline-primary' onClick={handleSubmit}>Pay</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Payment;