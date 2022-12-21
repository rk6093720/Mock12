import React from 'react'
import{Box,Select} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, getJob, getJobfromData } from '../Redux/action';
const Functionality = () => {
    const dispatch = useDispatch();
    const job= useSelector((store) => store.job);
    const filters = useSelector((store)=> store.filters);
    console.log(filters);
 
    function handleFilter(e) {
      console.log(e.target.value);
       let filters =  job.filter((el) => {
        console.log(el.role);
        return el.role === e.target.value;
      });
  
      dispatch(filterProduct(filters))
      // .then(()=> getJob())
    }
    return (
        <Box>
        <Select placeholder="Select option" onChange={handleFilter}>
              <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
                <option value='FullStack'>FullStack</option>
        </Select>
      </Box>
    )
}

export default Functionality
