import React, { useEffect, useState } from 'react'
import { deleteEmployee, getAllEmployees, saveEmployee } from '../../services/admin/AdminServices';
import Table from '../table/Table'
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import PaginationApp from '../table/PaginationApp'
import PageSelect from '../table/PageSelect'
import AddEmployee from './AddEmployee';
import { useNavigate } from 'react-router-dom';
import { successAlet, warningAlert } from '../alerts/Alert';

const AllEmployee = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();

    const [employeeData, setEmployeeData] = useState([])

    const [employeeId, setEmployeeId] = useState()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [salary, setSalary] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [show, setShow] = useState(false);
    const [actionData, setActionData] = useState("");

    let data = {}

    const addEmployeeHandler = async () => {
        try {
            let response = await saveEmployee(data);
            console.log(response);
            setActionData(response);
            if (response)
                successAlet("employee saved ")
        }
        catch (error) {
            warningAlert(error?.response?.data?.message)
        }

    }


    const addEmployeeData = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        mobileNumber,
        setMobileNumber,
        salary,
        setSalary,
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
        addEmployeeHandler
    }

    data = {
        firstName,
        lastName,
        mobileNumber,
        salary,
        username,
        password,
        email, dateOfBirth,
        houseNo,
        apartment,
        city,
        state, pincode
    }


    const getEmployeesData = async () => {
        try {
            let response = await getAllEmployees(pageNumber, pageSize)
            let x=response.data.content.map(
                (a)=>{
                    a['joiningDate']=a['joiningDate'].substr(0,10)
                    return a;
                }
            );
            setEmployeeData(x);
            setTotalPages(Math.ceil(parseInt(response.headers['employee-count']) / pageSize));
            setTotalElements(Math.ceil(parseInt(response.headers['employee-count']) / pageSize));
            console.log(response);

        }
        catch (error) {
            warningAlert(error?.response?.data?.message)
        }


    }

    const handleDelete = async (employee) => {
        try {
            let response = await deleteEmployee(employee.employeeId)
            setActionData(response);
            if(response){
                successAlet("employee deleted")
            }
        }
        catch(error){
            warningAlert(error?.response?.data?.message)
        }
    }

    useEffect(
        () => {
            getEmployeesData();
        }
        , [pageNumber, pageSize, totalPages, totalElements, actionData])

    const navigate = new useNavigate();

    return (
        <>
            <Navbar></Navbar>
            <div className='tec text-center display-3 py-3 text1 fw-bold background2 text-white'>All Employees</div>
            <AddEmployee data={addEmployeeData}></AddEmployee>
            <div className='container-fluid'>
                <div className='row'>
                    {/* <div className='col-2 mt-5'>
                        <button className='border-0'>
                            <div className='card card1 mt-3'>
                                <div className='card-body fs-1 fw-bold  text-center'>
                                    Add A New Employee
                                </div>

                            </div>
                        </button>
                        <button className='border-0'>
                            <div className='card card1 mt-3'>
                                <div className='card-body fs-1 fw-bold  text-center'>
                                    Delete An Employee
                                </div>

                            </div>
                        </button>
                        <button className='border-0'>
                            <div className='card card1 mt-3'>
                                <div className='card-body fs-1 fw-bold  text-center'>
                                    Show All Employee
                                </div>
                            </div>
                        </button>

                        <button className='border-0'>
                            <div className='card  card1 mt-3'>
                                <div className='card-body fs-1 fw-bold  text-center'>
                                    Go to Dashboard
                                </div>
                            </div>
                        </button>

                    </div> */}

                    <div className='col-2 mt-4'>

                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold '

                            onClick={
                                () => {
                                    setShow(true)
                                }
                            }

                        >
                            Add A Employee
                        </button>
                        <button className='fs-1 btn btn-lg border-0 customButton fw-bold  mt-3'

                            onClick={
                                () => {
                                    navigate('/admin')
                                }
                            }
                        >
                            Go To Dashboard
                        </button>

                    </div>



                    <div className='col-8 offset-1'>



                        <div>
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
                                <div className='row'>

                                    <div className='col-12'>

                                        {/* <button className='btn btn-lg btn-outline-primary fw-bold'
                                            onClick={() => setShow(true)}
                                        >
                                            Add A New Employee
                                        </button> */}

                                    </div>

                                    <div className='col-12'>

                                        <Table
                                            data={employeeData}
                                            // canUpdate={true} 
                                            canDelete={true}
                                            // handleUpdate={handleUpdate}
                                            handleDelete={handleDelete}

                                        ></Table>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default AllEmployee