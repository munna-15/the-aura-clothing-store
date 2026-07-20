import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import useAuth from "../../hooks/useAuth";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";


const LoginForm = () => {

  const navigate = useNavigate();

  const location = useLocation();


  const { login, loading } = useAuth();



  const [formData,setFormData] = useState({
    email:"",
    password:"",
    remember:false,
  });




  const handleChange = ({target}) => {

    const {name,value,checked,type} = target;


    setFormData((prev)=>({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();



    const success = await login({

      email:formData.email.trim(),

      password:formData.password,

      remember:formData.remember,

    });



    if(!success) return;




    const redirectPath =
      location.state?.from?.pathname || "/";



    navigate(redirectPath,{
      replace:true,
    });


  };





  return (

    <form onSubmit={handleSubmit} className="space-y-4">



      <AuthInput

        label="Email Address"

        name="email"

        type="email"

        icon={Mail}

        placeholder="Enter your email"

        value={formData.email}

        onChange={handleChange}

        required

      />





      <PasswordInput

        label="Password"

        name="password"

        placeholder="Enter your password"

        value={formData.password}

        onChange={handleChange}

        required

      />






      {/* Options */}


      <div className="flex items-center justify-between pt-1">


        <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-500">


          <input

            type="checkbox"

            name="remember"

            checked={formData.remember}

            onChange={handleChange}

            className="h-4 w-4 accent-black"

          />


          <span>
            Remember me
          </span>


        </label>





        <Link

          to="/forgot-password"

          className="text-sm font-medium text-neutral-700 transition hover:text-black hover:underline"

        >

          Forgot Password?

        </Link>



      </div>







      <AuthButton loading={loading}>

        Sign In

      </AuthButton>







      <div className="space-y-4 pt-1">


        <Divider />


        <SocialLogin />



        <p className="text-center text-sm text-neutral-500">


          Don't have an account?{" "}



          <Link

            to="/register"

            className="font-semibold text-neutral-900 transition hover:underline"

          >

            Create Account

          </Link>



        </p>


      </div>





    </form>

  );

};


export default LoginForm;