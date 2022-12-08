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
import { useEffect, useState } from "react";

import { MdOutlineArrowBack } from "react-icons/md";
import { useParams } from "react-router-dom";
import backend from "../api/backend";

const CashTransferLayout = () => {
  const [transaction, setTransaction] = useState(null);
  const { transactionId, cashName } = useParams();

  const cashTransaction = async () => {
    try {
      const res = await backend.get(
        `transaction/${transactionId}/${cashName.toLowerCase()}`,
      );
      setTransaction(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cashTransaction();
  }, []);

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
              <Text fontSize="lg">
                {transaction && transaction.virtualAccount}
              </Text>
            </Box>

            <Box p={4}>
              <HStack spacing="16px">
                <Text as="b" fontSize="lg">
                  Total payment
                </Text>
                <Text fontSize="lg">Rp {transaction && transaction.total}</Text>
              </HStack>
            </Box>

            <Box p={4}>
              <Text as="b" fontSize="lg">
                Instruction
              </Text>
              <OrderedList>
                <ListItem>Visit the nearest {cashName}</ListItem>
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
