import {
  Container,
  Image,
  Box,
  VStack,
  Text,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

function Hero() {
  return (
    <SimpleGrid columns={[1, 1, 2]} maxW="full" minH="600px">
      <VStack
        w="full"
        h="full"
        top={0}
        left={0}
        zIndex={10}
        color="black"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        padding={10}
        
      >
        <Heading fontSize={["2xl", "3xl", "4xl"]} pt={["80px", null, 0]} fontWeight="bold">
          A Dedicated Team To Grow Your User Experience
        </Heading>
        <Text fontSize="xl">
        At ShopSavvy, we understand that user experience is at the heart of every successful shopping app. That's why we have a dedicated team committed to enhancing your experience every step of the way. Our passionate experts are here to ensure that your journey on our platform is seamless, intuitive, and truly delightful
        </Text>
        <Button>Get Started</Button>
      </VStack>
      <Box className="w-full">
        <Image src="./3.jpg" h="full" w="full" objectFit="cover" />
      </Box>
    </SimpleGrid>
  );
}

export default Hero;
