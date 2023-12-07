import React, { useEffect, useState } from 'react'
import Footer from '../navbar/Footer'
import Navbar from '../navbar/Navbar'
import contact from '../../images/6fc1d7f2-d9cb-45ea-9c61-6402cb0a3f72.jpg'
import axios from 'axios'

const About = () => {

    const [image, setImage] = useState();

    // const getImageData = async () => {

    //     let response = await axios.get(
    //         'http://localhost:8081/monosurance/download', {
    //         params: {
    //             file: "login.jpg"
    //         }
    //     }
    //     )

    //     const file = new Blob([response.data], {
    //         type: "image/png",
    //     });
    //     console.log(file);
    //     const objectURL = URL.createObjectURL(file);
    //     console.log(objectURL)
    //     setImage(objectURL);

    //     // setImage(response.data);

    // }

    let filename='login.jpg'

    // useEffect(
    //     () => {

    //         getImageData();

    //     }
    //     , []
    // )

    return (
        <div>
            <Navbar></Navbar>
            {/* <img src={"http://localhost:8081/monosurance/download?file="+filename}/> */}
            <div className='container-fluid'>

                <div className='row mt-5' >
                    <div className='col-5'>
                        <img src={contact} className=''></img>
                    </div>
                    <div className='col-5'>
                        <div className='text-center display-3 fw-bold text2'>
                            About Us
                        </div>
                        <div className='fs-5 '>
                            Welcome to MonoSurance, your dedicated partner in protection.
                            We are committed to delivering innovative insurance solutions with a customer-centric approach.
                            At MonoSurance, our experienced team is here to guide you through the intricacies of insurance, ensuring your peace of mind.
                            From comprehensive coverage to seamless, technology-driven solutions, we are here to safeguard what matters most to you.
                            Thank you for considering MonoSurance as your trusted insurance partner.
                            Contact us for personalized assistance and explore the difference of our tailored insurance offerings.
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    )
}

export default About