import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { agentClaimApprove, agentClaims, policyClaimed, policyClaims } from '../../services/admin/AdminServices';
import { Navigate, useNavigate } from 'react-router-dom';
import { successAlet, warningAlert } from '../alerts/Alert';
import { getAgentPolicy } from '../../services/agents/AgentService';
import AgentMoreInfo from './AgentMoreInfo';
import Claims from './Claims';
import PolicyMoreInfo from './PolicyMoreInfo';

const ApproveClams = () => {

    const [agents, setAgents] = useState([]);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [agentsClaim, setAgentsClaim] = useState([]);
    const [policies, setPolicies] = useState([])
    const [agentId, setAgentId] = useState();
    const [claimId, setClaimId] = useState();
    const [responseData, setResponseData] = useState();
    const [moreInfo, setMoreInfo] = useState(false);
    const [policyMoreInfo, setPolicyMoreInfo] = useState(false);
    const [agentProp, setAgentProp] = useState("");
    const [policy, setPolicy] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const agnetClamHandler = async () => {
        try {
            let response = await agentClaims();
            console.log(response);
            setAgents(response.data)
            setShow1(true);
            setShow2(false)
        }
        catch (error) {
            warningAlert("some error occured")
        }



    }



    const policyClaimHandler = async () => {
        try {
            setShow2(true);
            setShow1(false);
            let response = await policyClaims();
            console.log(response);
            setPolicies(response.data);
        }
        catch (error) {

            warningAlert("some error occured")

        }
    }

    const claimHandler = (agent) => {

        let x = [];

        for (let claim of agent.claims) {
            if (claim.claimStatus == "PENDING") {
                x.push(claim);
            }
        }

        setAgentsClaim(x);

    }

    const agentClaimApproveHandler = async (claim) => {
        let data = {
            agentId,
            claimId: claim.claimId
        }

        if (claim.claimStatus == "APPROVED") {
            warningAlert("Already Approved");
            return;
        }

        try {
            console.log("data", claim);
            let response = await agentClaimApprove(data);
            setResponseData(response);
            if (response) {
                successAlet("claim approved");

            }
        }
        catch (error) {
            warningAlert("claim approve failed")
        }
    }

    const polciyApproveClaimHandler = async (policy) => {

        try {
            console.log(policy)
            let response = await policyClaimed(policy.policyNo);
            if (response) {
                successAlet("policy claimed")
            }
        }
        catch (error) {

            warningAlert("claim approve failed")

        }

    }

    useEffect(() => {

        if (show1) {
            agnetClamHandler();
        }
        else {
            policyClaimHandler();
        }

    }, [responseData])

    const navigate = new useNavigate();
    return (
        <>
            <Navbar></Navbar>
            <div className='container-fluid'>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Claims</div>
                <div className='row'>
                    <div className='col-2'>
                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                            active={show1}

                            onClick={agnetClamHandler}

                        >
                            <div class="card " style={{
                                backgroundColor:"#e2f1aabd"
                            }} >
                                <div class="card-body" >
                                    <h5 class="card-title fs-1 fw-bold py-3 text-danger">Agent Claims</h5>

                                </div>
                            </div>
                        </button>
                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold  mt-3'

                            onClick={
                                policyClaimHandler
                            }

                        >
                            <div class="card " style={{
                                backgroundColor:"#e2f1aabd"
                            }} >
                                <div class="card-body" >
                                    <h5 class="card-title fs-1 fw-bold py-3 text-danger">Policy Claims</h5>

                                </div>
                            </div>
                        </button>
                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold  mt-3'

                            onClick={
                                () => navigate('/admin')
                            }

                        >
                            <div class="card " style={{
                                backgroundColor:"#e2f1aabd"
                            }} >
                                <div class="card-body" >
                                    <h5 class="card-title fs-1 fw-bold py-3 text-danger"> Go To Dashboard</h5>

                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='col-8 offset-1'>
                        {

                            show1 ?
                                <>
                                    <div className='fs-2 fw-bold text2 text-center mt-5'>
                                        Agent's Claim
                                    </div>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Agent Id</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Total Commission</th>
                                                <th scope="col">Claims</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                agents.map(
                                                    (agent) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{agent.agentId}</th>
                                                                <td>{agent.userDetails.firstName}</td>
                                                                <td>{agent.userDetails.lastName}</td>
                                                                <td>{agent.totalCommission}</td>
                                                                <td>
                                                                    <button className='btn btn-lg btn-outline-success'

                                                                        onClick={
                                                                            () => {
                                                                                claimHandler(agent)
                                                                                setAgentId(agent.agentId);
                                                                            }
                                                                        }

                                                                    >Claims</button>

                                                                    <button className='btn btn-lg btn-outline-info ms-3'

                                                                        onClick={
                                                                            () => {
                                                                                // moreInfoHandler(agent)
                                                                                setAgentId(agent.agentId);
                                                                                setMoreInfo(!moreInfo)
                                                                                setAgentProp(agent);
                                                                            }
                                                                        }

                                                                    >More Info</button>

                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            }

                                        </tbody>
                                    </table>
                                    {
                                        moreInfo ?
                                            <>
                                                {/* <div>More Info</div> */}
                                                <AgentMoreInfo data={agentProp}></AgentMoreInfo>

                                            </> : null
                                    }



                                    {
                                        agentsClaim.length > 0 ?
                                            <>
                                                <div className='fs-2 fw-bold text2 text-center mt-5'>
                                                    Claims
                                                </div>

                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Claims Id</th>
                                                            <th scope="col">Claim Amount</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Claim Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            agentsClaim.map(
                                                                (claim) => {

                                                                    return (
                                                                        <tr>
                                                                            <th scope="row">{claim.claimId}</th>
                                                                            <td>{claim.claimAmount}</td>
                                                                            <td>{claim.date}</td>
                                                                            <td>{claim.claimStatus}</td>
                                                                            <td><button className='btn btn-lg btn-outline-success'

                                                                                onClick={
                                                                                    () => {

                                                                                        setClaimId(claim.claimId)
                                                                                        agentClaimApproveHandler(claim)
                                                                                    }
                                                                                }

                                                                            >{claim.claimStatus == "PENDING" ? "Approve" : "APPROVED"}</button></td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            )
                                                        }

                                                    </tbody>
                                                </table>


                                            </> : null
                                    }

                                </> : null
                        }

                        {
                            show2 ?
                                <>

                                    <div className='fs-2 fw-bold text2 text-center mt-5'>
                                        Policy Claim
                                    </div>

                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Policy Id</th>
                                                <th scope="col">Claim Amount</th>
                                                <th scope="col">Issue Date</th>
                                                <th scope="col">Maturity Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                policies.map(
                                                    (policy) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{policy.policyNo}</th>
                                                                <td>{policy.claims.claimAmount}</td>
                                                                <td>{policy.issueDate.substr(0, 10)}</td>
                                                                <td>{policy.maturityDate.substr(0, 10)}</td>
                                                                <td>
                                                                    <button className='btn btn-lg btn-outline-success'

                                                                        onClick={
                                                                            () => {
                                                                                polciyApproveClaimHandler(policy)
                                                                            }
                                                                        }

                                                                    >Approve</button>

                                                                    <button className='btn btn-lg btn-outline-info ms-2'

                                                                        onClick={
                                                                            () => {
                                                                                console.log(policy)
                                                                                setPolicyMoreInfo(!policyMoreInfo)
                                                                                setPolicy(policy);
                                                                            }
                                                                        }

                                                                    >More Info</button>


                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            }

                                        </tbody>
                                    </table>

                                    {
                                        policyMoreInfo ?
                                            <>
                                                {/* <div>More Info</div> */}
                                                <div className='justify-content-center'> 
                                                    <PolicyMoreInfo data={policy}></PolicyMoreInfo>
                                                </div>


                                            </> : null
                                    }

                                </> : null
                        }

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ApproveClams