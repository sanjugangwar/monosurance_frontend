import axios from "axios";

export const addImage=async (data)=>{
    try {

        let response = await axios.post(
            'http://localhost:8081/monosurance/upload', data, {
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