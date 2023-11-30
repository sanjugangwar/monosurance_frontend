import axios from "axios"

export const allAgents=async (pageNumber, pageSize) => {

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/allAgents',
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

export const addAgent=async (data)=>{
    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/addagent', data, {
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

export const deleteAgent=async(id)=>{

    try {

        let response = await axios.delete(
            'http://localhost:8081/monosurance/agent', {
            params: {
                id
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