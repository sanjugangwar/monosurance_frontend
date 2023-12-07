import axios from "axios";

export const addScheme = async (data) => {

    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/addScheme',
            data,
            {
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

export const updateScheme = async (data) => {

    console.log("update plan", data);

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/Scheme', data, {
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


export const deleteScheme = async (schemeId) => {

    try {

        let response = await axios.delete(
            'http://localhost:8081/monosurance/Scheme', {
            params: {
                schemeId
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