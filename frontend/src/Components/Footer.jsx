import { Flex, Box, Heading, Link, Icon, Input} from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { FaInstagram, FaFacebookSquare, FaYoutube  } from "react-icons/fa";
import React from 'react'

export default function Footer() {
  return (
    <Flex mb='0' bottom='0' pt='2' display='block' justifyContent='center' alignItems='center' ml='auto' h='200' w='100%' textColor='white' bgColor='gray.900'>

      <Flex mb='5' justifyContent='space-between' mt='2' alignItems='center'>
        <Box display='flex' ml='5'>
        <Input variant='filled' placeholder='Write to us !' textAlign='center' bgColor='gray.200' />
        </Box>
        <Box display='flex' mr='3' alignItems='center' justifyContent='center'  >
          <Link color='black' textDecoration='none' mr='3' >
          <Icon color='black' fontWeight='bold' fontSize='2xl' textColor='white'  _hover={{color:"gray.900"}}><FaInstagram/></Icon>
          </Link>
          <Link color='black'  textDecoration='none' mr='3' >
          <Icon color='black' fontSize='2xl'  textColor='white'  _hover={{color:"gray.900"}}><FaFacebookSquare/></Icon>
          </Link>
          <Link color='black' textDecoration='none' mr='3' >
          <Icon color='black' fontSize='2xl' textColor='white'  _hover={{color:"gray.900"}}><FaYoutube /></Icon>
          </Link>
        </Box>
      </Flex>

      <Flex alignItems='center' justifyContent='center'>
      <Heading as='h6' fontSize='sm' fontStyle='italic'>
        @SaideepArt All Rights Reversed. Designed in 2024 by Amogh
      </Heading>
      </Flex>
      
    </Flex>
  )
}
