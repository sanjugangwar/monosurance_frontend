import axios from "axios";

export const allCustomers=async (pageNumber, pageSize) => {

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/allCustomer',
            {
                params: {
                    pageNumber,
                    pageSize
                }
                ,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('auth')
                }
            }

        )

        return response;

    }
    catch (error) {
        throw error;
    }

}

export const addCustomer=async (data)=>{
    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/addcustomer', data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }

        )

        return response;
    } catch (error) {

        throw error;

    }
}


export const  getCustomerByUsername=()=>{

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/customer',
            {
                params: {
                   username:localStorage.getItem('username')
                }
                ,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('auth')
                }
            }

        )

        return response;

    }
    catch (error) {
        throw error;
    }

}

export const editCustomerPorfile=async (data)=>{

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/customer', data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }

        )

        return response;
    } catch (error) {

        throw error;

    }


}
