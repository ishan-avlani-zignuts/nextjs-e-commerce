"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/userSlice";
import { useRouter } from "next/navigation";
import signup_img from "../../images/signup1.avif";
import Image from "next/image";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  //  console.log("Form Data:", formData);
    dispatch(setUser(formData));

    router.push("/login");
    toast.success("data added successfully");
  };

  return (
    
    <div className="container">
      <div className="row justify-content-center align-items-center border-2">
        <div className="col-md-6">
          <div className="">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="border-right px-4">
              <Image src={signup_img} alt="Image" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
