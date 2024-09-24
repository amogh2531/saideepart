import {
    Flex,
    Box,
    Image,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Card,
    CardBody,
    Stack,
    Divider,
    Grid, 
    GridItem
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { products } from "../Data/product";
import ImageGallery from "../Components/ImageGallery";

const Homescreen2 = () => {
    const [current, setCurrent] = useState(0);
    const [product, setProduct] = useState(products[0]);

    const categories = ["Fluid Art", "Resin Art", "Wall Painting", "Alcohol Ink Painting", "Abstract Painting"];
    const courses = ["Fluid Art", "Resin Art", "Abstract Painting","Mithai candle"];

    useEffect(() => {
        if (products.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prevCurrent) => {
                const newCurrent = (prevCurrent + 1) % products.length;
                setProduct(products[newCurrent]);
                return newCurrent;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [products]);

    return (
        <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            mt='85px'
            w='100%'
            bgGradient='linear(gray.200 0%, gray.400 25%, gray.500 50%)'
        >
            <Box
                backgroundImage={`url(${product.imageUrl})`}
                backgroundSize='contain'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                margin='1rem'
                rounded='20px'
                borderRadius='10px'
                padding='3px'
                width='80%'
                height='80vh'
                display='flex'
                justifyContent="center"
                alignItems='center'
                flexDir='column'
            >
                {/* <Text
                    background='rgba(0, 0, 0, 0.7)'
                    color='white'
                    padding='10px'
                    borderRadius='5px'
                    textAlign='center'
                    fontSize='lg'
                >
                    {product.description}
                </Text> */}
            </Box>
            <Divider/>
            <Box margin='1rem' width='90%' height={{base:'20rem',lg:'30rem'}} overflow='hidden' >
                <Box  rounded='10px' height='full' padding='3px'>
                    <Heading fontSize='xx-large' mb='2' textAlign='center' p='2'> About </Heading>
                    <Text textAlign='justify'  fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} >
                               
                        My name is <b>Saideep Phadke</b> , and I am a self-taught artist with a deep passion for creating and sharing art. Over the years, I have participated in two online and six offline international art exhibitions across five vibrant cities, including Pune, Delhi, Bhubaneswar, Dehradun, and Goa. These experiences have allowed me to connect with diverse audiences and showcase my work, resulting in the sale of over 200 functional art pieces. Recently, I achieved a significant milestone by selling a painting for ₹20,000, which has further fueled my creative journey.

                        I primarily work with mediums such as acrylics, resin art, and alcohol inks, each offering unique possibilities for expression. My artistic repertoire includes a variety of categories, including Warli painting, Lippan art, paper sculpture, and clay miniatures. Each of these forms allows me to explore different cultural influences and techniques, enriching my overall artistic practice.

                        In addition to my work as an artist, I have recently embarked on a new journey as an art teacher. I am now conducting various online and offline painting workshops, where I share my knowledge and techniques with aspiring artists. It brings me immense joy to guide others in discovering their creativity and helping them build their own artistic skills. Through these workshops, I aim to create a supportive and inspiring environment for all participants, encouraging them to express themselves freely.

                        As I continue to evolve as both an artist and an educator, I remain committed to exploring new mediums and techniques, and to sharing the transformative power of art with my community and beyond. </Text>
                </Box>
            </Box>
            <Divider/>
            {/* <Box margin='1rem' padding='2px' width='100%' textAlign='start' pb='4' mb='4' mt='2'>
                <Heading fontSize='xx-large' textAlign='center' mb='4' pb='4' mt='4'>
                    Art Categories We Deal With..
                </Heading>
                <Flex flexWrap='wrap' mb='5' justifyContent='center' alignItems='center'>
                    {categories.map((item, index) => (
                        <Card key={index} maxW='sm' spacing='5' mr='5' mb='7' backgroundColor='gray.200'>
                            <CardBody>
                                <Image src="/images/img1.jpg" borderRadius='lg' />
                                <Stack>
                                    <Heading fontSize='md' mt='2' textAlign='center' p='2'>{item}</Heading>
                                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam asperiores nemo numquam incidunt corporis ex aspernatur eos, nostrum dolore voluptas. Fugiat maxime, quidem quod commodi ad sequi assumenda porro nostrum!</Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))}
                </Flex>
            </Box> */}
            {/* <Divider/> */}
            {/* <Box margin='1rem' padding='3px' width='100%' textAlign='start' pb='4' mb='4'>
                <Heading fontSize='xx-large' textAlign='center' mb='4' pb='4' mt='4'>
                   Courses we offer..
                </Heading>
                <Flex flexWrap='wrap' mb='5' justifyContent='center' alignItems='center'>
                    {courses.map((item, index) => (
                        <Card key={index} maxW='sm' spacing='3' mr='3' mb='3' backgroundColor='gray.200'>
                            <CardBody>
                                <Image src="/images/img1.jpg" borderRadius='lg' />
                                <Stack>
                                    <Heading fontSize='md' mt='2' textAlign='center' p='2'>{item}</Heading>
                                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam asperiores nemo numquam incidunt corporis ex aspernatur eos, nostrum dolore voluptas. Fugiat maxime, quidem quod commodi ad sequi assumenda porro nostrum!</Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))}
                </Flex>
            </Box> */}
            <Box margin='1rem' padding='2px' width='100%' textAlign='start' pb='4' mb='4' mt='2'>
                <Heading fontSize='xx-large' textAlign='center' fontStyle='italic' mb='4' pb='4' mt='4'>
                    Image Gallery
                </Heading>
                <Flex  mb='5' justifyContent='center' alignItems='center'>
                    <ImageGallery/>
                    
                </Flex>
            </Box>
        </Flex>
    );
};

export default Homescreen2;
