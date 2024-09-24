import { Flex, Image, Box } from '@chakra-ui/react';

const ImageGallery = () => {
  return (
    <Flex
      wrap="wrap" // Allows items to wrap into a new line
      justify="center" // Centers items horizontally
      align="center" // Centers items vertically
      p={4} // Padding around the gallery
      gap={4} // Space between images
    >
      {/* Image Items */}
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/m1.jpg" alt="Artwork 1" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/ac1.jpg" alt="Artwork 2" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p1.jpg" alt="Artwork 3" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p2.jpg" alt="Artwork 4" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p3.jpg" alt="Artwork 5" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p4.jpg" alt="Artwork 6" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p5.jpg" alt="Artwork 7" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p6.jpg" alt="Artwork 8" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/p7.jpg" alt="Artwork 9" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/r1.jpg" alt="Artwork 10" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/r2.jpg" alt="Artwork 11" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/r3.jpg" alt="Artwork 12" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/r4.jpg" alt="Artwork 13" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/r5.jpg" alt="Artwork 14" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/r6.jpg" alt="Artwork 15" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/rg1.jpg" alt="Artwork 16" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/rg2.jpg" alt="Artwork 17" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/wall1.jpg" alt="Artwork 18" objectFit="cover" borderRadius="md" />
      </Box>
      <Box width={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }} mb={4}>
        <Image src="/images/wall2.jpg" alt="Artwork 19" objectFit="cover" borderRadius="md" />
      </Box>
    </Flex>
  );
};

export default ImageGallery;
