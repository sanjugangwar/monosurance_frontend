import React from 'react'

const Footer = () => {
    return (
        <div >
            <footer className="text-center text-lg-start">
              
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                 
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    
                </section>
              
               
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                       
                        <div className="row mt-3">
                          
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                               
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>MonoSurance
                                </h6>
                                <p>
                                "Empowering Dreams, Ensuring Security: Your Tomorrow, Our Assurance."
                                </p>
                            </div>
                          

                           
                            
                            
                            <div className="col-md-5 col-lg-2 col-xl-2 mx-auto mb-4">
                               
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="/" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="/plans" className="text-reset">Plans</a>
                                </p>
                                <p>
                                    <a href="/about" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="/contact" className="text-reset">Contact Us</a>
                                </p>
                                
                            </div>
                           
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                             
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Gurgaon</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    monomail07@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 91 9318441731</p>
                                <p><i className="fas fa-print me-3"></i> + 91 9971087905</p>
                            </div>
                       
                        </div>
                     
                    </div>
                </section>
             
                {/* <div className="text-center p-4 text-white fs-3" style={{backgroundColor: "#ff6861"}}>
                    2023 © MonoSurance
    
                </div> */}
             
            </footer>
           
        </div>
    )
}

export default Footer