import React from 'react';
import { Box, Heading, Image, Text,  Flex, Divider} from '@chakra-ui/react';
import {categories} from '../Data/categories'; 

const Categories = () => {

    console.log(categories)
    return (
        <Flex textAlign="center" ml='auto' mt="20" pt='3' flexDir='column' w='100%'bgGradient='linear(gray.200 0%, gray.400 25%, gray.500 50%)' justifyContent='center' alignItems='center' >
            <Heading as="h2" size="xl" mb="6" mt='2'>
                Art Categories
            </Heading>
            <Divider/>
           <Flex  flexDir='column' flexWrap='nowrap' justifyContent='center' alignItems='center'>
                {categories.map((category) => (
                    <Flex flexDir='column' justifyContent='center' alignItems='center' w="80%" key={category.id}   overflow="hidden"  mb='5'>
                        <Heading as="h3" size="md" mb="2" fontSize='3xl' fontWeight='900' >
                                {category.name} 
                        </Heading>
                        
                        <Flex flexDir='column' justifyContent='center' alignItems='center' p="4">
                            <Image src={category.imageUrl} alt={category.name} height='300' objectFit="contain" pl='3' borderRadius='0 15px 0 30px' />
                                <Text fontSize="lg" textAlign='justify' color="gray.700" mb='2' p='2' mt='2'>
                                    {category.description}
                                </Text>
                        </Flex>
                        
                        <Flex mt='3' mb='3'>
                            <Heading as='h6' fontSize='xl'>Work Samples:</Heading>
                            
                        </Flex>
                        <Divider/>
                    </Flex>
                   
                ))}
           </Flex>
        </Flex>
    );
};

export default Categories;
