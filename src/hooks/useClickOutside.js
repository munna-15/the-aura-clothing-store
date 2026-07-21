import { useEffect } from "react";


const useClickOutside = (ref, callback, enabled = true) => {


  useEffect(() => {

    if(!enabled) return;


    const handleClick = (event) => {

      if(!ref.current) return;


      if(!ref.current.contains(event.target)) {

        callback(event);

      }

    };



    document.addEventListener("mousedown", handleClick);

    document.addEventListener("touchstart", handleClick, {
      passive:true,
    });



    return()=>{

      document.removeEventListener("mousedown", handleClick);

      document.removeEventListener("touchstart", handleClick);

    };


  },[ref,callback,enabled]);


};


export default useClickOutside;