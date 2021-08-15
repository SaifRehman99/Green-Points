import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const InputSelect = ({setFormValues, formValues} ) => {
  let select = ["Paper", "Plastic", "Organic", "Glass", "Metal", "E-Waste"];


  let handleChange = (i, value, name) => {
    let newFormValues = [...formValues];
    newFormValues[i][name] = value;
    setFormValues(newFormValues);
  };

  const addFormFields = () =>
    setFormValues([...formValues, { name: "", weight: 0 }]);

  return (
    <>
     {formValues.map((data, index) => (
           <div className="select__container mt-25">
           <Select
             placeholder="Select Containers"
             onChange={(e) => handleChange(index, e.target.value, "name")}
           >
             {select.map((data) => (
               <option value={data} name="name">
                 {data}
               </option>
             ))}
           </Select>
 
           <FormControl id="amount">
             <NumberInput max={100} min={0}>
               <NumberInputField
                 placeholder="100 KG"
                 name="weight"
                 onChange={(e) =>
                   handleChange(index, Number(e.target.value), "weight")
                 }
               />
               <NumberInputStepper>
                 <NumberIncrementStepper />
                 <NumberDecrementStepper />
               </NumberInputStepper>
             </NumberInput>
           </FormControl>
         </div>
     ))}

      <p className="greenpoint__add font-w6 cursor-p" onClick={addFormFields}>
        + &nbsp; Add Another Container
      </p>
    </>
  );
};

export default InputSelect;