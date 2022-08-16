import { Button, Box, Text, Flex, HStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    const navigate=useHistory();
    return ( 
        <Box margin={'0 auto'} textAlign='center'>
            <Text>Welcome to my Todo and github checker
                which i make with react and redux;
                I want send my shout out to  <b>techathon community</b>
            </Text>
        
        <Flex justify='center' mt='10px'>
            
            <HStack>
                
                <Button bg='#325291' color='#fff' onClick={()=>{
                    navigate.push('/todo')
                }}>Todo list</Button>
                <Button bg='#1d7478' color='#fff' onClick={()=>{
                    navigate.push('/github')
                }}>Check your github</Button>
            </HStack>
        </Flex>
        </Box>
     );
}
 
export default Home;