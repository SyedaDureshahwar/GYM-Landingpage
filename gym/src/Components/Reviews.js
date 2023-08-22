import React from 'react';
import './Reviews.css';
const Reviews = () => {
   return (
      <>
         <div className='container-fluid' id='reviews'>
            <br /><br /><br />
            <p className='text-center mainheading fs-1'><b >Features</b></p>
            <br /><br /><br />
            <div className='row  text-light'>

               <div className=' col-md text-center'>
                  <i class=" bgicon  fa-solid fa-person-running  mb-5" ></i><br />
                  <h4 style={{ color: 'red' }}>Specific Mescle</h4>
                  <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but.
                  </p>
               </div>
               <div className='col-md text-center'>
                  <i class=" bgicon fa-solid fa-person-biking  mb-5" ></i><br />
                  <h4 style={{ color: 'red' }}>Flex your Muscle</h4>
                  <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but.
                  </p>
               </div>
               <div className='col-md text-center'>
                  <i class=" bgicon fa-solid fa-dumbbell  mb-5" ></i><br />
                  <h4 style={{ color: 'red' }}>Cardio Excercise</h4>
                  <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but.
                  </p>
               </div>

            </div>
         </div>

      </>
   )
}

export default Reviews;