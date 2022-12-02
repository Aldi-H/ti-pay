import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";

import { MdContentCopy, MdOutlineArrowBack } from "react-icons/md";

const BankTransferLayout = () => {
  return (
    <>
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
            <Icon as={MdOutlineArrowBack} boxSize={8} mb={4} />
            <Stack direction="row" alignItems="center" p={4}>
              <Image
                boxSize="50px"
                objectFit="cover"
                src="https://via.placeholder.com/50"
                alt="Bank Logo name"
              />
              <Heading as="h2" size="md">
                Bank Name
              </Heading>
            </Stack>

            <Box p={4}>
              <Text as="b" fontSize="lg">
                Account Number
              </Text>
              <HStack spacing="16px">
                <Text fontSize="lg">123 4567 8901 2345</Text>
                <Button
                  leftIcon={<MdContentCopy />}
                  size="sm"
                  colorScheme="teal"
                >
                  Copy
                </Button>
              </HStack>
            </Box>

            <Box p={4}>
              <Text as="b" fontSize="lg">
                Total payment
              </Text>
              <Text fontSize="lg">Rp 100.000,00</Text>
            </Box>
          </Box>

          <Button colorScheme="green" mt={6} float="right">
            Confirm Payment
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default BankTransferLayout;
