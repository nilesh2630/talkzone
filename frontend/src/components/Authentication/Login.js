
import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, useToast, border } from '@chakra-ui/react'

import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const toast = useToast()
  const history = useHistory()
  const submitHandler = async () => {
    setLoading(true)
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      });
      setLoading(false)
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },

      };
      const { data } = await axios.post("https://talkzone-521a.onrender.com/api/user/login", { email, password }, config);
     localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false)
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      });
      
      navigate('/chats');
     
    } catch (err) {
      toast({
        title: "Invalid Email or Password",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      });
    }

  }
    const handleClick = () => {
      setShow(!show)
    }
    return (
      <VStack spacing='5px'>

        <FormControl id="email" isRequired>
          <FormLabel  >Email</FormLabel>
          <Input value={email} placeholder='Enter Your email id'
            onChange={(e) => { setEmail(e.target.value) }} />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel  >password</FormLabel>
          <InputGroup>
            <Input value={password} type={show ? "text" : "password"} placeholder='Enter Password'
              onChange={(e) => { setPassword(e.target.value) }} />
            <InputRightElement>
              <Button h="1.75rem" size="sm" p={1.5} onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>


        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}>
          Login
        </Button>
        <Button
          colorScheme="red"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={() => {
            setEmail("guest@example.com")
            setPassword("123456")
          }}>
          Get Guest User Credentials
        </Button>
      </VStack>
    )
  }

export default Login