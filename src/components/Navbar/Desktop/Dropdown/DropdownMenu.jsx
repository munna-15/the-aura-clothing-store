import { useContext } from "react";

import DropdownItem from "./DropdownItem";
import dropdownData from "./dropdownData";

import { ProductContext } from "../../../../context/ProductContextProvider";


const DropdownMenu = ({
  onClose,
  onLogout,
}) => {


  const { wishlistItems } = useContext(ProductContext);



  const handleLogout = () => {
    onClose();
    onLogout();
  };



  return (

    <div className="px-3 py-4">


      <div className="space-y-1">


        {
          dropdownData.map((item) => (

            <DropdownItem

              key={item.id}

              to={item.path}

              label={item.label}

              count={
                item.label === "Wishlist"
                  ? wishlistItems.length
                  : null
              }

              onClick={onClose}

            />

          ))
        }


      </div>



      <div className="my-4 h-px bg-black/5" />



      <DropdownItem
        label="Sign Out"
        onClick={handleLogout}
      />


    </div>

  );

};


export default DropdownMenu;