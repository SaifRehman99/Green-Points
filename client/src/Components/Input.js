import React from "react";
import {
    FormControl,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper  } from "@chakra-ui/react"



const InputContainer = () => {
  return (
    <FormControl id="amount">
    <NumberInput max={100} min={0} >
      <NumberInputField  placeholder="100 KG" />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </FormControl>
  );
};

export default InputContainer;