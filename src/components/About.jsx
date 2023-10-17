import {
  Container,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function About() {
  return (
    <Container maxW="full" id="about">
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={[1, 1, 1]} spacing={10}>
          <Box w="full" h="full" rounded="lg" overflow="hidden">
            <Image src="./2.jpg" w="full" h="full" objectFit="cover" />
          </Box>
          <VStack gap={6} alignItems="flex-start">
            <Box>
              <Heading color="primary.500">ABOUT US</Heading>
              <Text fontSize="lg">
              We're ShopSavvy, your shopping companion. Our goal is simple: to help you find the best deals and products effortlessly. Join us and experience smarter shopping today
              </Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" color="primary.500">
                01
              </Heading>
              <Text>
              Simplifying Shopping: ShopSavvy is your go-to shopping companion, making it easy to find the best deals and products with minimal effort.
              </Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" color="primary.500">
                02
              </Heading>
              <Text>
              Smarter Shopping, Effortlessly: We're here to streamline your shopping experience, so you can shop smarter, save time, and enjoy the thrill of discovering great finds.
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default About;
