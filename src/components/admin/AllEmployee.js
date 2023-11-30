import React, { useEffect, useState } from 'react'
import { deleteEmployee, getAllEmployees, saveEmployee } from '../../services/admin/AdminServices';
import Table from '../table/Table'
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import PaginationApp from '../table/PaginationApp'
import PageSelect from '../table/PageSelect'
import AddEmployee from './AddEmployee';

const AllEmployee = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();

    const [employeeData, setEmployeeData] = useState([])
    
    const [employeeId,setEmployeeId]=useState()
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [mobileNumber,setMobileNumber]=useState("")
    const [salary,setSalary]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [dateOfBirth,setDateOfBirth]=useState("");
    const [houseNo,setHouseNo]=useState("");
    const [apartment,setApartment]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [pincode,setPincode]=useState("");
    const [show ,setShow]=useState(false);
    const [actionData,setActionData]=useState("");

    let data={}

    const addEmployeeHandler=async()=>{

        let response=await saveEmployee(data);
        console.log(response);

    }


    const addEmployeeData={
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
        houseNo,setHouseNo,
        apartment,
        setApartment,
        city,
        setCity,
        state,
        setState,
        pincode,setPincode,
        show,setShow,
        addEmployeeHandler
    }

     data={
        firstName,
        lastName,
        mobileNumber,
        salary,
        username,
        password,
        email,dateOfBirth,
        houseNo,
        apartment,
        city,
        state,pincode
    }

    
    const getEmployeesData = async () => {

        let response = await getAllEmployees(pageNumber, pageSize)
        setEmployeeData(response.data.content);
        setTotalPages(Math.ceil(parseInt(response.headers['employee-count']) / pageSize));
        setTotalElements(Math.ceil(parseInt(response.headers['employee-count']) / pageSize));

        console.log(response);


    }

    const handleDelete=async(employee)=>{

       let response= await deleteEmployee(employee.employeeId)

       setActionData(response);

       

    }

    useEffect(
        () => {
            getEmployeesData();
        }
        , [pageNumber, pageSize, totalPages, totalElements,actionData])

    return (
        <>
            <Navbar></Navbar>
            <AddEmployee data={addEmployeeData}></AddEmployee>
            <div className='background2 text-center display-3 py-3 text-white fw-bold'>All Employees</div>
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

                            <button className='btn btn-lg btn-outline-primary fw-bold'
                            onClick={()=>setShow(true)}
                            >
                                Add A New Employee
                            </button>

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
            <Footer></Footer>
        </>
    )
}

export default AllEmployee