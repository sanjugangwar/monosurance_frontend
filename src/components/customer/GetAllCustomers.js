import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import { allCustomers } from '../../services/customer/CustomerService';
import Table from '../table/Table';
import PaginationApp from '../table/PaginationApp';
import PageSelect from '../table/PageSelect';

const GetAllCustomers = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [data, setData] = useState([])

    const getCustomerData = async () => {

        try {

            let response = await allCustomers(pageNumber, pageSize);
            setData(response.data.content);
            setTotalPages(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
            setTotalElements(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
        }
        catch (error) {

        }


    }


    useEffect(
        () => {
            getCustomerData();
        }
        , [pageNumber, pageSize])

    return (
        <>
            {/* <Navbar></Navbar> */}

            <div className='conatiner'>

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

                <div className='row'>
                    <div className='col-12'>
                        <Table data={data} canViewMore={true}></Table>
                    </div>
                </div>


            </div>
            {
                data.length==0?
                <div className='text-center fw-bold text-danger fs-1'> No Customer Found </div>:null
            }

            {/* <Footer></Footer> */}
        </>
    )
}

export default GetAllCustomers