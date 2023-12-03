import React, { useState } from 'react'
import image from '../../images/login.jpg'

const SchemeView = (data) => {
    data = data.data;
    console.log(data);
    const [value, setValue] = useState(false);
    const [clickCalculate, setClickCalculate] = useState(false);
    const [duration, setDuration] = useState()
    const [investMent, setinvestment] = useState()
    const [preimumType, setPremiumType] = useState()
    const [premiumAmount,setPreimumAmount]=useState();
    const [profitAmount,setProfitAmount]=useState();
    const [totalAmount,setTotalAmount]=useState(); 

    const calculateHandler=()=>{

        let totalInvestMent=investMent;
        setPreimumAmount((totalInvestMent)/(preimumType*duration))
        setProfitAmount((totalInvestMent*12)/100);
        setTotalAmount(Number(profitAmount)+Number(totalInvestMent));
    }

    return (
        <div className='my-5'>
            <div className='text-center fs-2  mb-5'>
                {
                    data.schemeName
                }
            </div>

            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-6'>
                        <div className=' p-5'>
                            nbnbdbsdbbsdmnbdsbcdnscb  hdbdsbcdsbncsdbncds   snbcsd snbcbsdcbsdnc  sdcb sdnbhbcbnd cnxbcndsbcnbadcnsdcnbdsncbdsc
                            {
                                data.description
                            }
                        </div>
                    </div>
                    <div className='col-6  text-center'>
                        <img src={image} alt="scheme image " className='img-fluid shadow-lg' style={{
                            height: "20rem",
                            width: "20rem"
                        }}></img>
                    </div>

                    <div className='col-12 text-center shadow-lg mt-5'>
                        <div class="row mt-5">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={data.minAge} />
                                    <label for="floatingInput">Minimum Age</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={data.maxAge} />
                                    <label for="floatingInput">Maximum Age</label>
                                </div>
                            </div>

                        </div>

                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={data.minAmount} />
                                    <label for="floatingInput">Minimum InvestMent</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={data.maxAmount} />
                                    <label for="floatingInput">Maximum InvestMent</label>
                                </div>
                            </div>

                        </div>

                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={data.minDuration} />
                                    <label for="floatingInput">Minimum Duration </label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={data.maxDuration} />
                                    <label for="floatingInput">Maximum Duration</label>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value="12%" />
                                    <label for="floatingInput">Profit Ratio</label>
                                </div>
                            </div>

                        </div>

                        <button className='btn btn-outline-primary btn-lg fw-bold mb-5'

                            onClick={
                                () => setValue(true)
                            }

                        >Check This Policy</button>

                    </div>
                    {
                        value ?
                            <div className='col-6 text-center shadow-lg mt-5'>
                                <div class="row mt-5">
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput"
                                            value={duration}
                                            onChange={
                                                (e)=>{
                                                    setDuration(e.target.value);
                                                }
                                            }

                                            />
                                            <label for="floatingInput"> Number Of Years</label>
                                        </div>
                                    </div>

                                </div>

                                <div class="row mt-2">
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput"
                                            
                                            value={investMent}
                                            onChange={
                                                (e)=>{
                                                    setinvestment(e.target.value);
                                                }
                                            }
                                            
                                            />
                                            <label for="floatingInput">Total InvestMent</label>
                                        </div>
                                    </div>


                                </div>

                                <div class="row mt-2">
                                    <div class="col">
                                        <select class="form-select py-3" aria-label="Default select example"
                                        
                                        onChange={
                                            (e)=>{
                                                setPremiumType(e.target.value)
                                            }
                                        }
                                        
                                        >
                                            <option selected>Premium Type</option>
                                            <option value="12">Monthly</option>
                                            <option value="4">Quarterly</option>
                                            <option value="2">Half Yearly</option>
                                            <option value="1">Yearly</option>
                                        </select>
                                    </div>

                                </div>

                                <button className='btn btn-outline-primary btn-lg fw-bold my-3'

                                    onClick={
                                        () => {
                                            setClickCalculate(true)
                                            calculateHandler()
                                        }
                                    }

                                >Calculate Premium</button>

                            </div> : null
                    }
                    {
                        clickCalculate ? 
                        
                        <div className='col-5 text-center shadow-lg mt-5 py-4  offset-1'>
                           
                           <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={premiumAmount} />
                                    <label for="floatingInput">InstallMent Amount</label>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={profitAmount} />
                                    <label for="floatingInput">Profit Amount</label>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" value={totalAmount} />
                                    <label for="floatingInput">Total Amount</label>
                                </div>
                            </div>

                            <button className='btn btn-outline-primary btn-lg fw-bold my-3'

                                    onClick={
                                        () => setClickCalculate(true)
                                    }

                                >Buy Policy</button>

                        </div>

                        
                        
                        : null

                    }
                </div>
            </div>

        </div>
    )
}

export default SchemeView