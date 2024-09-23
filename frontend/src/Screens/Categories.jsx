import React from 'react';
import { Box, Heading, Image, Text,  Flex, Divider} from '@chakra-ui/react';
import {categories} from '../Data/categories'; 

const Categories = () => {

    console.log(categories)
    return (
        <Flex textAlign="center" ml='auto' mt="20" pt='2' flexDir='column' w='100%' justifyContent='center' alignItems='center' >
            <Heading as="h2" size="xl" mb="6">
                Art Categories
            </Heading>
           <Flex  flexDir='column' flexWrap='nowrap' justifyContent='center' alignItems='center'>
                {categories.map((category) => (
                    <Flex flexDir='column' justifyContent='center' alignItems='center' w="80%" key={category.id}   overflow="hidden"  mb='5'>
                        <Heading as="h3" size="md" mb="2" fontSize='3xl'>
                                {category.name}
                        </Heading>
                        
                        <Flex flexDir='column' justifyContent='center' alignItems='center' p="4">
                            <Image src={category.imageUrl} alt={category.name} height='300' objectFit="contain" pl='3' rounded='10px'/>
                                <Text fontSize="lg" textAlign='justify' color="gray.700" mb='2'>
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
