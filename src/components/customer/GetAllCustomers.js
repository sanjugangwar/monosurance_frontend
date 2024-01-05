import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import { allCustomers } from '../../services/customer/CustomerService';
import Table from '../table/Table';
import PaginationApp from '../table/PaginationApp';
import PageSelect from '../table/PageSelect';
import { useNavigate } from 'react-router-dom';
import { warningAlert } from '../alerts/Alert';
import CustomerPolicy from '../admin/CustomerPolicy';

const GetAllCustomers = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [data, setData] = useState([])
    const [userName, setUserName] = useState();
    const [policyShow, setPolicyShow] = useState(false);

    const navigate = new useNavigate();

    const handleViewMore = (data) => {
        console.log(data)
        setUserName(data.username);
        setPolicyShow(!policyShow);
    }

    const getCustomerData = async () => {

        try {

            let response = await allCustomers(pageNumber, pageSize);
            let customers = [];

            for (let customer of response.data.content) {
                let x = customer.id;
                delete customer.id;
                customer.CustomerId = x;
                customers.push(customer);
            }

            setData(customers);

            console.log(response.data.content);
            setTotalPages(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
            setTotalElements(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
        }
        catch (error) {

            warningAlert("some error occured")

        }


    }


    useEffect(
        () => {
            getCustomerData();
        }
        , [pageNumber, pageSize])

    return (
        <>
            <Navbar></Navbar>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>All Customers</div>

            <div className='container'>
                <div className='row'>
                    {/* <div className='col-2'>

                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold mt-3'

                            onClick={
                                () => {
                                    navigate('/agent')
                                }
                            }
                        >
                            Go To Dashboard
                        </button>

                    </div> */}
                    <div className='col-12'>

                        <div className='row my-5'>
                            <div className='col-4 offset-1'>
                                <PaginationApp
                                    totalPages={totalPages}
                                    pageSize={pageSize}
                                    setPageNumber={setPageNumber}
                                    pageNumber={pageNumber}
                                >
                                </PaginationApp>
                            </div>

                            <div className='col-4'>

                                {/* <input className='rounded-pill px-3 text-primary fw-bold'
                                    placeholder='search here'
                                ></input> */}

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
                            <div className='col-10 offset-1'>
                                <Table data={data} canViewMore={true} handleViewMore={handleViewMore}></Table>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            {
                            policyShow?
                            <div className='row'>
                                <CustomerPolicy userName={userName}></CustomerPolicy>
                            </div>
                            :null
                        }I
            {
                data.length == 0 ?
                    <div className='text-center fw-bold text-danger fs-1'> No Customer Found </div> : null
            }

            <Footer></Footer>
        </>
    )
}

export default GetAllCustomers