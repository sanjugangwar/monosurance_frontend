import axios from "axios"

export const login=async(userName,password,roleType)=>{

    try{
    let response =await axios.post(
        'http://localhost:8081/monosurance/login',
        {
            userName,
            password,
            roleType

        }
    )

    return response;
    }
    catch(error){
        throw error;
    }


}