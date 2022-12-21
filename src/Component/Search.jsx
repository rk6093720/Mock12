import React, { useState } from 'react'
import {Box, Input, Button} from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { getJob, getJobfromData } from '../Redux/action';
const Search = ({paginatedProducts}) => {
   const dispatch = useDispatch();
   const [value,setValue]=useState("");

    const handleReset=()=>{
        dispatch(getJob())
     }
    const handleSearch=async(e)=>{
        e.preventDefault();
          dispatch(getJobfromData(value))
      setValue("")
     }
    return (
        <>
        <Box>
        <h1>Search</h1>
        <form onSubmit={handleSearch}>
          <Input width={"50%"}   type="text"
          placeholder='techstack'
          value={value}
          onChange={(e)=> setValue(e.target.value)}
            />
            <Button type='submit'>Search</Button>
            <Button onClick={handleReset} >Reset</Button>
        </form>
    </Box>
    </>
    )
}

export default Search
