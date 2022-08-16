import { useSelector} from "react-redux";
import HomeButton from './buttons';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Image,
    TableContainer,
    Heading,
    Tfoot,
    Text
  } from '@chakra-ui/react'

const GithubDisplay = () => {
    const list=useSelector(data=>data.github.value);

    return ( 
        <Box width={['95%','400px']} margin='0 auto'>
        <HomeButton />
        <TableContainer m='0 auto' textAlign='center'>
          <Heading fontSize='20px' mb='10px'>github User info</Heading>
          <Image src={list.avatar_url} borderRadius='full'
  boxSize='150px' margin='0 auto' />
  <Table variant='striped' colorScheme='gray'>
    <Thead>
      <Tr>
        <Th>User</Th>
        <Th>Info</Th>
      </Tr>
    </Thead>
    <Tbody>
     <Tr>
         <Td>Username</Td>
         <Td>{list.login}</Td>
     </Tr>
     <Tr>
         <Td>Full name</Td>
         <Td>{list.name}</Td>
     </Tr>
     <Tr>
         <Td>Created At</Td>
        <Td>{list.created_at}</Td>
     </Tr>
     <Tr>
         <Td>Followers</Td>
         <Td>{list.followers}</Td>
     </Tr>
     <Tr>
         <Td>Following</Td>
         <Td>{list.following}</Td>
     </Tr>

    </Tbody>
    <Tfoot textAlign='center'>
        <Text m='15px'>thanks for checking</Text>
    </Tfoot>
  </Table>
</TableContainer>
        
      </Box>
     );
}
 
export default GithubDisplay;