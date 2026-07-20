import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";


const ShippingForm = () => {

  const { shippingData, setShippingData, error } = useContext(ProductContext);


  const handleChange = (e) => {

    setShippingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };


  const fields = [
    {name:"fullName",label:"Full Name",placeholder:"Enter your full name",type:"text"},
    {name:"email",label:"Email",placeholder:"example@gmail.com",type:"email"},
    {name:"phone",label:"Phone Number",placeholder:"+880",type:"text"},
  ];


  return (

    <div>


      <div className="mb-6">

        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
          Delivery
        </p>


        <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-medium tracking-tight sm:text-3xl">
          Shipping Information
        </h2>

      </div>





      <form className="space-y-5">


        {
          fields.map(field => (

            <InputField
              key={field.name}
              {...field}
              value={shippingData[field.name]}
              error={error[field.name]}
              onChange={handleChange}
            />

          ))
        }





        <div className="grid gap-5 sm:grid-cols-2">


          <InputField
            name="country"
            label="Country"
            placeholder="Bangladesh"
            value={shippingData.country}
            error={error.country}
            onChange={handleChange}
          />


          <InputField
            name="city"
            label="City"
            placeholder="Dhaka"
            value={shippingData.city}
            error={error.city}
            onChange={handleChange}
          />


        </div>






        <InputField
          name="address"
          label="Address"
          placeholder="House, Road, Area"
          value={shippingData.address}
          error={error.address}
          onChange={handleChange}
        />






        <InputField
          name="zipCode"
          label="Zip Code"
          placeholder="1207"
          value={shippingData.zipCode}
          onChange={handleChange}
        />



      </form>


    </div>

  );

};






const InputField = ({
  name,
  label,
  type="text",
  placeholder,
  value,
  error,
  onChange,
}) => (

  <div>


    <label className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
      {label}
    </label>



    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 ${
        error
          ? "border-red-400 focus:ring-2 focus:ring-red-100"
          : "border-neutral-200 focus:border-black focus:ring-2 focus:ring-neutral-100"
      }`}
    />



    {
      error && (
        <p className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )
    }


  </div>

);


export default ShippingForm;