import { Flex, Button, Heading, Image, Text, Divider} from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { listCourseDetails } from "../actions/CoursesActions";


 const CoursePage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const url = "https://forms.gle/KYAMtDK1RtD8cFxi7"

    const course = useSelector((state) => state.courseDetails.course );
    
    

    useEffect(() =>{
        if (id) {
            dispatch(listCourseDetails(parseInt(id)))
        }

    },[dispatch, id])

    
    const handleClick = () =>{
        console.log("added to cart")
        window.location.href = url;
    }
    
  return (
    <Flex mt='20' flexDir='column' justifyContent='center' alignItems='center' p='2'  bgGradient='linear(gray.200 0%, gray.400 25%, gray.500 50%)'  >
        <Button alignSelf='start' mb='2' m='2' onClick={()=> navigate(-1)}>Go Back</Button>
            {course ? <Flex justifyContent='center' alignItems='center' flexDir='column'>
            <Heading as='h2' mb='2' p='2'>{course.name}</Heading>
            <Divider/>
            <Image src="" alt={course.name} p='2' m='2'></Image>
            <Text m='2' p='2' w='80%' fontSize='xl' textAlign='justify'>{course.description}</Text>
            <Text m='2' p='2' fontSize='xl'><b>Course Format: </b>{course.format}</Text>
            <Text m='2' p='2' fontSize='xl'><b>Course Duration: </b>{course.duration}</Text>
            <Text m='2' p='2' fontSize='xl'><b>Materials Included: </b>{course.materialsIncluded}</Text>
            <Text m='2' p='2' fontSize='xl'><b>Price: </b>{course.price}</Text>
            <Button m='2' p='3' bgColor='blue.400' fontWeight='700' onClick={handleClick}>Enroll now..</Button>
        </Flex>
                : null }
    </Flex>
  )
}


export default CoursePage