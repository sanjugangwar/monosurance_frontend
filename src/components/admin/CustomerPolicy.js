import React, { useEffect, useState } from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { getPolicy, policyClaim, policyClaimfun, policyPayment } from '../../services/policy/Policy'
import { successAlet, warningAlert } from '../alerts/Alert'
import PaginationApp from '../table/PaginationApp'
// import Payment from './Payment'
// import PolicyClaim from './PolicyClaim'
import { useNavigate } from 'react-router-dom'
import Payment from '../policy/Payment'
import PolicyClaim from '../policy/PolicyClaim'

const CustomerPolicy = (prop) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [username, setUsername] = useState(prop.userName);
    const [policy, setPolicy] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [payments, setpayments] = useState([])
    const [policyId, setPolicyId] = useState();
    const [paymentId, setPaymentId] = useState();
    const [responseData, setReponseData] = useState();
    const navigate=new useNavigate();
    const [claimAmount, setClaimAmount] = useState();
    const [bankName, setBankName] = useState();
    const [branchName, setBranchName] = useState();
    const [ifscCode, setIfscCode] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [claimShow, setClaimShow] = useState(false);



    const getPolicyData = async () => {
        try {
            let response = await getPolicy(pageNumber, username);
            console.log(response);
            setTotalPages(Math.ceil(parseInt(response.headers['policy-count']) / pageSize));
            setTotalElements(Math.ceil(parseInt(response.headers['policy-count']) / pageSize));
            setPolicy(response.data);
            setPolicyId(response.data.policyId);
            setDocuments(response.data.documents)
            setpayments(response.data.payments);

            let x = 0;

            let flag = false;


            for (let payment of response.data.payments) {
                if (payment.paymentStatus == "PAID") {
                    x += payment.amount;
                }
                else {
                    flag = true
                }
            }

            if (flag) {
                setClaimAmount(x);
            }
            else {
                setClaimAmount(response.data.sumAssured)
            }

        }
        catch (error) {
            warningAlert("No Policy Found")
            
        }

    }

    const [paymentType, setPaymentType] = useState();
    const [amount, setAmount] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [cvv, setCvv] = useState();
    const [expiry, setExpiry] = useState();
    const [show, setShow] = useState(false);


    const handlePay = async () => {

        let data = {
            policyId,
            username: localStorage.getItem('username'),
            paymentId: paymentId,
            paymentType,
            amount, cardNumber, cvv, expiry
        }
        try {
            let response = await policyPayment(data);
            if (response) {
                successAlet("payment success")
                setReponseData(response);
            }
        }
        catch (error) {

            warningAlert("payment failed")

        }


    }

    let data = {

        amount,
        cardNumber, setCardNumber,
        paymentType, setPaymentType,
        cvv, setCvv,
        expiry, setExpiry,
        show, setShow,
        handlePay

    }

    const claimHandler = async () => {

        let data = {
            policyId,
            claimAmount,
            bankName,
            branchName,
            ifscCode,
            accountNumber
        }

        try {


            let response = await policyClaimfun(data);
            if (response) {
                successAlet("claim submitted")
                setReponseData(response);
            }

        }
        catch (error) {

            warningAlert("claim failed")

        }


    }

    let data1 = {
        claimAmount,
        bankName, setBankName,
        branchName, setBranchName,
        ifscCode, setIfscCode,
        accountNumber, setAccountNumber,
        show: claimShow, setShow: setClaimShow,
        claimHandler
    }

    useEffect(
        () => {
            getPolicyData();
        }
        , [pageNumber, responseData]
    )

    return (
        // <></>
        <>
            {/* <Navbar></Navbar> */}
            <div className='background2 text-center display-3 py-3 text-white fw-bold mb-3'>Customer Policies</div>
            <Payment data={data}></Payment>
            <PolicyClaim data={data1} ></PolicyClaim>
            {
                policy!=[] ?
                    <>
                        <div className='container-fluid'>
                            <div className='row'>
                                {/* <div className='col-2'>

                                    <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                                        onClick={
                                            () => {
                                                navigate('/customer')
                                            }
                                        }
                                    >
                                        Go To Dashboard
                                    </button>


                                </div> */}

                                <div className='col-12'>

                                    <div className='container'>
                                        <div className='row'>



                                            <div className='col-12'>


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
                                                                        <td>{payment.paymentDate.substring(0, 10)}</td>
                                                                        <td>{payment.paymentStatus == null ? "UNPAID" : "PAID"}</td>
                                                                        {/* <td><button className='btn btn-success btn-lg fw-bold'

                                                                            onClick={
                                                                                () => {

                                                                                    setPaymentId(payment.paymentId);
                                                                                    setAmount(payment.amount);

                                                                                    if (policy.policyStatus == "PENDING") {
                                                                                        warningAlert("policy is pending");
                                                                                    }
                                                                                    else if (payment.paymentStatus == "PAID") {
                                                                                        warningAlert("already paid")
                                                                                    }
                                                                                    else if (policy.policyStatus == "DROP" || policy.policyStatus == "COMPLETE" || policy.policyStatus == "CLAIMED") {
                                                                                        warningAlert("already claimed")
                                                                                    }
                                                                                    else {
                                                                                        setShow(true);
                                                                                    }
                                                                                }
                                                                            }

                                                                        >{payment.paymentStatus == null ? "PAY" : "PAID"}</button></td> */}
                                                                    </tr>

                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                                <div>
                                                    {

                                                    }
                                                    {/* <button className='btn btn-lg btn-success mb-3'

                                                        onClick={
                                                            () => {
                                                                if (policy.policyStatus == "PENDING") {
                                                                    warningAlert("policy is pending");
                                                                }
                                                                else if (policy.policyStatus == "DROP" || policy.policyStatus == "COMPLETE" || policy.policyStatus == "CLAIMED") {
                                                                    warningAlert("already claimed")
                                                                }
                                                                else {
                                                                    setClaimShow(true)
                                                                }
                                                            }
                                                        }

                                                    >Claim</button> */}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
            {/* <Footer></Footer> */}
        </>
    )
}

export default CustomerPolicy