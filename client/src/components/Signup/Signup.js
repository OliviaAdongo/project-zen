import React from 'react'

function Signup() {
  return (
    <form>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">First Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Second Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
</div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Username</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
</div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}

export default Signup