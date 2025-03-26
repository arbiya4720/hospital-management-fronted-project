"use client";
import React, { useState } from "react";
import * as yup from "yup" 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const doctorSchema=yup.object().shape({
        name:yup.string().min(2,"name must be at least 2 characters").max(50,"name cannot exceed 50 characters").required(),
        department:yup.string().oneOf(["Cardiology","Dermatology","Neurology","Pediatrics","Orthopedics"],"Invalid departments").required(),
        specialist:yup.string().min(2,"specialist must be at least 2 characters").max(50,"specialist cannot exceed 100 characters").required(),
        qualifications:yup.string().min(2,"Qualifications must be at least 2 characters").max(100,"Qualifications cannot exceed 100 characters").required(),
        contact:yup.string().matches(/^\+?[1-9]\d{1,10}$/,'contact must be a 10-digit number').required(),
        experience:yup.number().typeError("experience must be number").min(1,"experience must be at least 1 year").max(50,"experience cannot exceed 50 years").required(),
        fees:yup.number().typeError("Fee must be a number").required("Fee is required") .min(0, "Fee cannot be negative"),
       address:yup.string().min(5,"address must be at least 5 characters").max(200,"address cannot exceed 200 years").required().required(),
        profile:yup.mixed().required().test("filesize","file is required",(value:any)=> value.length>0),
        email:yup.string().email("invalid email address").required(),
        gender:yup.string().oneOf(["male","female","other"],"invalid gender").required("gender is required"),
        userType:yup.string().oneOf(["Doctor","Patient"],"invalid user type").required("user type is required"),
    })

const patientSchema=yup.object().shape({
          name:yup.string().min(2,"name must be at least 2 characters").max(50,"name cannot exceed 50 characters").required(),
          contact:yup.string().matches(/^\+?[1-9]\d{1,10}$/,'contact must be a 10-digit number').required(),
          email:yup.string().email("invalid email address").required(),
          gender:yup.string().oneOf(["male","female","other"],"invalid gender").required("gender is required"),
          age:yup.number().min(18).max(120).required(),
        userType:yup.string().oneOf(["Doctor","Patient"],"invalid user type").required("user type is required"),

      })
  
    
const UserRegister = () => {
  const [userType, setUserType] = useState("Patient");

  const Schema:any=userType=="Doctor" ? doctorSchema : patientSchema

   const {register,handleSubmit,formState:{errors},reset}:any = useForm({resolver:yupResolver(Schema)})

  return (
    <>
      <div className="container-fluid">
        <div className="row div3 py-4 px-5">
          <div className="col-lg-6 p-4 bg-light mx-auto my-auto rounded">
            <h3 className="d1 text-center mb-4"> Registration</h3>
                <form onSubmit={handleSubmit((d:any)=>console.log(d))}> 
                  <div className="row">
                    <div className="col-md-6 d-flex mx-auto">
                  <label className="mt-2" htmlFor="">Select User Type : </label>

                      <select {...register("userType")} className="form-control ms-2 w-50 mb-2" onChange={(e:any)=>setUserType(e.target.value)}>
                 
                  <option value="Doctor">Doctor</option>
                  <option value="Patient" selected>Patient</option>
                </select>
                {errors.userType &&<p className='text-danger  mb-2'>{errors.userType.message}</p>}
                    </div>
                    
                  </div>
                 

                {userType=="Doctor" && (<>

                  <div className='row'>
                  <div className="col-md-6">
                    <input type='text' {...register("name")} placeholder='enter your name' className='form-control mb-2'/>
                    {errors.name &&<p className='text-danger'>{errors.name.message}</p>} 
                
                </div>
                <div className="col-md-6">
                   <select className='form-select mb-2' {...register("department")}>
                    <option value="" disabled selected>-- Select Department --</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    
                </select>
                {errors.department &&<p className='text-danger'>{errors.department.message}</p>} 
                </div>
                <div className="col-md-6">
                <select className='form-select mb-2' {...register("gender")}>
                    <option value="" disabled selected>-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender &&<p className='text-danger'>{errors.gender.message}</p>} 
                </div>
                <div className="col-md-6">
                    <input type='text'{...register("specialist")} placeholder='enter your Specialist qualities' className='form-control mb-2'/>
                    {errors.specialist &&<p className='text-danger'>{errors.specialist.message}</p>}
                </div>
                <div className="col-md-6">
                <input type='text'{...register("qualifications")} placeholder='enter your qualifications' className='form-control mb-2'/>
                {errors.qualifications &&<p className='text-danger'>{errors.qualifications.message}</p>} 
                </div>
                <div className="col-md-6">
                    <input {...register("contact")} type='text' placeholder='enter your Contact' className='form-control mb-2'/>
                    {errors.contact &&<p className='text-danger'>{errors.contact.message}</p>}
                </div>
                <div className="col-md-6">
                <input {...register("experience")} type='text' placeholder='enter your experience' className='form-control mb-2'/>
                {errors.experience &&<p className='text-danger'>{errors.experience.message}</p>} 
                </div>
                <div className="col-md-6">
                    <input {...register("fees")} type='text' placeholder='enter your fee' className='form-control mb-2'/>
                    {errors.fees &&<p className='text-danger'>{errors.fees.message}</p>}
                </div>
                <div className="col-md-6">
                <input {...register("address")} type='text' placeholder='enter your address' className='form-control mb-2'/>
                {errors.address &&<p className='text-danger'>{errors.address.message}</p>} 
                </div>
                <div className="col-md-6">
                <input {...register("profile")} type='file'  className='form-control mb-2'/>
                {errors.profile &&<p className='text-danger'>{errors.profile.message}</p>} 
                    
                </div>
                <div className="col-md-6 ">
                <input {...register("email")} type='text' placeholder='enter your email' className='form-control mb-2'/>
                {errors.email &&<p className='text-danger'>{errors.email.message}</p>} 
                </div>
            </div>
                <div className='d-flex justify-content-center mt-3'>
                <input type='submit' value="submit" className='btn w-50 btn-outline-danger'/>
                </div>
                </>)}

                {userType=="Patient" && (<>
                  <input {...register("name")} type='text' placeholder='enter your name' className='form-control mb-2'/>
            {errors.name &&<p className='text-danger'>{errors.name.message}</p>} 

            <select className='form-select' {...register("gender")}>
                    <option value="" disabled selected>-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            {errors.gender &&<p className='text-danger'>{errors.gender.message}</p>} 
                    <input {...register("contact")} type='text' placeholder='enter your contact' className='form-control mt-2 mb-2'/> 
                    {errors.contact &&<p className='text-danger'>{errors.contact.message}</p>} 
                    <input {...register("email")} type='text' placeholder='enter your email' className='form-control mb-2'/> 
                    {errors.email &&<p className='text-danger'>{errors.email.message}</p>}  
                    <input {...register("age")} type='text' placeholder='enter your age' className='form-control mb-2'/> 
                    {errors.age &&<p className='text-danger'>{errors.age.message}</p>}  

                    <div className='d-flex justify-content-center mt-3'>
                <input type='submit' value="submit" className='btn btn-outline-danger'/>
                </div>
                </>)}
                </form>
             
          </div>
        </div>
      </div>
    
    </>
  );
};
export default UserRegister;
