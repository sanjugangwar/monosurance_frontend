import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import { allNewCustomers } from '../../services/customer/CustomerService';
import PaginationApp from '../table/PaginationApp';
import PageSelect from '../table/PageSelect';
import { useNavigate } from 'react-router-dom';
import MarkettingMail from './MarkettingMail';
import { warningAlert } from '../alerts/Alert';
import Loader from '../shared/Loader';

const Marketting = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [data, setData] = useState([])
    const [customers, setCustomers] = useState([]);
    const [show,setShow]=useState(false);
    const [customerDb,setCustomerDb]=useState([]);
    // const [loading,setLoading]=useState(false);

    const navigate = new useNavigate();

    const getCustomerData = async () => {

        try {

            let response = await allNewCustomers(pageNumber, pageSize);
            console.log(response);
            setCustomers(response.data.content);
            setData(response.data.content);
            setTotalPages(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
            setTotalElements(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
        }
        catch (error) {

            warningAlert("Some Error Occured");

        }


    }


    useEffect(
        () => {
            getCustomerData();
        }
        , [pageNumber, pageSize])

    
        let dataSend={
            show,setShow,
            customerDb
        }


    return (
        <>
            <Navbar></Navbar>
            <MarkettingMail data={dataSend}></MarkettingMail>
            
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>Marketting</div>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-2'>
                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                            onClick={
                                () => {
                                    navigate('/agent')
                                }
                            }
                        >
                            Go To Dashboard
                        </button>
                    </div>
                    <div className='col-9 offset-1'>

                        <div className='row my-5'>
                            <div className='col-4'>
                                <PaginationApp
                                    totalPages={totalPages}
                                    pageSize={pageSize}
                                    setPageNumber={setPageNumber}
                                    pageNumber={pageNumber}
                                >
                                </PaginationApp>
                            </div>

                            <div className='col-4'>

                                <input className='rounded-pill px-3 text-primary fw-bold'
                                    placeholder='search here'
                                ></input>

                            </div>
                            <div className='col-2 '>
                                <PageSelect

                                    totalElements={totalElements}
                                    setPageSize={setPageSize}
                                    setPageNumber={setPageNumber}
                                    setTotalPages={setTotalPages}
                                    pageSize={pageSize}

                                ></PageSelect>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-10 p-3 shadow-lg '>
                                <table class="table table-striped ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Customer Id</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            customers.map(
                                                (customer) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{customer.customerId}</th>
                                                            <td>{customer.userDetails.firstName}</td>
                                                            <td>{customer.userDetails.lastName}</td>
                                                            <td>{customer.userDetails.mobileNumber}</td>
                                                            <td>{customer.userDetails.email}</td>
                                                            <td><button className='btn btn-outline-primary'

                                                            onClick={

                                                                ()=>{
                                                                    setShow(true)
                                                                    setCustomerDb(customer);
                                                                }
                                                            }

                                                            >
                                                                Send Mail</button></td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Marketting