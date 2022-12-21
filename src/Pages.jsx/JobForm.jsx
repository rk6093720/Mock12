import React, { useReducer } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
  Checkbox,
  Link,
  InputRightElement,
  Stack,
  Image,
  Button,
  Heading,
  Text,
  HStack,
  useColorModeValue,

} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getJob, getJobfrom } from "../Redux/action";
// import { register } from "../Redux/Auth/action";

const initialState = {
   company: "",
    city: "",
     location: "",
    role: "",
    level:"",
    position:"",
    langauage:"",
    contract:"",
    date:"",
 

};

const reducer = (state, action) => {
  switch (action.type) {
    case "company":
      return { ...state,company: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "location":
      return { ...state, location: action.payload };
    case "role":
      return { ...state, role: action.payload };
      case "level":
      return { ...state, level: action.payload };
      case "position":
      return { ...state, position: action.payload };
      case "langauage":
      return { ...state, langauage: action.payload };
      case "contract":
      return { ...state, contract: action.payload };
      case "date":
      return { ...state, date: action.payload };


    default:
      return state;
  }
};

const JobForm = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const coming = location?.pathname || "/joblist";


  
  console.log("jobform",coming)

  const signupHandle = () => {
     alert("job Created Successfully")
    dispatch(getJobfrom(state))
    .then(()=> dispatch(getJob()))

    .then(()=>{
         navigate("/joblist")
    })
      
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      fontSize={"4xl"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} fontSize={"4xl"}  maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
          Welcome!
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
           Masai Job App.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            
              <Box>
                <FormControl id="company" isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input 
                    type="text"
                    value={state.company}
                    placeholder="your Company Name"
                    onChange={(e) =>
                      setState({ type: "company", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="City" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    value={state.city}
                    placeholder="Your City"
                    onChange={(e) =>
                      setState({ type: "city", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
           
            <FormControl id="location" isRequired>
              <FormLabel>Location </FormLabel>
              <Input
                type="text"
                placeholder="Your Location"
                value={state.location}
                onChange={(e) =>
                  setState({ type: "location", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="role" isRequired>
              <FormLabel>Role</FormLabel>
              <Select placeholder='Select option' value={state.role} 
               onChange={(e)=>
                setState({ type:"role", payload:e.target.value})
            }
               >
                <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
                <option value='FullStack'>FullStack</option>
                </Select>
        
            </FormControl>
            <FormControl id="level" isRequired>
              <FormLabel>Level</FormLabel>
              <Select placeholder='Select option' value={state.level} 
               onChange={(e)=>
                setState({ type:"level", payload:e.target.value})
            }
               >
                <option value='Junior'>Junior</option>
                <option value='Senior'>Senior</option>
               
                </Select>
        
            </FormControl>
            <FormControl id="position" isRequired>
              <FormLabel>Position</FormLabel>
              <Select placeholder='Select option' value={state.position} 
               onChange={(e)=>
                setState({ type:"position", payload:e.target.value})
            }
               >
                <option value='Backend Developer'>Backend Developer</option>
                <option value='Junior Frontend Developer'>Junior Frontend Developer</option>
                <option value='C'> C</option>
                <option value='C++'> C++</option>
                </Select>
        
            </FormControl>
            <FormControl id="langauage" isRequired>
              <FormLabel>Langauage</FormLabel>
              <Select placeholder='Select option' value={state.langauage} 
               onChange={(e)=>
                setState({ type:"langauage", payload:e.target.value})
            }
               >
                <option value='Javascript'>Javascript</option>
                <option value='Java'>Java</option>
                <option value='Junior Backend Developer'> C</option>
                <option value='FSD '> FSD </option>
                </Select>
        
            </FormControl>
            <FormControl id="contract" isRequired>
              <FormLabel>Contract</FormLabel>
              <Select placeholder='Select option' value={state.contract} 
               onChange={(e)=>
                setState({ type:"contract", payload:e.target.value})
            }
               >
                <option value='full time'>full time</option>
                <option value='part time'>part time</option>
              
                </Select>
        
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
               <Input
               type="date"
               placeholder="date"
               value={state.date}
               onChange={(e)=>
                  setState({ type:"date" , payload:e.target.value})
               }
               />
        
            </FormControl>
             
        
              
        
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#e51075"}
                                color={"white"}
                                _hover={{
                                  bg: "#e51075",
                }}
                onClick={signupHandle}
              >
              CREATE ACCOUNT
               </Button>
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default JobForm;
