import React from 'react';

import './App.css';
import './css/bootstrap.min.css'
import MyForm from "./myform.js"

function App() {
  return (
    <div className="App">
      <div class="container-fluid">

        <div class="nav">
          <div class="col">
            <h1>The Cardiology Clinic</h1>
          </div>
        </div>

        <div class="row align-items-center content">
          <div class="col-1">
          </div>
          <div class="col ">

            <p>Cardiology clinic covering all aspects of Cardiology in Poole, Dorset</p>
            <p>Poole Hospital | Nuffield Bournemouth</p>
            <p>Dr Sujata Khambekar MBBS, MD(Medicine), DNB, FRCP(UK)</p>
            <p>Partnered with all major insurance providers</p>


            <div class="forms">
              <h5>Contact us</h5>
              <p><strong>Email</strong> appointments@thecardiology.clinic</p>
              <p><strong>Telephone</strong> 01202 448255</p>
              <h6>Self refer</h6>
              <MyForm/>
            </div>
          </div>

          <div class="col-1">
          </div>

          <div class="d-none d-sm-block col">
              <h2>About Me</h2>
              <p class="About">I am a practicing consultant cardiologist at Poole Hospital NHS Foundation Trust. specialising in Cardiac Imaging (Transthoracic Echocardiography, Transoesophageal Echocardiography, Cardiac MRI and Stress Echocardiography), Heart Failure, Atrial Fibrillation and has an interest in management of adult congenital heart disease. I am the pan-Dorset lead for Adult Congenital Heart Disease.</p>
              <p> Wide range of tests and treatments provided including: </p>
              <p> Assessment of all Aspects of Cardiology </p>
              <p> Cardiac clinical pharmacology </p>
              <p> Cardioversion </p>
              <p> Transthoracic echocardiogram </p>
              <p> Ambulatory blood pressure monitoring </p>
              <p> Angiography </p>
              <p> Cardiovascular risk profile </p>
              <p> Echocardiogram </p>
              <p> Electrocardiogram (ECG) </p>
              <p> Event monitor </p>
              <p> MRI scan </p>
          </div>

          <div class="col-1">
          </div>

        </div>

        <div class="footer ">
          <div class="container">

            <a href="https://finder.bupa.co.uk/Consultant/view/226316/dr_sujata_khambekar" ><img src="bupalogo3.png" alt="Bupa"/></a>
            <a href="https://www.nuffieldhealth.com/consultants/dr-sujata-khambekar" ><img src="nuffieldlogo3.png"  alt="nuffield"/></a>

            <p>The entirety of this site is protected by copyright © 2019–2020 The Cardiology Clinic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
