import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";

function Testimonial() {
  return (
    <Container maxW="full" bg="gray.50">
      <Container maxW="container.lg" py={20}>
        <VStack
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          gap={10}
        >
          <Heading textAlign="center" fontWeight="bold" color="primary.500">
            What our Clients Say
          </Heading>
          <Box>
            <Text fontSize="xl" color="gray.600">
            ShopSavvy is my secret weapon for smart shopping. The app's user-friendly design and personalized recommendations have made my shopping experience a breeze. Plus, their 24/7 support team is incredibly responsive and helpful. ShopSavvy truly sets the bar high for shopping apps!
            </Text>
          </Box>
          <VStack>
            <Avatar src="./5.jpg" size="2xl" />
            <Heading mt={2} textAlign="center">
              Tony Stark
            </Heading>
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
}

export default Testimonial;
