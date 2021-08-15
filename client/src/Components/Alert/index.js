import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"


const AlertMessage = ({message}) => {
    return (
     <Alert status="error">
    <AlertIcon />
    {message}
  </Alert>
    )
}

export default AlertMessage
