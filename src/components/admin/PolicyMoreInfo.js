import React, { useState } from 'react'

const PolicyMoreInfo = (data) => {
    const [policy, setPolicy] = useState(data.data);
    return (
        <>
            <div className='text-dark fw-bold'>Policy Details</div>
            <div className='col-9 shadow-lg p-3'>
                <div className='row'>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control text-primary fw-bold" id="floatingInput"

                                value={policy.policyNo}


                            />
                            <label for="floatingInput">Policy Id</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control text-primary fw-bold" id="floatingInput"

                                value={policy.premiumAmount}


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

                                value={policy.issueDate.substr(0,10)}


                            />
                            <label for="floatingInput">Issue Date</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                value={policy.maturityDate.substr(0,10)}


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

                                value={policy.premiumAmount*policy.payments.length}


                            />
                            <label for="floatingInput">Investment Amount</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                value={policy.sumAssured-policy.premiumAmount*policy.payments.length}


                            />
                            <label for="floatingInput">Profit Amount</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control text-primary fw-bold" id="floatingInput"

                                value={policy.sumAssured}


                            />
                            <label for="floatingInput">Sum Assured</label>
                        </div>
                    </div>
                </div>
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
                                            policy.payments.map(
                                                (payment) => {
                                                    return <tr>
                                                        <th scope="row">{payment.amount}</th>
                                                        <td>{payment.paymentDate.substring(0, 10)}</td>
                                                        <td>{payment.paymentStatus == null ? "UNPAID" : "PAID"}</td>
                                                        {/* <td><button className='btn btn-success btn-lg fw-bold'

                                                            onClick={
                                                                () => {

                                                                    setPaymentId(payment.paymentId);
                                                                    setAmount(payment.amount);
                                                                    
                                                                    if(policy.policyStatus=="PENDING"){
                                                                        warningAlert("policy is pending");
                                                                    }
                                                                    else if (payment.paymentStatus == "PAID") {
                                                                        warningAlert("already paid")
                                                                    }
                                                                    else if(policy.policyStatus=="DROP" || policy.policyStatus=="COMPLETE"||policy.policyStatus=="CLAIMED"){
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
                                {/* <div>
                                    {
                                        
                                    }
                                    <button className='btn btn-lg btn-success mb-3'

                                        onClick={
                                            () => {
                                                if(policy.policyStatus=="PENDING"){
                                                    warningAlert("policy is pending");
                                                }
                                                else if(policy.policyStatus=="DROP" || policy.policyStatus=="COMPLETE"|| policy.policyStatus=="CLAIMED"){
                                                    warningAlert("already claimed")
                                                }
                                                else{
                                                setClaimShow(true)
                                                }
                                            }
                                        }

                                    >Claim</button>
                                </div> */}
                            </div>
            </div>
            {/* <div className='col-3 offset-1 text-center shadow-lg p-3'>

                <img src={'http://localhost:8081/monosurance/download?file=' + policy?.scheme?.schemeDetail?.schemeImage} className='img-fluid'></img>

            </div> */}
        </>

    )
}

export default PolicyMoreInfo