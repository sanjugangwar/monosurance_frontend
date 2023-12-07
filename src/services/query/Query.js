import axios from "axios";

export const addQuestion = async (data) => {

    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/question',
            data,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('auth'),
                    
                }
            }

        )

        return response;
    } catch (error) {

        throw error;

    }

}

export const allQuestions=async (pageNumber, pageSize) => {

    try {
        let response = axios.get(
            'http://localhost:8081/monosurance/question',
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

export const updateQuestion = async (data) => {

    console.log("update plan", data);

    try {

        let response = await axios.put(
            'http://localhost:8081/monosurance/question', data, {
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
