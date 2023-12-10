import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { allPlans, getSchemeByPlan } from '../../services/admin/AdminServices'
import Insurance from '../../images/Insurance.png'
import Table from '../table/Table'
import AddScheme from '../schemes/AddScheme'
import { useNavigate } from 'react-router-dom'
import EditScheme from '../schemes/EditScheme'
import DeleteScheme from '../schemes/DeleteScheme'

const Schemes = () => {

    const [plans, setPlans] = useState([])
    const [value, setValue] = useState("plan")
    const [scheme, setScheme] = useState([])
    const [buttonValue,setbuttonValue]=useState("add");

    const getAllPlan = async () => {
        let response = await allPlans(0, 30);
        setPlans(response.data.content);
    }

    const getSchemeData = async () => {
        let response = await getSchemeByPlan(value);
        console.log(response);
        setScheme(response.data);
    }

    useEffect(() => {
        getAllPlan();

    }, [])

    useEffect(
        () => {

            if (value != "plan") {

                getSchemeData();

            }

        },
        [value]
    )

    const navigate=new useNavigate();

    let normalButtonClass ='btn btn-lg btn-outline-success sidebutton';
    let activeButtonClass='btn btn-lg btn-outline-success sidebutton active'

    return (
        <>
            <Navbar></Navbar>

            {/* <div className='container-fluid'>
                <div className='row my-5'>
                    <div className='col-4 offset-4'>
                        <select class="form-select" aria-label="Default select example"
                            onChange={
                                (e) => {
                                    setValue(e.target.value);
                                }
                            }
                        >
                            <option selected value="plan">Select A Plan</option>
                            {
                                plans.map(
                                    (plan) => {

                                        return <option value={plan.planId}>{plan.planName}</option>

                                    }
                                )
                            }

                        </select>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <Table data={scheme} canUpdate={true} canDelete={true}></Table>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2 mt-5 ms-5'>
                        <button className={buttonValue=="add"?activeButtonClass:normalButtonClass}
                        
                        onClick={
                            ()=>{
                                setbuttonValue("add")
                            }
                        }

                        >
                            Add A New Scheme
                        </button>
                        <button className={buttonValue=="edit"?activeButtonClass:normalButtonClass}
                        
                        onClick={
                            ()=>{
                                setbuttonValue("edit")
                            }
                        }
                        >
                            Update A Scheme
                        </button>
                        {/* <button className={buttonValue=="read"?activeButtonClass:normalButtonClass}
                        onClick={
                            ()=>{
                                setbuttonValue("read")
                            }
                        }
                        >
                            show All Scheme
                        </button> */}
                        <button className={buttonValue=="delete"?activeButtonClass:normalButtonClass}
                        
                        onClick={
                            ()=>{
                                setbuttonValue("delete")
                            }
                        }

                        >
                           Delete A Scheme
                        </button>
                        <button className={buttonValue=="go"?activeButtonClass:normalButtonClass}
                        
                        onClick={
                            ()=>{
                                navigate('/admin')
                            }
                        }

                        >
                            Go To Dashboard
                        </button>

                      
                    </div>
                    <div className='col-lg-8 mt-5 offset-1'>
                        {
                            buttonValue=="add"?<AddScheme></AddScheme>:null

                        }
                         {
                            buttonValue=="edit"?<EditScheme></EditScheme>:null

                        }
                         {
                            buttonValue=="read"?<h1>All Schemes</h1>:null

                        }
                         {
                            buttonValue=="delete"? <DeleteScheme></DeleteScheme>:null

                        }
                         
                        
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}

export default Schemes