import React, { useEffect, useState } from 'react'
import PaginationApp from '../table/PaginationApp';
import { getAgentPolicy } from '../../services/agents/AgentService';

const AgentMoreInfo = (data) => {

  data = data.data;
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [scheme, setScheme] = useState("");
  const [dataDb, setDataDb] = useState([]);
  const [paidPayments, setPaidPayments] = useState(0)
  // let paidPayments=0;

  console.log("data", data);

  const agentData = async () => {
    let response = await getAgentPolicy(pageNumber, data.agentId);
    setTotalPages(response.headers['policy-count']);
    console.log("response", response);
    setScheme(response.data.insuranceScheme)
    setDataDb(response.data);
    let x = 0;
    for (let payment of response.data.payments) {

      console.log(payment.paymentStatus)
      if (payment.paymentStatus == "PAID") {
        x++;
        console.log("x", x);
      }

    }
    setPaidPayments(x);
  }

  useEffect(
    () => {

      agentData();

    }, [pageNumber]
  )

  return (
    <div>

      <PaginationApp
        totalPages={totalPages}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}

      ></PaginationApp>

      <div className="container">
        <div className='row'>
          <div className='col-12'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='fs-2 fw-bold text2 text-center my-3'>
                    Policy Sold By Agent
                  </div>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={scheme.schemeName} />
                    <label for="floatingInput" >Scheme Name</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={dataDb.policyNo} />
                    <label for="floatingInput" >Policy Id</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={dataDb.policyStatus} />
                    <label for="floatingInput" >Status</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={dataDb.premiumAmount} />
                    <label for="floatingInput" >Premium Amount</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={dataDb.premiumType} />
                    <label for="floatingInput" >Premium Type</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={dataDb?.payments?.length} />
                    <label for="floatingInput" >Total Payments</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" id="floatingInput" value={paidPayments} />
                    <label for="floatingInput" >Paid Payments</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AgentMoreInfo