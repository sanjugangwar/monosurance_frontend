import axios from "axios";
export const  getEmployeeByUsername=()=>{

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/employee',
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

export const editEmployeePorfile=async (data)=>{

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/employee', data, {
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