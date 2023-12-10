import axios from "axios";

export const addPolicy=async (data)=>{
    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/addPolicy', data, {
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

export const getPolicy=async(pageNumber,username)=>{
    try {
        let response = await axios.get(
            'http://localhost:8081/monosurance/policy',
            {
                params: {
                    pageNumber,
                    username
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

export const getPendingPolicy=async(pageNumber)=>{
    try {
        let response = await axios.get(
            'http://localhost:8081/monosurance/allPendingPolicy',
            {
                params: {
                    pageNumber
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


export const editPolicy=async (data)=>{

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/policy', data, {
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

export const getAllPolicy=async(pageNumber)=>{
    try {
        let response = await axios.get(
            'http://localhost:8081/monosurance/allPolicy',
            {
                params: {
                    pageNumber
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