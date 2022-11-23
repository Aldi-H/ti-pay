import {
  Box,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Center>
      <Box p={8} w="5xl">
        <Box
          boxShadow={useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.9)",
          )}
          bg={useColorModeValue("gray.200", "gray.800")}
          p={8}
          overflow="hidden"
          rounded="md"
        >
          <Heading align="center" p={3}>
            Payment Summary
          </Heading>
          <Box p={3}>
            <Text fontWeight="bold">
              Vendor Name : {console.log("FROM API")}
            </Text>
            <Text fontWeight="bold">Amount : {console.log("FROM API")}</Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Hero;
