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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { products } from "../Data/product";

const Homescreen = () => {
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
                <Text
                    background='rgba(0, 0, 0, 0.7)'
                    color='white'
                    padding='10px'
                    borderRadius='5px'
                    textAlign='center'
                    fontSize='lg'
                >
                    {product.description}
                </Text>
            </Box>
            <Divider/>
            <Box margin='1rem' width='90%' height='30rem' >
                <Box  rounded='10px' height='full' padding='3px'>
                    <Heading fontSize='xx-large' mb='2' textAlign='center'>About us</Heading>
                    <Text textAlign='justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consectetur tempora ad atque sapiente dignissimos, laborum hic amet accusamus, et ut error quasi consequuntur harum iure adipisci, soluta ducimus reiciendis!
                    Eligendi sed pariatur labore aperiam a maxime at eos, perferendis deserunt fugit velit voluptas quae, voluptatem ipsum blanditiis voluptatibus, suscipit dolores inventore. Hic consectetur asperiores nam fugit commodi incidunt reiciendis?
                    Eos, quos reprehenderit quae vel voluptas debitis a? Nisi suscipit quae soluta eos veritatis expedita accusamus deserunt ipsam temporibus, dolores iure itaque voluptate reiciendis facilis ab laudantium, nulla nihil. Debitis.
                    Praesentium eos iste numquam? Neque quidem dolor facere vel in totam sequi nemo assumenda! Laudantium similique quaerat doloremque officia, commodi autem mollitia consequuntur animi accusantium, sequi iusto! Deleniti, nostrum tempora.
                    Dolor rerum in error tenetur quae fugiat. Perspiciatis quos fuga fugit dolore distinctio, laudantium sequi dolor? Rerum a delectus cum architecto sit doloribus. Tempore tempora minus nobis veritatis quae ipsam?voluptatem ipsum blanditiis voluptatibus, suscipit dolores inventore. Hic consectetur asperiores nam fugit commodi incidunt reiciendis?
                    Eos, quos reprehenderit quae vel voluptas debitis a? Nisi suscipit quae soluta eos veritatis expedita accusamus deserunt ipsam temporibus, dolores iure itaque voluptate reiciendis facilis ab laudantium, nulla nihil. Debitis.
                    Praesentium eos iste numquam? Neque quidem dolor facere vel in totam sequi nemo assumenda! Laudantium similique quaerat doloremque officia, commodi autem mollitia consequuntur animi accusantium, sequi iusto! Deleniti, nostrum tempora.
                    Dolor rerum in error tenetur quae fugiat. Perspiciatis quos fuga fugit dolore distinctio, laudantium sequi dolor? Rerum voluptatem ipsum blanditiis voluptatibus, suscipit dolores inventore. Hic consectetur asperiores nam fugit commodi incidunt reiciendis?
                    Eos, quos reprehenderit quae vel voluptas debitis a? Nisi suscipit quae soluta eos veritatis expedita accusamus deserunt ipsam temporibus, dolores iure itaque voluptate reiciendis facilis ab laudantium, nulla nihil. Debitis.
                    Praesentium eos iste numquam? Neque quidem dolor facere vel in totam sequi nemo assumenda! Laudantium similique quaerat doloremque officia, commodi autem mollitia consequuntur animi accusantium, sequi iusto! Deleniti, nostrum tempora.
                    Dolor rerum in error tenetur quae fugiat. Perspiciatis quos fuga fugit dolore distinctio, laudantium sequi dolor? Rerum </Text>
                </Box>
            </Box>
            <Divider/>
            <Box margin='1rem' padding='2px' width='100%' textAlign='start' pb='4' mb='4' mt='2'>
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
            </Box>
            <Divider/>
            <Box margin='1rem' padding='3px' width='100%' textAlign='start' pb='4' mb='4'>
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
            </Box>
        </Flex>
    );
};

export default Homescreen;
