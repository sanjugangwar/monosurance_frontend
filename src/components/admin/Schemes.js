import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import { allPlans, getSchemeByPlan } from '../../services/admin/AdminServices'
import Insurance from '../../images/Insurance.png'

const Schemes = () => {

    const [plans, setPlans] = useState([])
    const [value, setValue] = useState("plan")
    const [scheme, setScheme] = useState({})

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

            <div className='container'>
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
                </div>

                {
                    value != "plan" ?
                        <div className='my-5 row'>

                            <div>

                                scheme Name :{scheme.schemeName}

                            </div>

                            <div>

                                <img src={Insurance}></img>

                            </div>


                            <div>

                                scheme Description :Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quisquam eaque consectetur minima beatae et alias sint
                                obcaecati quo autem vitae, ex id laboriosam enim, illo assumenda impedit quibusdam incidunt?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi similique fuga placeat repellendus dolores molestiae
                                repudiandae nemo illo magnam quo. Fugit culpa enim aspernatur laboriosam pariatur consequatur, ut blanditiis expedita!

                            </div>

                            <div>

                                Min Age :{scheme.minAge}

                            </div>


                            <div>

                                Max Age :{scheme.maxAge}

                            </div>

                            <div>

                                Min Investment :{scheme.minAmount}

                            </div>
                            <div>

                                Max Investment :{scheme.maxAmount}

                            </div>





                        </div>
                        : <div className='text-danger text-center fw-bold'>No Plan Selected </div>
                }
            </div>



            <Footer></Footer>
        </>
    )
}

export default Schemes