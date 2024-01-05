import React from 'react'

const Faq = () => {
    return (
        <>
            <div className='my-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='text-center fw-bold text1 mt-5 display-1 background2 text-white py-3'>Frequently Asked Questions?</div>
                    </div>
                </div>
                <div className='container'>

                    <div className='row'>

                        <div class="col-12">
                            <div class="accordion my-5" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What are the Products offered by MonoSurance?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Embark on a worry-free journey with our diverse range of insurance solutions,
                                            meticulously crafted to cater to your every need. Whether it's safeguarding your home, car,
                                            health, or securing the future of your loved ones, we've got you covered. Our commitment extends beyond just policies;
                                            it's about providing peace of mind and a sense of security. With customizable options and dedicated customer support,
                                            we ensure that you experience the freedom to live life to the fullest,
                                            confident that we are your reliable partner in protection. Choose us, and let's navigate life's uncertainties together.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Is the MonoSurance rbi approved?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Absolutely! Your security is our utmost priority. 
                                            We employ state-of-the-art encryption protocols and secure transactions 
                                            to ensure that your card information is handled with the highest level of 
                                            protection on our website. Rest assured, your financial data is safeguarded, 
                                            and you can confidently use our platform for secure transactions.
                                             Your trust in us is the foundation of our commitment to providing a 
                                             safe and reliable experience for all our users.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            is my cards are secured with you ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Certainly! "Experience peace of mind and financial security with our trusted insurance solutions.
                                            From comprehensive coverage for your home and vehicle to life and health protection,
                                            we've got the right plans tailored just for you.
                                            Join our community of satisfied customers who enjoy not just reliable insurance
                                            but also personalized service and peace of mind. Your journey
                                            to worry-free living starts here – choose us for the assurance you deserve."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq