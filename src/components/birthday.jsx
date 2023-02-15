import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./blink.css"

const Birthday = () => {
const [text, setText]=useState('');
const [fulltext]=useState("May you recieve the greatest of joy and everlasting bliss. You are gift yourself and deserve the best of everything. Happy birthday ")
const [count, setCount]=useState(0);

useEffect(()=>{
    if(count < fulltext.length){
        setTimeout(() => {
            setText(text + fulltext[count]);
            setCount(count + 1)
        }, 50);
    }
},[text,count,fulltext]);

const musicUrl=new Audio('happyBirthday.mp3')
const music=()=>{
    musicUrl.play()
}

    return ( 
    <Flex
    className='alert-blink'
     margin='0 auto'
     mb='10px'
     top='0px'
     border='4px solid lightgray'
      width={['98%','45%']}
     height='85vh'
    justifyContent='center'
     borderRadius='6px'
     bgGradient="url(fatimah.jpg)"
     backgroundRepeat='no-repeat'
     backgroundSize='100%'  
     backgroundPosition='center' 
     position='relative' 
     onClick={music}
     >
     <VStack>
        <Box padding='10px' bg='rgba(80, 89, 106, 0.5)' margin='10px' borderRadius='6px'>
        <Heading
        className='head'
        size='md'
        >Happy Birthday Fatimah </Heading>
        </Box>
        <Text 
        color='rgb(207, 207, 233)' 
        bg='rgba(80, 89, 106, 0.5)' 
        padding='5px'
        fontWeight='40px'
        textAlign='center'>{text}</Text>
         <Text
         color='rgb(207, 207, 233)' 
        bg='rgba(80, 89, 106, 0.8)' 
        padding='5px'
        fontWeight='40px'
        position='absolute'
         bottom='120px'
         borderRadius='6px'
        >click to play music</Text>
         <Image 
         src='birthday-cake.png'
         position='absolute'
         bottom='0px'
         width='130px'
         objectFit={'cover'}
         />
         
     </VStack>
     
    </Flex> 
    );
}
 
export default Birthday;