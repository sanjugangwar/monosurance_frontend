import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { agentClaim, getAgentDetail } from '../../services/agents/AgentService'
import { successAlet, warningAlert } from '../alerts/Alert'
import AgentClaim from './AgentClaim'

const AgentCommission = () => {

    const [commissions, setCommissions] = useState([]);
    const [earning, setEarning] = useState();
    const [claim, setClaim] = useState(0);
    const [claims, setClaims] = useState([]);


    const [claimAmount, setClaimAmount] = useState();
    const [bankName, setBankName] = useState();
    const [branchName, setBranchName] = useState();
    const [ifscCode, setIfscCode] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [show, setShow] = useState(false);
    const [responseData, setReponseData] = useState();



    const claimHandler = async () => {

        let data = {
            username: localStorage.getItem('username'),
            claimAmount,
            bankName,
            branchName,
            ifscCode,
            accountNumber
        }

        try {
            if (claimAmount > earning) {
                warningAlert("claim amount should be less than earning")
            }
            else {
                let response = await agentClaim(data);
                if (response) {
                    successAlet("claim submitted")
                    setReponseData(response);
                }
            }
        }
        catch (error) {

            warningAlert("claim failed")

        }


    }

    let data = {
        claimAmount, setClaimAmount,
        bankName, setBankName,
        branchName, setBranchName,
        ifscCode, setIfscCode,
        accountNumber, setAccountNumber,
        show, setShow,
        claimHandler
    }

    const getAgentData = async () => {

        try {
            let response = await getAgentDetail();
            console.log(response);
            setCommissions(response.data.commissions);
            setEarning(response.data.totalCommission);
            setClaims(response.data.claims);
            let x = 0;
            for (let c of response.data.claims) {
                if (c.claimStatus == "APPROVED") {

                    x += c.claimAmount;

                }
            }
            setClaim(x);
        }
        catch (error) {

            warningAlert(error.response.data.message);

        }

    }

    useEffect(
        () => {

            getAgentData();

        }
        , [responseData]
    )

    return (
        <>
            <Navbar></Navbar>
            <AgentClaim data={data}></AgentClaim>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Agent Commission</div>

            <div className='container'>

                <div className='row'>
                    <div className='col-10 offset-1'>
                        <div className='text-danger fw-bold fs-1'>
                            Earning:
                            <span className='text-primary'>
                                {earning}
                            </span>
                        </div>

                        <div className='text-danger fw-bold fs-1'>
                            Claimed :
                            <span className='text-primary'>
                                {claim}
                            </span>
                        </div>

                        <div className='text-center fw-bold fs-3 text2'>
                            Commission History
                        </div>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Commission Id</th>
                                    <th scope="col">Commission Type</th>
                                    <th scope="col">Issue date</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    commissions.map(
                                        (commission) => {
                                            return <tr>
                                                <th scope="row">{commission.commisionId}</th>
                                                <td>{commission.commisionType}</td>
                                                <td>{commission.issueDate.substring(0, 10)}</td>
                                                <td>{commission.amount}</td>
                                            </tr>

                                        }
                                    )
                                }
                                <tr>
                                    <td className='fw-bold'>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td className='fw-bold'>{earning}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div><button className='fw-bold px-3 btn btn-lg btn-success'

                            onClick={
                                () => {
                                    setShow(true)
                                }
                            }

                        >Claim</button></div>


                        {
                            claims.length != 0 ? <>
                                <div className='text-center fw-bold fs-3 text2'>
                                    Claim History
                                </div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Claim Id</th>
                                            <th scope="col">Claim Status</th>
                                            <th scope="col">Issue date</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            claims.map(
                                                (claim) => {
                                                    return <tr>
                                                        <th scope="row">{claim.claimId}</th>
                                                        <td>{claim.claimStatus}</td>
                                                        <td>{claim.date.substring(0, 10)}</td>
                                                        <td>{claim.claimAmount}</td>
                                                    </tr>

                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </> : null
                        }

                    </div>
                </div>

            </div>

            <Footer></Footer>
        </>
    )
}

export default AgentCommission