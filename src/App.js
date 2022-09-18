import React from 'react';

import './App.css';
import './css/bootstrap.min.css'
import MyForm from "./myform.js"

function App() {
  return (
    <div className="App">
      <div class="container-fluid">

        <div class="nav">
          <div class="col pt-5">
            <h1>The Cardiology Clinic</h1>
          </div>
        </div>

        <div class="row align-items-center content ">
          <div class="col-1">
          </div>

          <div class="col ">
            <div class="container-md p-5">
              <div class="face">
                <img src="Photo.jpg" alt="Sujata" class="rounded mx-auto d-block"/>
              </div>
            </div>
            <p>Dr Sujata Khambekar MBBS, MD (Med), DNB, FRCP</p>
            <p>Cardiologist in Poole and Bournemouth.</p>
            <p>Poole Hospital | Nuffield Bournemouth</p>
            <p>Partnered with all major insurance providers</p>
            <div class="forms">
              <h6>Self refer</h6>
              <MyForm/>
            </div>
          </div>

          <div class="col-1">
          </div>

          <div class="d-none d-md-block col pt-5">
              <h2>About Me</h2>
              <p class="About">Dr. Khambekar has been a consultant for last the 10 years. She has graduated from Bombay University and completed her postgraduation (MD-Medicine) from the same University. She completed her specialist training in Cardiology in various tertiary centers in the United Kingdom- Leicester, Nottingham, Southampton and Manchester. She has special interest in Cardiac imaging – echocardiography, Stress echo and Cardiac MR. She conducts rapid access AF clinic and also offers services in rapid access Heart Failure clinic. She leads the Adult Congenital Heart disease service in University Hospitals Dorset.</p>
              <p> <b>Areas of Interest: </b></p>
              <p> Coronary artery disease and Angina </p>
              <p> Atrial fibrillation </p>
              <p> Palpitations </p>
              <p> Heart Failure </p>
              <p> Adult congenital heart disease</p>
              <p> <b>Cardiac Imaging:  </b></p>
              <p> MRI </p>
              <p> Stress echo </p>
              <p> Echocardiography </p>


              <h5>Contact us</h5>
              <p><strong>Email</strong> appointments@thecardiology.clinic</p>
              <p><strong>Telephone</strong> 0300 0198255</p>
          </div>

          <div class="col-1">
          </div>

        </div>



        <div class="footer ">
          <div class="container pt-5">

            <a href="https://finder.bupa.co.uk/Consultant/view/226316/dr_sujata_khambekar" ><img src="bupalogo3.png" alt="Bupa"/></a>
            <a href="https://www.nuffieldhealth.com/consultants/dr-sujata-khambekar" ><img src="nuffieldlogo3.png"  alt="nuffield"/></a>

            <p>The entirety of this site is protected by copyright © 2019–2022 The Cardiology Clinic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
