import React, { useState } from 'react'
import Footer from '../navbar/Footer'
import Navbar from '../navbar/Navbar'
import contact from '../../images/contact.png'
import { sendEmail } from '../../services/mail/Mail'
import { successAlet, warningAlert } from '../alerts/Alert'

const Contact = () => {

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [recieverEmail, setRecieverEmail] = useState();

    const handlePost = async(e) => {
        e.preventDefault();
        try {
           let response= await sendEmail(recieverEmail, subject, message);
           if(response){
            successAlet("we will contact you soon")
           }
        }
        catch (error) {

            warningAlert("some eroor occured");

        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Contact us</div>
            <div className='container-fluid'>
                <div className='row mt-5' >
                    <div className='col-5 offset-1'>
                        <img src={contact} className='img-fluid'></img>
                    </div>
                    <div className='col-5'>
                        <div class="m-1">
                            {/* <h1>Contact Us</h1> */}
                            <div class="fs-6 fw-light mb-2">Post your message below. We will get back to you ASAP</div>
                            <form id="contact_form" name="contact_form" >
                                <div class="mb-2">
                                    <label for="message">Subject</label>
                                    <input class="form-control" id="message" name="message"

                                        onChange={
                                            (e) => {
                                                setSubject(e.target.value);
                                            }
                                        }

                                    ></input>
                                </div>
                                <div class="mb-2">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" id="message" name="message" rows="5"

                                        onChange={
                                            (e) => {
                                                setMessage(e.target.value);
                                            }
                                        }

                                    ></textarea>
                                </div>
                                <div class="mb-2 row">
                                    <div class="col">
                                        <label>Your Name:</label>
                                        <input type="text" required maxlength="50" class="form-control" id="name" name="name" />
                                    </div>
                                    <div class="col">
                                        <label for="email_addr">Your Email:</label>
                                        <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                                            placeholder=""

                                            onChange={
                                                (e) => {
                                                    setRecieverEmail(e.target.value);
                                                }
                                            }

                                        />
                                    </div>
                                </div>
                                <div class="d-grid col-2 text-center">
                                    <button type="submit" class="btn btn-primary fw-bold"

                                        onClick={
                                            (e) => {
                                                handlePost(e);
                                            }
                                        }

                                    >Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact