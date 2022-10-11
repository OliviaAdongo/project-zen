import React from 'react'

function Login() {
  return (
    <form> 
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Username:</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your username"/>
</div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password:</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}

export default Login