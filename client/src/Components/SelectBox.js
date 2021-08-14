import React from 'react'
import { Select } from "@chakra-ui/react";


const SelectBox = () => {

    let select = ['Paper', 'Plastic', 'Organic', 'Glass', 'Metal',  'E-Waste']
    return (
            <Select placeholder="Select Containers" className="mt-25">

                {select.map(data => (
              <option value={data}>{data}</option>
                ))}
            </Select>
    )
}
export default SelectBox;