import React from 'react'
import './index.css'
import fb from '../Img/goole (1).png'
import iphone from '../Img/goole (2).png'
import goolge from '../Img/goole (3).png'
const Aniket = () => {
  return (
    <div className='main-cont-aniket'>
      <div className='title-cont w-100'> Welcome Back!</div>
      
      <div className='cont-1 row'>

<input className='input-block col-md-3 form-control' type="text" placeholder='First Name' />
<input className='input-block col-md-3 form-control' type="text" placeholder='Last Name' />
      </div>

<input className='form-control input-block w-100' type="email"  placeholder='Email'/>
<input className='form-control input-block w-100' type="number"  placeholder='Phone Number'/>
<input className='form-control input-block w-100' type="password"  placeholder='Password' /> 
<input className='form-control input-block w-100' type="password"  placeholder='Confirm Password'/>

<input  type="checkbox" /> <label htmlFor=""><p>By creating an account, you agree to our <a className='sign-in-info text-primary' href="">Terms and Conditions</a> and <a className='sign-in-info text-primary' href="">Privacy policy</a> </p></label>

<button className='btn btn-dark w-100 button-create'>Create Account</button>

<div className='footer'>
 
  <a className='sign-in-info' href="">Already have an account? <span className='text-primary'>Sign In</span> </a>
  <div className='icon-img'>

<img src={iphone} alt="" />
<img src={fb} alt="" />
<img src={goolge} alt="" />

  </div>
</div>

    </div>
  )
}

export default Aniket
