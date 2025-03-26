"use client"
import React from 'react'
import * as yup  from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const ForgetPassword = () => {

  const schema=yup.object().shape({
          newPassword:yup.string().required().min(8,"password must be 8 number"),
          confirmPassword:yup.string().required().min(8,"password must be 8 number")
      })
      
      const {register,handleSubmit,formState:{errors}} = useForm({
          resolver:yupResolver(schema)
      })
  return (
    <>
    <div className='container-fluid'>
      <div className='row div3  px-5'>
        <div className="col-md-4 mx-auto bg-light rounded p-4 my-5">
            <h3 className='text-center mb-3 d1'>Forget  Password Form</h3>
             <form onSubmit={handleSubmit((d)=>console.log(d))} >
                
            <input type='text' {...register("newPassword")} placeholder='enter your new password' className='form-control  mt-3 mb-3'/>
            {errors.newPassword && <p className='text-danger'>{errors.newPassword.message}</p>}
            <input type='text' {...register("confirmPassword")} placeholder='enter your confirm password' className='form-control  mb-3'/>
            {errors.confirmPassword && <p className='text-danger'>{errors.confirmPassword.message}</p>}
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

export default ForgetPassword
