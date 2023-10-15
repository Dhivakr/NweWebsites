import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
    })
   
    const[errors,setErros]=useState({})
    const[valid,setValid]=useState(true)

    const handel =(e) =>{
        e.preventDefault();
        // console.log(formData)
        let isValid=true;
        let validationErros={}

        if (formData.fname===" " || formData.fname===null)
        {
            isValid=false;
            validationErros.fname="First Name Requerds:"
        }

        if (formData.lname===" " || formData.lname===null)
        {
            isValid=false;
            validationErros.lname="Last Name Requerds:"
        }

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

        if (formData.cpassword !== formData.cpassword)
        {
            isValid=false;
            validationErros.cpassword="Conform Password max 6char Requerds:"
        }
        setErros(validationErros)
        setValid(isValid)

        if(Object.keys(validationErros).length===0)
        {
           
            axios.post("https://651ae52a340309952f0e03d2.mockapi.io/dhiva",formData)
            .then(result=>{
                alert("Register Success Fully")
                navigate('/login')
            })
            .catch(err=>console.log(err))
        }
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
                            <div className='mb-3 col-md-6'>
                                <label>FirstName<span className='text-danger'>***</span></label>
                                <input type='text' 
                                placeholder='Enter a name' 
                                name='fname' 
                                className='form-control'
                               onChange={(e)=>setFormData({...formData,fname:e.target.value})} />
                            </div>

                            <div className='mb-3 col-md-6'>
                                <label>LastName<span className='text-danger'>***</span></label>
                                <input type='text' 
                                placeholder='Enter a name' 
                                name='lname' 
                                className='form-control'
                                onChange={(e)=>setFormData({...formData,lname:e.target.value})} />
                            </div>

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
                                <label>Conform password<span className='text-danger'>***</span></label>
                                <input type='password' 
                                placeholder='Enter a Conform Password' 
                                name='cpassword' 
                                className='form-control'
                                onChange={(e)=>setFormData({...formData,cpassword:e.target.value})} />
                            </div>

                            <div className='mb-3 col-md-12'>
                               <button className='btn btn-primary'>Signup</button>
                            </div>
                        </div>
                    </form>
                    <p className='text-center mt-3 text-dark'><Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
      </div>
   
   </>
  )
}

export default Register