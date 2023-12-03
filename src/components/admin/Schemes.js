import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { allPlans, getSchemeByPlan } from '../../services/admin/AdminServices'
import Insurance from '../../images/Insurance.png'
import Table from '../table/Table'
import AddScheme from './AddScheme'

const Schemes = () => {

    const [plans, setPlans] = useState([])
    const [value, setValue] = useState("plan")
    const [scheme, setScheme] = useState([])

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
                        <button className='btn btn-lg btn-outline-success sidebutton'>
                            Add A New Scheme
                        </button>
                        <button className='btn btn-lg btn-outline-primary sidebutton'>
                            Update A Scheme
                        </button>
                        <button className='btn btn-lg btn-outline-warning sidebutton'>
                            show All Scheme
                        </button>
                        <button className='btn btn-lg btn-outline-danger sidebutton'>
                            Delete A scheme
                        </button>
                        <button className='btn btn-lg btn-outline-info sidebutton'>
                            Go To Dashboard
                        </button>

                      
                    </div>
                    <div className='col-lg-8 mt-5 offset-1'>
                        <AddScheme></AddScheme>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}

export default Schemes