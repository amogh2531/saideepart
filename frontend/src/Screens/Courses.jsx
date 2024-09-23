
import { Card, CardBody, Flex, Heading, Image, Stack, Text, Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


 import courses from "../Data/courses"


 const Courses = () => {
  const navigate = useNavigate()

  return (
    <Flex mt='20' mx='2' p='2'justifyContent='center' alignItems='center' flexDir='column'>
        <Heading textAlign='center' mb='2' p='2'>Courses we offer</Heading>
        <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
              {courses.map((course) => (
                  <Card w='80' h='650' p='3' m='3'bgGradient="linear(to-t, whiteAlpha.500, gray.200 )">
                    <CardBody>
                      <Image src="/images/img1.jpg" alt={course.name}></Image>
                      <Stack>
                        <Heading as='h6' fontSize='xl'mb='2'>{course.name}</Heading>
                        <Text overflow='hidden' h='150' >{course.description}</Text>
                        <Text border='1px solid blue' rounded='10px' textAlign='center' p='1' textColor='blue'>Price:{course.price}</Text>
                        <Button onClick={() => navigate(`/courses/${course.id}`)} mt='1'>Get details..</Button>
                      </Stack>
                    </CardBody>
                  </Card>
              ))}
        </Flex>
    </Flex>
  )
}

export default Courses
