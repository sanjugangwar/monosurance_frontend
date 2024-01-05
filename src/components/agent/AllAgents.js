import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { addAgent, allAgents, deleteAgent } from '../../services/agents/AgentService';
import Table from '../table/Table';
import PaginationApp from '../table/PaginationApp';
import PageSelect from '../table/PageSelect';
import AddAgent from './AddAgent';
import { successAlet, warningAlert } from '../alerts/Alert';
import { useNavigate } from 'react-router-dom';

const AllAgents = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [actionData, setActionData] = useState("");
    const [show, setShow] = useState(false);

    const [agentData, setAgentData] = useState([])

    const getAgentsData = async () => {
        try{
        let response = await allAgents(pageNumber, pageSize);
        
        setAgentData(response.data.content.map((agent)=>{
            if(agent.active==true){
                agent.active="ACTIVE";
            }
            return agent;
        }));
        setTotalPages(Math.ceil(parseInt(response.headers['agent-count']) / pageSize));
        setTotalElements(Math.ceil(parseInt(response.headers['agent-count']) / pageSize));
        console.log(response);
        }
        catch(error){
            warningAlert("Some Error Occured");
        }

    }

    const agentPostData = {
        firstName,
        lastName,
        username,
        password,
        mobileNumber,
        email,
        dateOfBirth,
        houseNo,
        apartment,
        state,
        city,
        pincode
    }

    const addAgentHandler = async () => {
        try {
            let response = await addAgent(agentPostData);
            setActionData(response)
            successAlet("agent added")
        }
        catch (error) {
            warningAlert(error.response.data.message);
        }
    }

    const handleDelete = async (agent) => {
        try {
            let response = await deleteAgent(agent.id);
            setActionData(response);
            console.log(agent);
            successAlet("agent deleted ")
        }
        catch (error) {
            warningAlert(error.response.data.message)
        }
    }

    const addAgentData = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        mobileNumber,
        setMobileNumber,
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        dateOfBirth,
        setDateOfBirth,
        houseNo, setHouseNo,
        apartment,
        setApartment,
        city,
        setCity,
        state,
        setState,
        pincode, setPincode,
        show, setShow,
        addAgentHandler
    }





    useEffect(
        () => {
            getAgentsData();
        }
        , [pageNumber,pageSize,actionData]
    )

    const navigate = new useNavigate();


    return (
        <div>
            <Navbar></Navbar>
            <AddAgent data={addAgentData}></AddAgent>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>All Agents</div>
            <div className='contianer-fluid'>

                <div className='row'>


                    <div className='col-2'>
                        <div >

                            <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                                onClick={
                                    () => {
                                        setShow(true)
                                    }
                                }

                            >
                                Add An Agent
                            </button>
                            {/* <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3 mt-3'

                                onClick={
                                    () => {
                                        navigate('/employee')
                                    }
                                }
                            >
                                Go To Dashboard
                            </button> */}

                        </div>
                    </div>

                    <div className='col-10'>


                        <div className='container'>

                            <div className='row my-5'>
                                <div className='col-4'>
                                    <PaginationApp
                                        totalPages={totalPages}
                                        pageSize={pageSize}
                                        setPageNumber={setPageNumber}
                                        pageNumber={pageNumber}

                                    ></PaginationApp>
                                </div>
                                <div className='col-4'>

                                    {/* <input className='rounded-pill px-3 text-primary fw-bold'
                                        placeholder='search here'
                                    ></input> */}

                                </div>
                                <div className='col-2 offset-2'>
                                    <PageSelect

                                        totalElements={totalElements}
                                        setPageSize={setPageSize}
                                        setPageNumber={setPageNumber}
                                        setTotalPages={setTotalPages}
                                        pageSize={pageSize}

                                    ></PageSelect>
                                </div>
                            </div>


                        </div>
                        <div className='container-fluid'>
                            <div className='row my-5'>



                                <div className='col-8 offset-1'>

                                    {/* <button
                            className=
                            'btn btn-lg btn-outline-primary fw-bold'
                            onClick={() => setShow(true)}
                        >Add A new Agent</button> */}

                                    <Table
                                        data={agentData}
                                        canDelete={true}
                                        handleDelete={handleDelete}
                                    ></Table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default AllAgents