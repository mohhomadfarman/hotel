"use client"
import React, { useEffect, useState } from "react";
import "./signup.scss";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/AuthAction";
import { toast } from "react-toastify";

function Register() {
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [cPassword, setCPassword] = useState()

  const dispatch = useDispatch()
const OnSubmit = () =>{
  const payload = {
      name:name,
      email:email,
      password:password === cPassword ? password :undefined
  }
  const CheckPassword = password === cPassword
    if(CheckPassword && payload?.password !== undefined && name && email){
    dispatch(signup(payload))
  }else{
    toast(' Please fill all the inputs')
  }
}
const isLoading = useSelector((state)=>state?.Register?.isLoading)
const Message = useSelector((state)=>state?.Register?.dara?.msg)
console.log(isLoading)
  return (
    <>
      <div className="section-list-luxury mb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="form-body-text">
                <h1>
                  List Your Luxury Hotel On LuxuryHotelsMagazines.com & receive
                  direct commission-free bookings
                </h1>
                <p>
                  Swift 4-step process in under 5 minutes, with instant
                  visibility and exclusive promotion of your Hotel to our over 1
                  million high-end subscribers{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              {!Message ? (              <div className="form">
                <div className="form-floating mb-3">
                  <input
                  onChange={(e)=>setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Name"
                  />
                  <label htmlFor="floatingInput">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                   onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                   onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                  <input
                   onChange={(e)=>setCPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Confirm Password</label>
                </div>

                <button type="submit" onClick={OnSubmit}>Submit</button>

                <div className="already-have-account">
                  <p>
                    Already have an account! <a href="#">Login.</a>
                  </p>
                </div>
              </div>):
              (<div>{Message}</div>)
              }

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Register;
