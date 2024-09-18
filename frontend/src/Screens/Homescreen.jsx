import { Flex, Box, Icon, Heading, Img } from "@chakra-ui/react";

const Homescreen = () =>{
    return <>
            
        <Flex display='flex' justifyContent='center' align='center' flexWrap='wrap' mt='85px' ml='auto' h='100%' w='100%' mx='1rem' overflowY='scroll'>
            <Box  border='1px solid black' margin='1rem' rounded='10px' padding='3px' width='100%' height='60vh'       textAlign='center' display='flex' justifyContent="center" alignItems='center' flexDir='column'>
                <Box width='full' height='2/3'>Image</Box>
                <Box width='full' height='1/3'>Description</Box>
            </Box>
            <Box margin='1rem' width='100%'  height='20rem' textAlign='center'>
                <Box border='1px solid black' rounded='10px' height='full' padding='3px'>About</Box>
            </Box>

            <Box  margin='1rem'border='1px solid black' rounded='10px' padding='3px' width='100%'  height='20rem' textAlign='center'>Art Categaries we deal with</Box>
            <Box  margin='1rem'border='1px solid black' rounded='10px' padding='3px' width='100%'  height='20rem' textAlign='center'>Courses we offer</Box>
        </Flex>  
   
    </>
}

export default Homescreen;