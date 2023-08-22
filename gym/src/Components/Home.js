import React from 'react';
import './Home.css';
const Home = () => {

  let Joinus = () => {
    alert('hello');
  }

  return (

    <>
      <div className='container-fluid' id='home'>
        <div className='row text-center text-light'>
          <div className='col  bgimage'>

            <span className='contentpose  fs-1'>
              <span className='bannerbg'>
                <h2 >STEP UP YOUR
                </h2>
                <h1><span style={{ color: 'red' }}>FITNESS</span> WITH US</h1>
                <p>Build Your Body And fitness With Professtion Touch</p></span>
              <br />
              <button onClick={Joinus} className=' fs-4  text-center  p-3 buttonactive1 buttonactivehover1'>Join Us</button>
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home