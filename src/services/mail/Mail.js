import axios from "axios";

export const sendEmail=async (recieverEmail,subject,body)=>{
    try {

        let data={
            recieverEmail,
            senderEmail:"monomail70@gmail.com",
            subject,
            body
        }

        let response = await axios.post(
            'http://localhost:8081/monosurance/mail', data, {
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