import React, { useEffect, useState } from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { getAllPolicy, getPolicy } from '../../services/policy/Policy'
import { warningAlert } from '../alerts/Alert'
import PaginationApp from '../table/PaginationApp'

const InsuranceAccounts = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [policy, setPolicy] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [payments, setpayments] = useState([])

    const getPolicyData = async () => {
        try {
            let response = await getAllPolicy(pageNumber);
            console.log(response);
            setTotalPages(Math.ceil(parseInt(response.headers['policy-count']) / pageSize));
            setTotalElements(Math.ceil(parseInt(response.headers['policy-count']) / pageSize));
            setPolicy(response.data);
            setDocuments(response.data.documents)
            setpayments(response.data.payments);
        }
        catch (error) {
            warningAlert("Some Error Occured")
        }

    }

    useEffect(
        () => {
            getPolicyData();
        }
        , [pageNumber]
    )

    return (
        // <></>
        <>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold mb-3'>All Policies</div>
            {
                policy != [] ?

                    <div className='container'>
                        <div className='row'>



                            <div className='col-12'>
                                {/* <div className='text-center text2 display-4 fw-bold my-4'>All Policies</div> */}

                                <PaginationApp
                                    totalPages={totalPages}
                                    pageSize={pageSize}
                                    setPageNumber={setPageNumber}
                                    pageNumber={pageNumber}

                                ></PaginationApp>

                            </div>
                            <div className='text-center text1 display-5 fw-bold mb-3'>
                                {
                                    policy?.scheme?.schemeName
                                }
                            </div>
                            <div className='text-dark fw-bold'>Policy Details</div>
                            <div className='col-6 shadow-lg p-3'>
                                <div className='row'>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="number" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={policy.policyId}


                                            />
                                            <label for="floatingInput">Policy Id</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="number" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={parseInt(policy.premiumAmount)}


                                            />
                                            <label for="floatingInput">Premium Amount</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={policy.policyStatus}


                                            />
                                            <label for="floatingInput">Policy Status</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={policy.issueDate?.substr(0,10)}


                                            />
                                            <label for="floatingInput">Issue Date</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={policy.maturityDate?.substr(0,10)}


                                            />
                                            <label for="floatingInput">Maturity Date</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={policy.premiumType}


                                            />
                                            <label for="floatingInput">Premium Type</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={policy.investmentAmount}


                                            />
                                            <label for="floatingInput">Investment Amount</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={parseInt(policy.profitAmount)}


                                            />
                                            <label for="floatingInput">Profit Amount</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                value={parseInt(policy.sumAssured)}


                                            />
                                            <label for="floatingInput">Sum Assured</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-5 offset-1 text-center shadow-lg p-3'>

                                <img src={'http://localhost:8081/monosurance/download?file=' + policy?.scheme?.schemeDetail?.schemeImage} className='img-fluid'></img>

                            </div>


                            <div className='row mt-3 shadow-lg'>
                                <div className='text-dark fw-bold'>Nominee Details</div>


                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                            value={typeof (policy.nominees) != "undefined" && policy.nominees.length > 0 ? policy.nominees[0].nomineeName : ""}


                                        />
                                        <label for="floatingInput">Nominee Name</label>
                                    </div>
                                </div>


                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                            value={typeof (policy.nominees) != "undefined" && policy.nominees.length > 0 ? policy.nominees[0].relationship : ""}


                                        />
                                        <label for="floatingInput">Relation</label>
                                    </div>
                                </div>



                            </div>

                            <div className='text-dark fw-bold mt-3'>Document Details</div>

                            {
                                documents.map(
                                    (document) => {
                                        return <div className='row mt-3 shadow-lg align-items-center'>

                                            <div class="col">
                                                <div class="form-floating mb-3 text-center">
                                                    <img src={'http://localhost:8081/monosurance/download?file=' + document.documentImage} className='img-fluid'

                                                        style={
                                                            {
                                                                height: "15rem",
                                                                width: "15rem"
                                                            }
                                                        }

                                                    ></img>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                        value={document.documentName}


                                                    />
                                                    <label for="floatingInput">Document Name</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-floating mb-3 ">
                                                    <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                                        value={document.documentStatus}


                                                    />
                                                    <label for="floatingInput">Document Status</label>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                            <div className='row mt-3 shadow-lg align-items-center'>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Payment Amount</th>
                                            <th scope="col">payment Date</th>
                                            <th scope="col">Payement Status</th>
                                            {/* <th scope="col">Payement</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            payments.map(
                                                (payment) => {
                                                    return <tr>
                                                        <th scope="row">{parseInt(payment.amount)}</th>
                                                        <td>{payment.paymentDate.substr(0,10)}</td>
                                                        <td>{payment.paymentStatus=="PAID"?"PAID":"UNPAID"}</td>
                                                        {/* <td><button className='btn btn-success btn-lg fw-bold'>Pay</button></td> */}
                                                    </tr>

                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    : null
            }
            <Footer></Footer>
        </>
    )
}

export default InsuranceAccounts