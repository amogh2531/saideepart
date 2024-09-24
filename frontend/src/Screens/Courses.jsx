import { Card, CardBody, Flex, Heading, Image, Stack, Text, Button, Divider} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

import Loader from "../Components/Loader";
import Message from "../Components/Message";

import { listCourses } from "../actions/CoursesActions";


 const Courses = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {loading, error, courses}  = useSelector((state) => state.courses || [] )
  console.log(courses)


      useEffect(() => {
        dispatch(listCourses())
    },[dispatch])

  return (
  <Flex mt='20'  p='2'justifyContent='center' alignItems='center' flexDir='column'  bgGradient='linear(gray.200 0%, gray.400 25%, gray.500 50%)'>
        <Heading textAlign='center' mb='2' p='2'>Courses we offer</Heading>
          <Divider/>
          { loading ? (
             <Loader/> )  
             : error ? ( 
            <Message type='error'>{error}</Message>) 
            : courses ? ( 
               <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
               { courses.map((course) => (
                    <Card w='80' h='700' p='3' m='3'bgGradient="linear(to-t, whiteAlpha.500, gray.200 )">
                      <CardBody>
                        <Image src={course.imageUrl} alt={course.name} borderRadius='10px'></Image>
                        <Stack>
                          <Heading as='h6' fontSize='xl'mb='2' mt='2' p='2'>{course.name}</Heading>
                          <Text overflow='hidden' h='150' >{course.description}</Text>
                          <Text border='1px solid blue' rounded='10px' textAlign='center' p='1' textColor='blue'>Price:{course.price}</Text>
                          <Button onClick={() => navigate(`/courses/${course.id}`)} mt='1'>Get details..</Button>
                        </Stack>
                      </CardBody>
                    </Card>
                   ))}
             </Flex> ) : null }
  </Flex>

  )
}

export default Courses
