import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import "./blink.css"

const Birthday = () => {
    return ( 
    <Flex
     margin='0 auto'
     mb='10px'
     border='1px solid lightgray'
      width={['90%','45%']}
     height='85vh'
    //  padding='10px'
    justifyContent='center'
     borderRadius='6px'
     bgGradient="url(fatimah.jpg)"
     backgroundRepeat='no-repeat'
     backgroundSize={['90%','90%']}  
     backgroundPosition='center'  
     >
     <VStack>
        <Box width={['85%','50%']}>
        <Image 
         //src='birthday-cake.png'
        // src='fatimah.jpg'
         objectFit={'cover'}
         />
        </Box>
         <Box>Happy Birthday Fatimah</Box>
        <h2>blinking</h2>
        
     </VStack>
    </Flex> 
    );
}
 
export default Birthday;