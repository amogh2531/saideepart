import { Flex, Link, Box, Heading, Icon, Tooltip, Image  } from "@chakra-ui/react";
import { IoSearch ,IoBagOutline} from "react-icons/io5";
import { FaRegUser,FaRegHeart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    
  return (
    <>
        <Flex as='header'
			align='center'
			justifyContent='space-between'
			wrap='wrap'
			py='3'
			px='5'
			w='100%'
			top='0'
			pos='fixed'
            bgColor='white'
			zIndex='20'
            boxShadow='md'
            borderColor="gray.200"
             >

            <Box display='flex' justifyContent='space-evenly' alignItems='center' >
            {/*Logo*/}
            <Box display='flex'>
                <Link as={RouterLink} to="/" _hover={{textDecor: 'none', color: 'gray.500'}} mr='2'>
                    <Image boxSize='50px' rounded='full' objectFit='cover' src="./public/images/logo.png" alt="logo" />
                </Link>
            </Box>

            <Box display='flex' justifyContent='center' alignItems='center' m='2' px='2'>
            <Heading as='h6' fontSize='large' fontFamily='Mukta' mr='5' mt='2' color='black' fontWeight='bold'>
                <Link  as={RouterLink} to="/" _hover={{textDecor: 'none', color: 'gray.500'}}>
                    Home
                </Link>
            </Heading>

            <Heading as='h6' fontSize='large' fontFamily='Mukta' mr='5'mt='2' color='black' fontWeight='bold'>
                <Link  as={RouterLink} to="/categaries" _hover={{textDecor: 'none', color: 'gray.500'}}>
                    Categaries
                </Link>
            </Heading>

            <Heading as='h6' fontSize='large' fontFamily='Mukta' mr='5'mt='2' color='black' fontWeight='bold'>
                <Link  as={RouterLink} to="/courses" _hover={{textDecor: 'none', color: 'gray.500'}}>
                    Courses
                </Link>
            </Heading>
            </Box>
            </Box>


            <Box display='flex' justifyContent='space-between' alignItems='center'  >

                {/* <Tooltip hasArrow label="Search" aria-label='A tooltip' bg='black' borderRadius='5px' >
                    <Link  fontWeight='800' fontSize='x-large'  textDecoration='none' _hover={{textDecor: 'none', color: 'gray.500'}}>
                    <Icon as={IoSearch} mr='3' ml='2'></Icon>
                    </Link>
                </Tooltip> */}

                <Tooltip hasArrow label="Account" aria-label='A tooltip' bg='black' borderRadius='5px'  >
                    <Link  as={RouterLink} to="/signup" fontWeight='800' fontSize='x-large' textDecoration='none' _hover={{textDecor: 'none', color: 'gray.500'}}>
                    <Icon as={FaRegUser} mr='3' ml='2'></Icon>
                    </Link>
                </Tooltip>

                {/* <Tooltip hasArrow label="Wishlist" aria-label='A tooltip' bg='black' borderRadius='5px' >
                    <Link as={RouterLink} to="/wishlist" fontWeight='900' fontSize='x-large'  _hover={{textDecor: 'none', color: 'gray.500'}}>
                    <Icon as={FaRegHeart} mr='3' ml='2'></Icon>
                    </Link>
                </Tooltip>
            
                <Tooltip  hasArrow label="Cart" aria-label='A tooltip' bg='black' borderRadius='5px' >
                    <Link  as={RouterLink} to="/cart" fontWeight='800' fontSize='x-large'  textDecoration='none' _hover={{textDecor: 'none', color: 'gray.500'}}>
                    <Icon as={IoBagOutline} mr='3' ml='2' ></Icon>
                    </Link>
                </Tooltip> */}

            </Box>


        </Flex>
    
    </>
  )
}
