import React from 'react'
import {Box, Button, Heading, useColorMode} from "@chakra-ui/react";
import { Link } from "react-router-dom"
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box id="navbar-container" width={"100%"} height={"50px"} bg={"teal"}
        padding={"5px"} color={"white"} display={"flex"} justifyContent={"space-evenly"}>
         <Box flex={"5"}>
         <Heading size={"md"}>Masai Job App</Heading>
         </Box>
         <Box flex={"5"} textAlign={"center"} display={"flex"} justifyContent={"space-between"}>
           <Link to={"/joblist"}>JobList</Link>
           <Link to={"/jobform"}>JobForm</Link>
           <header>
            <Button color={"black"} onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </header>
          
         </Box>
       </Box>
    )
}

export default Navbar
