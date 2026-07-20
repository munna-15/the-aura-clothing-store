import { Link } from "react-router-dom";


const baseClasses = `
  group
  flex
  w-full
  items-center
  justify-between
  rounded-2xl
  px-5
  py-3.5
  text-[13px]
  font-medium
  uppercase
  tracking-[0.18em]
  text-gray-700
  transition-all
  duration-200
  hover:bg-black/[0.03]
  hover:text-black
`;



const DropdownItem = ({
  to,
  label,
  count,
  onClick,
}) => {



  const content = (

    <>

      <div className="flex items-center gap-3">

        <span>
          {label}
        </span>


        {
          count > 0 && (

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[10px] font-medium tracking-normal text-white">
              {count}
            </span>

          )
        }


      </div>




      <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>


    </>

  );



  if (to) {

    return (

      <Link
        to={to}
        onClick={onClick}
        className={baseClasses}
      >

        {content}

      </Link>

    );

  }



  return (

    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
    >

      {content}

    </button>

  );


};



export default DropdownItem;