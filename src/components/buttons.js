import { Box, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
    const navigate=useHistory()
    return ( 
        <Box position='relative' top='-48px'>
        <Button bg='#2a2b2eeb' color='#fff' onClick={()=>{
         navigate.push('/')
        }}>Home</Button>
        </Box>
     );
}
 
export default HomeButton;