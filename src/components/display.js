import { useSelector, useDispatch } from "react-redux";
import { deleteval, edit, editVal } from "./slices/addSlice";
import HomeButton from './buttons';
import {useHistory } from "react-router-dom";
//import { Box, Button } from "@chakra-ui/react";

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Tfoot,
  Button,
} from '@chakra-ui/react'
//import { useEffect, useState } from "react";

const DisplayTodo = () => {
    const list=useSelector(data=>data.addTodo.value);
    //const looo=useSelector(dat=>dat.addTodo.val);
    const navigate=useHistory();
  const dispatch=useDispatch();

     console.log(list)
     
     const addMore=()=>{
    navigate.push('/todo')
     }

  const renderList=list.length > 0 && list.map(item=>{
    return <Tr key={item.id}>


        <Td key={item.id}>{item.add}</Td> 
     <Td><Button bg="red.500" color='#fff' p='0' onClick={()=>{
      dispatch(deleteval(item))
  }}>del</Button></Td>
  <Td><Button bg="blue.500" color='#fff' p='0' onClick={()=>{
     let prom=prompt(`edit ${item.add}`, `${item.add}`);
     if(prom ===""){
       alert("can't left it empty")
     }else{
     dispatch(editVal(prom))
      dispatch(edit(item))
     }
   }}>edit</Button></Td>
    
</Tr>
 });
    return ( 
      <Box width='95%' margin='0 auto'>
        <HomeButton />
        <TableContainer m='0 auto'>
          <Heading fontSize='20px'>Todo list</Heading>
  <Table variant='striped' colorScheme='gray'>
    <Thead>
      <Tr>
        <Th>Value</Th>
        <Th>delelte</Th>
        <Th>Edit</Th>
      </Tr>
    </Thead>
    <Tbody>
      {renderList}      
    </Tbody>
    <Tfoot>
        <Button mt='10px' colorScheme="twitter" onClick={addMore}>Add again</Button>
    </Tfoot>
  </Table>
</TableContainer>
        
      </Box>
     );
}
 
export default DisplayTodo;