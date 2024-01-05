import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { successAlet, warningAlert } from '../alerts/Alert';
import { sendEmail } from '../../services/mail/Mail';
import Loader from '../shared/Loader';

function MarkettingMail(data) {

    data = data.data;

    console.log(data);

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading,setLoading]=useState(false);

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleSubmit = async () => {

        if (subject == "") {
            warningAlert("Subject is Empty");
            return;
        }
        else if (message == "") {
            warningAlert("Message is Empty");
            return;
        }
        else {
            try {
                setLoading(true);
                let response = await sendEmail(data.customerDb.userDetails.email, subject, message);
                if (response) {
                    setLoading(false);
                    successAlet("Mail Send");
                    data.setShow(false);
                }
            }
            catch (error) {
                setLoading(false);
                warningAlert("Mail is not working")
            }



        }




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

                    <Modal.Title className='text-white fw-bold fs-3'>Mail System</Modal.Title>


                </Modal.Header>
                <Modal.Body>
                     <Loader data={loading}></Loader>
                    <form>
                        <div className='col-md-12 text-center'>
                            <div class="form-floating">
                                <input class="form-control text-black fw-bold" placeholder="Leave a comment here" id="floatingTextarea2"

                                    onChange={
                                        (e) => {
                                            setSubject(e.target.value)
                                        }
                                    }

                                ></input>
                                <label for="floatingTextarea2">Subject</label>
                            </div>
                            <div class="form-floating mt-3">
                                <textarea class="form-control text-black fw-bold" placeholder="Leave a comment here" id="floatingTextarea2" style={{ minHeight: "10rem" }}
                                    onChange={
                                        (e) => {
                                            setMessage(e.target.value)
                                        }
                                    }

                                ></textarea>
                                <label for="floatingTextarea2">Message</label>
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

export default MarkettingMail;