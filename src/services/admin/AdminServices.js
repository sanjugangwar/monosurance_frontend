import axios from "axios"
export const getAllEmployees = async (pageNumber, pageSize) => {

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/allEmployee',
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

export const saveEmployee = async (data) => {

    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/addemployee', data, {
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

export const deleteEmployee = async (employeeId) => {

    try {

        let response = await axios.delete(
            'http://localhost:8081/monosurance/employee', {
            params: {
                employeeId
            },
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

export const allPlans = (pageNumber, pageSize) => {

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/allPlan',
            {
                params: {
                    pageNumber,
                    pageSize
                }
                // ,
                // headers: {
                //     Authorization: "Bearer " + localStorage.getItem('auth')
                // }
            }

        )

        return response;

    }
    catch (error) {
        throw error;
    }

}

export const addPlan = async (data) => {

    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/addPlan', data, {
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

export const updatePlan = async (data) => {

    console.log("update plan",data);

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/plan', data, {
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

export const deletePlan=async (planId)=>{

    try {

        let response = await axios.delete(
            'http://localhost:8081/monosurance/Plan', {
            params: {
                planId
            },
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

export const getSchemeByPlan=(planId)=>{
    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/scheme',
            {
                params: {
                    planId
                }
                // ,
                // headers: {
                //     Authorization: "Bearer " + localStorage.getItem('auth')
                // }
            }

        )

        return response;

    }
    catch (error) {
        throw error;
    }
}