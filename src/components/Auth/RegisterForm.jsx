import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, User } from "lucide-react";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";


const RegisterForm = () => {

  const navigate = useNavigate();

  const { register, loading } = useAuth();


  const [formData, setFormData] = useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
    agree:false,
  });



  const handleChange = ({ target }) => {

    const { name, value, checked, type } = target;

    setFormData((prev)=>({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

  };




  const handleSubmit = async(e)=>{

    e.preventDefault();


    const fullName = formData.fullName.trim();
    const email = formData.email.trim();



    if(!fullName){
      toast.error("Full name is required");
      return;
    }


    if(!email){
      toast.error("Email is required");
      return;
    }


    if(formData.password.length < 6){
      toast.error("Password must be at least 6 characters");
      return;
    }


    if(formData.password !== formData.confirmPassword){
      toast.error("Passwords do not match");
      return;
    }


    if(!formData.agree){
      toast.error("Please accept Terms & Conditions");
      return;
    }



    const success = await register({
      fullName,
      email,
      password:formData.password,
    });



    if(!success) return;



    setFormData({
      fullName:"",
      email:"",
      password:"",
      confirmPassword:"",
      agree:false,
    });


    navigate("/login",{replace:true});

  };





  return (

    <form onSubmit={handleSubmit} className="space-y-4">


      <AuthInput
        label="Full Name"
        name="fullName"
        placeholder="John Doe"
        icon={User}
        value={formData.fullName}
        onChange={handleChange}
        required
      />


      <AuthInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="example@email.com"
        icon={Mail}
        value={formData.email}
        onChange={handleChange}
        required
      />



      <PasswordInput
        label="Password"
        name="password"
        placeholder="Create your password"
        value={formData.password}
        onChange={handleChange}
        required
      />



      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />





      {/* Terms */}


      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-neutral-200 p-3 text-xs leading-5 text-neutral-500 transition hover:border-neutral-900 sm:text-sm">


        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="mt-1 accent-black"
        />


        <span>

          I agree to the{" "}

          <span className="font-medium text-neutral-900">
            Terms & Conditions
          </span>

          {" "}and{" "}

          <span className="font-medium text-neutral-900">
            Privacy Policy
          </span>

        </span>


      </label>





      <AuthButton loading={loading}>
        Create Account
      </AuthButton>





      <div className="space-y-4 pt-1">


        <Divider />


        <SocialLogin />



        <p className="text-center text-sm text-neutral-500">


          Already have an account?{" "}


          <Link
            to="/login"
            className="font-semibold text-neutral-900 transition hover:underline"
          >
            Sign In
          </Link>


        </p>



      </div>



    </form>

  );

};


export default RegisterForm;