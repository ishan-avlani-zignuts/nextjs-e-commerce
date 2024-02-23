
"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/userSlice'; 
import { useRouter } from 'next/navigation'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginPage() {
    const dispatch = useDispatch();
    const router = useRouter(); 
    const user = useSelector(state => state.user.user); 
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //console.log('User State:', user); 
       // console.log('Form Data:', formData); 
        
        
        if (user && user.email === formData.email && user.password === formData.password) {
            
            dispatch(loginUser(user)); 
            router.push('/products');
          //  console.log('Login successful');
          toast.success("logged in successfully");

        } else {
            
           // console.log('Invalid credentials');
           toast.errro("invalid credentials");
        }
    };

    return (
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                required
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
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <span>
              <button type="submit" className="btn btn-primary" href="/signup">
                Back
              </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default LoginPage;
