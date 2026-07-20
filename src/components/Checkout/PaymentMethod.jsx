import { useContext } from "react";
import { CreditCard, Wallet, Landmark } from "lucide-react";

import { ProductContext } from "../../context/ProductContextProvider";


const PaymentMethod = () => {

  const { paymentMethod, setPaymentMethod } = useContext(ProductContext);


  const methods = [
    {
      id:"cod",
      title:"Cash on Delivery",
      subtitle:"Pay when your order arrives",
      icon:<Wallet size={18}/>
    },
    {
      id:"card",
      title:"Credit / Debit Card",
      subtitle:"Visa, Mastercard, American Express",
      icon:<CreditCard size={18}/>
    },
    {
      id:"bank",
      title:"Bank Transfer",
      subtitle:"Direct bank payment",
      icon:<Landmark size={18}/>
    },
    {
      id:"bkash",
      title:"bKash",
      subtitle:"Mobile banking payment",
      icon:<Wallet size={18}/>
    },
  ];



  return (

    <div>


      <div className="mb-6">

        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
          Payment
        </p>


        <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-medium sm:text-3xl">
          Payment Method
        </h2>


      </div>






      <div className="space-y-3">


        {
          methods.map(method => {

            const active = paymentMethod === method.id;


            return (

              <label

                key={method.id}

                className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                  active
                    ? "border-black bg-neutral-50 shadow-sm"
                    : "border-neutral-200 bg-white hover:border-neutral-400"
                }`}

              >



                <div className="flex items-center gap-3">


                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    active
                      ? "bg-black text-white"
                      : "bg-neutral-100 text-neutral-600"
                  }`}>

                    {method.icon}

                  </div>





                  <div>


                    <h3 className="text-sm font-medium text-black">
                      {method.title}
                    </h3>


                    <p className="mt-1 text-xs text-neutral-500">
                      {method.subtitle}
                    </p>


                  </div>


                </div>






                <input

                  type="radio"

                  name="payment"

                  checked={active}

                  onChange={() => setPaymentMethod(method.id)}

                  className="h-4 w-4 accent-black"

                />


              </label>


            );

          })
        }


      </div>


    </div>

  );

};


export default PaymentMethod;