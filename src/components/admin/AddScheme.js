import React, { useEffect, useState } from 'react'
import { allPlans } from '../../services/admin/AdminServices';

const AddScheme = () => {

    const [planId,setPlanId]=useState();
    const [schemeName,setSchemeName]=useState();
    const [image,setImage]=useState();
    const [schemeDescription,setSchemeDescription]=useState();
    const [minAmount,setMinAmount]=useState();
    const [maxAmount,setMaxAmount]=useState();
    const [minInvestMentTime,setMinInvestMentTime]=useState();
    const [maxInvestMentTime,setMaxInvestMentTime]=useState();
    const [minAge,setMinAge]=useState();
    const [maxAge,setMaxAge]=useState();
    const [profit,setProfit]=useState();
    const [regCommition,setRegCommition]=useState();
    const [installmentCommission,setInstallMentCommission]=useState();
    let documents=[];

    const [plans, setPlans] = useState([]);

    const getPlanData = async () => {

        let response = await allPlans(0, 30);

        setPlans(response.data.content);

    }

    const data={
        planId,
        schemeName,
        schemeImage:image,
        description:schemeDescription,
        minAmount,
        maxAmount,
        minInvestMentTime,
        maxInvestMentTime,
        minAge,
        maxAge,
        profitRatio:profit,
        registrationCommRatio:regCommition,
        installmentCommRatio:installmentCommission,
        documents
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log(data);

    }


    useEffect(
        () => {
            getPlanData();
        }
        , []
    )

    return (
        <div>
            <form>
                <div className='fs-2 fw-bold text-dark'>Plan Details</div>
                <div className='row'>
                    <div class="col-3">
                        <select class="form-select py-3" aria-label="Default select example"
                        onChange={
                            (e)=>{
                                setPlanId(e.target.value);
                            }
                        }
                        >
                            <option selected>select plan</option>
                            {
                                plans.map(
                                    (plan)=>{
                                        return  <option value={plan.planId}>{plan.planName}</option>
                                    }
                                )
                            }
                           
                        </select>
                    </div>
                    <div className='col-4'>
                        <div class="mb-3">
                            <input class="form-control py-3" type="file" id="formFile" 
                            value={image}
                            onChange={
                                (e)=>{
                                    setImage(e.target.value);
                                }
                            }
                            
                            />
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput"
                            value={schemeName}
                            onChange={
                                (e)=>{
                                    setSchemeName(e.target.value);
                                }
                            }
                            
                            />
                            <label for="floatingInput">Scheme Name</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="form-floating mb-3">
                            <textarea type="text" class="form-control" id="textArea" style={{ height: "5rem" }} 
                            
                            value={schemeDescription}
                            onChange={
                                (e)=>{
                                    setSchemeDescription(e.target.value);
                                }
                            }
                            />
                            <label for="textArea">Scheme Description</label>
                        </div>
                    </div>
                </div>
                <div className='fs-2 fw-bold text-dark'>Scheme Details</div>
                <div className='row'>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" 
                            
                            value={minAmount}
                            onChange={
                                (e)=>{

                                    setMinAmount(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Min Amount</label>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" 
                            
                            value={maxAmount}
                            onChange={
                                (e)=>{

                                    setMaxAmount(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Max Amount</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput"
                            
                            value={minInvestMentTime}
                            onChange={
                                (e)=>{

                                    setMinInvestMentTime(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Min InvestMent Time</label>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput"
                            
                            
                            value={maxInvestMentTime}
                            onChange={
                                (e)=>{

                                    setMaxInvestMentTime(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Max InvestMent Time</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" 
                            
                            value={minAge}
                            onChange={
                                (e)=>{

                                    setMinAge(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Min Age</label>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput"
                            
                            value={maxAge}
                            onChange={
                                (e)=>{

                                    setMaxAge(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Max Age</label>
                        </div>
                    </div>
                </div>
                <div className='fs-2 fw-bold text-dark'>Required Documents</div>
                <div className='row'>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="1" id="AADHAR"
                            
                            onChange={
                                (e)=>{
                                    documents.push(e.target.value);
                                }
                            }
                            
                            />
                            <label class="form-check-label" for="AADHAR">
                                AADHAR CARD
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="2" id="PAN" 
                             onChange={
                                (e)=>{
                                    documents.push(e.target.value);
                                }
                            }
                            />
                            <label class="form-check-label" for="PAN">
                                PAN CARD
                            </label>
                        </div>
                    </div>
                </div>
                <div className='fs-2 fw-bold text-dark'>Agent Details</div>
                <div className='row'>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" 
                            
                            value={profit}
                            onChange={
                                (e)=>{

                                    setProfit(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Profit Percentage</label>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" 
                            
                            value={regCommition}
                            onChange={
                                (e)=>{

                                    setRegCommition(e.target.value)

                                }
                            }
                            
                            />
                            <label for="floatingInput">Registeration Commition </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" 
                            
                            value={installmentCommission}
                            onChange={
                                (e)=>{

                                    setInstallMentCommission(e.target.value)

                                }
                            }
                            
                            
                            />
                            <label for="floatingInput">Installment Commition</label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-success btn-lg"
                
                onClick={
                    (e)=>handleSubmit(e)
                }
                
                >Submit</button>
            </form>
        </div>
    )
}

export default AddScheme