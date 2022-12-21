import React, { useState } from 'react'
import "../App.css"
import {Box, Flex, HStack, Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {  getJob,  getJobfromData } from '../Redux/action'
import Pagination from '../Component/Pagination'
// import  axios  from 'axios';
import Functionality from '../Component/Functionality'
import Search from '../Component/Search'
const JobList = () => {
    // const[data,setData]= useState([])
    // const [value,setValue]=useState("");
    const dispatch = useDispatch();
    const job = useSelector((state)=> state.job);
    const filters = useSelector((state)=> state.filters)
    const [page, setPage] = useState(1);
    const perPage = 10;
    const totalPages = Math.ceil(filters.length / perPage);
  
    let end = page * perPage;
    let start = end - perPage;
    let paginatedProducts = filters.slice(start, end);
    useEffect(()=>{
       dispatch(getJob())
    //    .then(()=> dispatch(getJobfromData(value)))
    
    },[dispatch])
    
  console.log(paginatedProducts);

    return (
        <>
        <Box>
            <Functionality />
        </Box>
            <Box>
                <Search paginatedProducts={paginatedProducts} />
            </Box>
        <Box>
        <Pagination  page={page} setPage={setPage} totalPages={totalPages}/>
        </Box>
       { paginatedProducts.length >0 ? (
       <Box >
        <div className='job'>
        {
           paginatedProducts.map((item)=>{
                return <Box border={"1px solid black"} key={item.id}>
                       <Box> <Heading>
                        <label >Company:</label>
                        {item.company}</Heading></Box>
                       <Box>
                        <label >City:</label>
                        {item.city}</Box>
                       <Box>
                        <label >Location:</label>
                        {item.location}</Box>
                       <Box><label >Role:</label> {item.role}</Box>
                       <Box> <label >Level:</label>{item.level}</Box>
                       <Box> <label >Position:</label>{item.position}</Box>
                       <Box> <label >Languages:</label> {item.langauage}</Box>
                       <Box> <label >Contract:</label> {item.contract}</Box>
                       <Box><label >Date:</label> {item.date}</Box>

                    </Box>
            })

        }
        </div>
             
               
            
       </Box>
       ):(
                <SimpleGrid columns={3} width={"100%"} spacing={2}>
                    {
                        job.map((el)=>{
                            return <Box border={"1px solid black"} width={"100%"} key={el.id}>
                                <Flex minWidth='max-content' gap={2} >
                                <Stack spacing={3} direction='column'>
                                   
                                 <Box> <Heading> {el.company}</Heading></Box>
                                <Box>{el.position}</Box>
                                 <Box>{el.city}</Box>
                                 </Stack>
                        <HStack spacing={"18px"}>
                            <Flex minWidth='max-content' gap={2}>  
                              
                        <Box> {el.date}</Box>
                        <Box>{el.contract}</Box>
                       <Box>{el.location}</Box>
                       </Flex> 
                        </HStack> 
                       
                        <HStack spacing={"15px"}>
                       <Box> {el.role}</Box>
                       <Box>{el.level}</Box>
                       <Box>  {el.langauage}</Box>
                       </HStack>
                       </Flex>
                    
                            
                                </Box>
                        })
                    }
                </SimpleGrid>
       )}
       </>
    )
}

export default JobList
