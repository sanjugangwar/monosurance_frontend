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


export const  getAgentByUsername=async ()=>{

    try {
        let response = await axios.get(
            'http://localhost:8081/monosurance/agent',
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


export const editAgentPorfile=async (data)=>{

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/agent', data, {
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

export const getAgentDetail=async()=>{
    try {
        let response = await axios.get(
            'http://localhost:8081/monosurance/agentDetail',
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



export const agentClaim=async (data)=>{
    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/claim', data, {
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

export const getAgentPolicy=async(pageNumber,agentId)=>{
    try {
        let response = await axios.get(
            'http://localhost:8081/monosurance/policyByAgentid',
            {
                params: {
                   pageNumber,
                   agentId
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
