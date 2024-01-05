import React from 'react'

import homepage1 from '../../images/homepage1.jpg'
import Insurance from '../../images/product-insurance.png'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'
import Faq from '../shared/Faq'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = new useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-7 ">
              <img src={homepage1} alt="" className='img-fluid' />
            </div>
            <div className='col-5'>
              <div className='text1 display-2 fw-bold '>
                The Best Insurance Begins Here
              </div>

              <div className='mt-3'>
                <button className='btn btn-outline-primary p-2 fw-bold ms-5'

                  onClick={
                    () => {
                      navigate('/plans')
                    }
                  }

                >Buy Your Policy</button>
              </div>

            </div>
          </div>

          <div className='row'>
            <div className='text-center display-3 fw-bolder text2'>
              Why MonoSurance?
            </div>
            <div className='text-center fw-semibold fs-4 text-black-50 mt-3'>MonoSurance is a digital app that provides simple, affordable, and accessible Insurance and Services</div>
          </div>


          <div className='row mt-5'>
            <div className='col-3'>
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title text-center fs-1 text1"> <i class="bi bi-files"></i></h5>
                  <p className='text-center'> 100% Paperless Process</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title text-center fs-1 text1"> <i class="bi bi-file-check"></i></h5>
                  <p className='text-center'> Minimal Documentation </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title text-center fs-1 text1"><i class="bi bi-shield-plus"></i></h5>
                  <p className='text-center'>  Simple & Secure Process </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title text-center fs-1 text1"> <i class="bi bi-chat-dots"></i> </h5>
                  <p className='text-center'> 24/7 Customer Support </p>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className='container-fluid'>
          <div className='row background2'>
            <div className='text-center text-white display-1 fw-bold py-3'>Why Insurance?</div>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row mt-5'>
            <div className='col-5 offset-1'>

              <img src={Insurance} alt='insurance' style={{ height: "50vh" }} className='img-fluid'></img>

            </div>
            <div className='col-5 p-5 fs-3 text-dark align-items-center'>
              Insurance plans will help you pay for medical emergencies, hospitalisation, 
              contraction of any illnesses and treatment, and medical care required in the future. 
              The financial loss to the family due to the unfortunate death of the sole earner can be covered by insurance plans.
            </div>


          </div>
        </div>




      </div>
      <Faq></Faq>
      <Footer></Footer>
    </>
  )
}

export default Home