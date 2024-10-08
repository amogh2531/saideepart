import { Flex, Box, Heading, Link, Icon, Text} from '@chakra-ui/react'
import { FaInstagram, FaFacebookSquare, FaYoutube  } from "react-icons/fa";
import {Link as RouterLink} from "react-router-dom"
import React from 'react'

export default function Footer() {
  return (
    <Flex mb='0' bottom='0' pt='2'  flexDir='column' justifyContent='space-between' alignItems='center' ml='auto' h='200' w='100%' textColor='white' bgColor='gray.700'>

      <Flex justifyContent='space-between' flexDir='row' w='100%' m='2'> 
            <Box ml='3'>
              <Text fontSize='lg' color='blackAlpha.900'>Quick Links</Text>
               <Flex flexDir='column' justifyContent='center' alignItems='center'>
               <Link as={RouterLink} fontSize='sm' to='/'>Home</Link>
               <Link as={RouterLink} fontSize='sm' to='/categaries'>Categories</Link>
               <Link  as={RouterLink} fontSize='sm' to='/courses'>Courses</Link>
               </Flex>
            </Box>
            
            <Box mr='3'  >
              <Link as={RouterLink} isExternal color='black' textDecoration='none' mr='3' to='https://www.instagram.com/saideepart?igsh=MWU3Z2R2NzRyZWVwbw==' >
              <Icon color='black' fontWeight='bold' fontSize='2xl' textColor='white'  _hover={{color:"gray.900"}}><FaInstagram/></Icon>
              </Link>
              {/* <Link as={RouterLink} color='black'  textDecoration='none' mr='3' isExternal >
              <Icon color='black' fontSize='2xl'  textColor='white'  _hover={{color:"gray.900"}}><FaFacebookSquare/></Icon>
              </Link> */}
              <Link as={RouterLink} color='black' textDecoration='none' mr='3' to='http://www.youtube.com/@saideepart6403' isExternal >
              <Icon color='black' fontSize='2xl' textColor='white'  _hover={{color:"gray.900"}}><FaYoutube /></Icon>
              </Link>
            </Box>
      </Flex>

         
        
     

      <Flex alignItems='center' justifyContent='center'>
          <Heading as='h6' fontSize='sm' fontStyle='italic' pb='3'>
            @SaideepArt All Rights Reversed. Designed in 2024 by Amogh
          </Heading>
      </Flex>
      
    </Flex>
  )
}
