import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        email:'',
        password:'',
    })
    const[errors,setErros]=useState({})
    const[valid,setValid]=useState(true)

    const handel =(e) =>{
        e.preventDefault();
        // console.log(formData)
        let isValid=true;
        let validationErros={}


        if (formData.email===" " || formData.email===null)
        {
            isValid=false;
            validationErros.email="Email  Requerds:"
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            isValid=false;
            validationErros.email="Currect Email Requerds:"
        }

        if (formData.password===" " || formData.password===null)
        {
            isValid=false;
            validationErros.password="Password Requerds:"
        }
        else if(formData.password.length<6)
        {
            isValid=false;
            validationErros.password="Password max 6 char Requerds:"
        }

        
      

       
       
           
        axios.get("https://651ae52a340309952f0e03d2.mockapi.io/dhiva")
        .then(result=>{
           result.data.map(user=>{
            if(user.email === formData.email){
                if(user.password===formData.password)
                {
                    alert("Login Success Fyll")
                    navigate("/")
                }
                else{
                    isValid=false;
                    validationErros.password="Wrong Password"
                }
            }
        })
        setErros(validationErros)
        setValid(isValid)
        })
        .catch(err=>console.log(err))
        
    }


  return (
    <>
   
    <div className='container'>
      <div className='row'>
          <div className='col-md-6 offset-md-3'>
              <div className='signup-form'>
                  <form onSubmit={handel} className='mt-5 border p-4 bg-light shadow'>
                      <h2 className='mb-5 text-primary text-center'>Create Account</h2>
                      <div className='row'>
                          {
                              valid ? <></>  :
                              <span className='text-danger'>
                                  {errors.fname};
                                  {errors.lname};
                                  {errors.email};
                                  {errors.password};
                                  {errors.cpassword}
                              </span>
                          }
                          

                         

                          <div className='mb-3 col-md-12'>
                              <label>Email<span className='text-danger'>***</span></label>
                              <input type='email' 
                              placeholder='Enter a email' 
                              name='email' 
                              className='form-control'
                              onChange={(e)=>setFormData({...formData,email:e.target.value})} />
                          </div>
                          <div className='mb-3 col-md-12'>
                              <label>Password<span className='text-danger'>***</span></label>
                              <input type='password' 
                              placeholder='Enter a password' 
                              name='password' 
                              className='form-control'
                              onChange={(e)=>setFormData({...formData,password:e.target.value})} />
                          </div>
                          
                          <div className='mb-3 col-md-12'>
                             <button className='btn btn-primary'>Login</button>
                          </div>
                      </div>
                  </form>
                  <p className='text-center mt-3 text-dark'><Link to="/register">Register</Link></p>
              </div>
          </div>
      </div>
    </div>
 
 </>
  )
}

export default Login