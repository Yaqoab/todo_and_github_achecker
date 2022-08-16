import {Button,Flex, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { addval } from "./slices/addSlice";
import { useHistory } from "react-router-dom";

const AddTodo = () => {
  const [add, setAdd]=useState('');
  const dispatch=useDispatch();
  const navigate=useHistory()

  const handleSubmit=(e)=>{
  e.preventDefault();

  const data={
    id:new Date().getMilliseconds(),
    add
  }
  if(add == ""){
    alert('cannot be empty')
  }else{
    dispatch(addval(data))
    setAdd('')
    navigate.push('/display')
  }

  }
    return ( 
        <Flex 
        as="form"
        justify='center'
        onSubmit={handleSubmit}
        >
            <VStack width={['90%','400px']}>
            <Heading>Todo list</Heading>
            <FormControl>
              <FormLabel>Add Todo</FormLabel>
              <Input
               type='text'
                value={add}
                onChange={(add)=>setAdd(add.target.value)}
                 width='100%' />
            </FormControl>
            <Button colorScheme='twitter' type='submit'>Add</Button>
            </VStack>
        </Flex>

     );
}
 
export default AddTodo;