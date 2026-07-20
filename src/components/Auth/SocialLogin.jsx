import { Apple } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const SocialLogin = () => {


  const handleComingSoon = (provider) => {

    toast(`${provider} login coming soon`, {
      icon:"🚀",
    });

  };




  const buttonStyle = `
    flex h-12 w-full items-center justify-center gap-3 rounded-xl
    border border-neutral-200 bg-white text-sm font-medium
    text-neutral-700 transition-all duration-300
    hover:border-neutral-900 hover:bg-neutral-50
    active:scale-[0.98]
  `;




  return (

    <div className="space-y-3">


      <button

        type="button"

        onClick={() => handleComingSoon("Google")}

        className={buttonStyle}

      >

        <FcGoogle size={19}/>

        Continue with Google


      </button>





      <button

        type="button"

        onClick={() => handleComingSoon("Apple")}

        className={buttonStyle}

      >

        <Apple
          size={19}
          strokeWidth={1.8}
          className="text-neutral-900"
        />


        Continue with Apple


      </button>


    </div>

  );

};


export default SocialLogin;