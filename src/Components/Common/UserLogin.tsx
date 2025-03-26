"use client"
import React from 'react'
import * as yup  from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const UserLogin = () => {
    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().required().min(8,"password must be 8 number"),
        userType:yup.string().oneOf(["admin","doctor","patient"],"invalid user type").required("user type is required"),
    })
    
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })
    

  return (
    <>
    
      <div className='container-fluid'>
      <div className='row div3  px-5'>
        <div className="col-md-4 bg-light mx-auto div4 rounded p-5 my-5">
            <h3 className='text-center mb-3 d1'>Login<span>Form</span></h3>
             <form onSubmit={handleSubmit((d)=>console.log(d))} >
                <select className='form-control mt-4' {...register("userType")}>
                  
                <option value="admin">Admin</option>
                <option value="patient" >Patient</option>
                <option value="doctor">Doctor</option>
            </select>
            {errors.userType && <p className='text-danger'>{errors.userType.message}</p>}
            <input type='text' {...register("email")} placeholder='enter your email' className='form-control  mt-3 mb-3'/>
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
            <input type='text' {...register("password")} placeholder='enter your password' className='form-control mb-3'/>
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
            <div className='d-flex justify-content-center mt-4 d1'>
                <input type='submit' value="submit" className='btn btn-outline-danger'/>
            </div>
            </form>
        </div>
      </div>
    
      </div>
      
    </>
  )
}

export default UserLogin
