import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { allQuestions, updateQuestion } from '../../services/query/Query';
import { successAlet, warningAlert } from '../alerts/Alert';
import { useNavigate } from 'react-router-dom';

const EmployeeQueries = () => {

    const [questions, setQuestions] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(30);
    const [answer, setAnswer] = useState("");
    const [actionData, setActionData] = useState();

    const [valid, setValid] = useState(false);

    const navigate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ROLE_EMPLOYEE') {
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


    const getQuestionsData = async () => {
        try {
            let response = await allQuestions(pageNumber, pageSize);
            console.log(response.data.content);
            setQuestions(response.data.content);
        }
        catch (error) {
            warningAlert("some error occured")
        }

    }

    const handleSubmit = async (data) => {

        let questionId = data.questionId;
        let username = data.username;
        let question = data.question;
        let active = false;
        const answerData = {
            questionId,
            username,
            question,
            answer,
            active
        }
        try {
            if (answer != "") {
                let response = await updateQuestion(answerData);
                setActionData(response);

                if (response) {
                    successAlet("Query Answered")
                }

                console.log(response);
            }
            else {
                warningAlert("answer can't be empty")
            }
        }
        catch (error) {

            warningAlert("some error occured")

        }

    }

    useEffect(
        () => {
            if(valid)
            getQuestionsData();
        }
        , [actionData]
    )

    useEffect(
        () => {
            if(valid)
            getQuestionsData();
        }
        , []
    )


    return (
        <>
            <Navbar></Navbar>

            <div className='text-center text2 display-4 fw-bold my-4'>All Queries</div>

            <div></div>

            <div className='container'>
                <div className='row'>
                    <div className='col-8 offset-2'>



                        {
                            questions.length > 0 &&
                            questions.map(
                                (question) => {
                                    return <>
                                        <div class="accordion" >
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" >
                                                        {question.question}
                                                        {
                                                            question.active == false ? <p className='text-success'>Answered</p> : <p className='text-danger'>Not Answered</p>
                                                        }
                                                    </button>

                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" >
                                                    <div class="accordion-body">

                                                        <input className='w-100 text-dark border-primary fw-bold' style={{ minHeight: "5rem" }}

                                                            value={question.answer}

                                                            onChange={
                                                                (e) => {
                                                                    setAnswer(e.target.value);
                                                                }
                                                            }

                                                        ></input>

                                                        <button className='btn btn-outline-primary fw-bold mt-3'

                                                            onClick={
                                                                () => {
                                                                    handleSubmit(question);
                                                                }
                                                            }

                                                        >Submit</button>

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

export default EmployeeQueries