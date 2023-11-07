import React from "react";

const Contact =()=>{
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact" >
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form>
                    <form>
  <div class="mb-3">
    <label for="Name" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="Contact" class="form-label">Contact Number</label>
    <input type="text" 
    class="form-control" 
    id="exampleInputEmail1" 
    placeholder="+91"
    aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div> <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"
    placeholder="jimmy@gmail.com"
    aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input 
    type="password" 
    class="form-control" 
    id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Save My Details</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Contact;