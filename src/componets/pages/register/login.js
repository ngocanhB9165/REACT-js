import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (<>
    <div class="container">
      <div class="titile-login row justify-content-center ">
        <h1>Login</h1>
      </div>
      <div class="row justify-content-center ">
        <div class="col-lg-6">
          <form id="formregister">
            <div class="form-group l-g ">
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"
                name="email"/>
            </div>
            <div class="form-group l-g">
              <input type="password" class="form-control" id="password" placeholder="Password" name="password"/>
            </div>
            <div class="des" id="m">
              <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
            </div>
            <div class="k row">
              <button type="submit" class="bt" onclick="change()">Submit</button>
              <div class=" l-g">
                <Link to='/register'><a>Register</a></Link>
                <p>or</p> <a href="">forget password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
    
  )
}

export default Login