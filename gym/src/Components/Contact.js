import React from 'react';
import './Contact.css';
const Contact = () => {
    let contatform=()=>{
        alert('form is enter');
    }
    return (
        <>
            <div className='container-fluid' id='contact'>
                <br/><br/><br/>
                <div className='row mt-5 mb-5'>
                    <h1 className='text-center ' style={{color:'red'}}>Contact Us</h1>
                    <div className=' offset-md-3 col-md-6 '>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control " placeholder='Write here...' id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                        <button onClick={contatform} className=' bgbutton   bgbutton1 text-center' >Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;