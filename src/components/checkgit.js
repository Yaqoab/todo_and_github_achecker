import {Button, Flex, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
// import {useState} from 'react';
import {useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import  axios  from "axios";
import { githubdata } from "./slices/githubSlice";
// import { useParams } from "react-router-dom";

const CheckGithub=()=>{
    const [user, setUser]=useState('');
    const [isLoading, setIsLoading]=useState(false)
    const dispatch=useDispatch();
    const navigate=useHistory();
    const url=`https://api.github.com/users/${user}`;

    const handleSubmit=(e)=>{
    e.preventDefault();
    setIsLoading(true)
    if(user ===""){
    alert("can't leave this empty");
    }else{

        return(
            axios.get(url)
            .then((response)=>{
                dispatch(githubdata(response.data))
                navigate.push('/displayuser')
            })
            .catch((error)=>{
                setIsLoading(false)
             if (error.response.status ===404) {
                alert('not found this user')
             }else if(error.request){
                alert('Error'+error.message)
             }else{
                alert('Error'+error.message)
             }
            })
        ) 
    }
    
    }
    return(
        <Flex 
        as="form"
        justify='center'
        onSubmit={handleSubmit}
        >
            <VStack width={['90%','400px']}>
            <FormControl>
              <FormLabel>Github username</FormLabel>
              <Input
               type='text'
                value={user}
                onChange={(add)=>setUser(add.target.value)}
                 width='100%' />
                
            </FormControl>
            {!isLoading && <Button colorScheme='twitter' type='submit'>Check</Button>}
            {isLoading && <Button  colorScheme="twitter" mt="10px" type={'submit'} disabled>...isloading</Button>}
            </VStack>
        </Flex>

    );
}

export default CheckGithub