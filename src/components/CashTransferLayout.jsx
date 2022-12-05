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
  Icon,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";

import { MdContentCopy, MdOutlineArrowBack } from "react-icons/md";

const CashTransferLayout = () => {
  const [show, setShow] = useState();

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
                alt="Outlet Logo name"
              />
            </Stack>

            <Box p={4}>
              <Text as="b" fontSize="lg">
                Code
              </Text>
              <Text fontSize="lg">123 4567 8901 2345</Text>
            </Box>

            <Box p={4}>
              <HStack spacing="16px">
                <Text as="b" fontSize="lg">
                  Total payment
                </Text>
                <Text fontSize="lg">Rp 100.000,00</Text>
              </HStack>
            </Box>

            <Box p={4}>
              <Text as="b" fontSize="lg">
                Instruction
              </Text>
              <OrderedList>
                <ListItem>Visit the nearest Alfamart</ListItem>
                <ListItem>
                  Specify the payment code and make a payment according to the
                  total payment
                </ListItem>
              </OrderedList>
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

export default CashTransferLayout;
