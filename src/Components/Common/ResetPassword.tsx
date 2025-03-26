
"use client"
import React from 'react'
import * as yup  from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const ResetPassword = () => {

  const schema=yup.object().shape({
          email:yup.string().email().required(),
          
      })
      
      const {register,handleSubmit,formState:{errors}} = useForm({
          resolver:yupResolver(schema)
      })
  return (
    <>
       <div className='container-fluid'>
      <div className='row div3  px-5'>
        <div className="col-md-2 mx-auto bg-light rounded p-4 my-5">
            <h3 className='text-center mb-3 d1'>Reset Password Form</h3>
             <form onSubmit={handleSubmit((d)=>console.log(d))} >
                
            <input type='text' {...register("email")} placeholder='enter your email' className='form-control  mt-3 mb-3'/>
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
            
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

export default ResetPassword
