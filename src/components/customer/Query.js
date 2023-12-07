import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import Faq from '../shared/Faq'

import questionimg from '../../images/question.png'

import { successAlet, warningAlert } from '../alerts/Alert'
import { useNavigate } from 'react-router-dom'
import { addQuestion, allQuestions } from '../../services/query/Query'

const Query = () => {

    
    const navigate = new useNavigate();

    const [question, setQuestion] = useState("");
    const [username, setUsername] = useState(localStorage.getItem('username'));

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(30);
    const [actionData, setActionData] = useState();
    const [questions, setQuestions] = useState([]);

    const [valid, setValid] = useState(false);
    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ROLE_CUSTOMER') {
            warningAlert("you are not logged in")
            navigate('/login');
        }
        setValid(true);
    }

    useEffect(
        () => {
            validateUser();
        }
        , []
    )


    const handleClick = () => {
        successAlet("Query Submitted ")
    }

    const handleSubmit = async () => {

        if (question == "") {
            warningAlert("query can't be empty")
        }

        try {
            let data = {
                question,
                username
            }
            console.log("username", username);
            console.log(localStorage.getItem('username'));
            let response = await addQuestion(data);
            console.log(response);
            setActionData(response);
            if (response) {
                successAlet("query submitted");
            }

        }
        catch (error) {
            warningAlert(error.response.message);
        }

    }

    const getAllQuestionData = async () => {
        let response = await allQuestions(pageNumber, pageSize);
        setQuestions(response.data.content);
        console.log(response);
    }

    useEffect(
        () => {
            getAllQuestionData();
        }
        , [actionData]
    )



    return (
        <>

            <Navbar></Navbar>

            <div className='text-center text2 display-4 fw-bold my-4'>Please Ask Your Query</div>

            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12'>
                        <img src={questionimg} className='img-fluid'></img>
                    </div>
                    <div className='col-lg-6 col-md-12 text-center'>
                        <div class="form-floating">
                            <textarea class="form-control text-black fw-bold" placeholder="Leave a comment here" id="floatingTextarea2" style={{ minHeight: "10rem" }}

                                onChange={
                                    (e) => {


                                        setQuestion(e.target.value);

                                    }
                                }

                            ></textarea>
                            <label for="floatingTextarea2">Your Query</label>
                        </div>
                        <button className='btn btn-lg btn-outline-primary mt-3' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>


            <div className='text-center text2 display-4 fw-bold my-4'>Previous Queries</div>

            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>

                        {
                            questions.length > 0 &&
                            questions.map(
                                (question) => {
                                    return <>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header ">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        {question.question}
                                                        {
                                                            question.active == false ? <p className='text-success'>Answered</p> : <p className='text-danger'>Not Answered</p>
                                                        }
                                                    </button>

                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">

                                                        <input className='w-100 text-dark border-primary fw-bold' style={{ minHeight: "5rem" }}

                                                            value={question.answer}

                                                        ></input>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }
                            )
                        }



                    </div>
                </div>
            </div>



            <Footer></Footer>
        </>
    )
}

export default Query