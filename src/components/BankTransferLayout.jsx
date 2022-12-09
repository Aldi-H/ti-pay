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
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import backend from "../api/backend";
import { MdContentCopy, MdOutlineArrowBack } from "react-icons/md";
import { useParams } from "react-router-dom";
import ModalLayout from "./ModalLayout";

const BankTransferLayout = () => {
  const OverlayModal = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const [transaction, setTransaction] = useState(null);
  const [overlay, setOverlay] = useState(<OverlayModal />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { transactionId, bankName } = useParams();

  const bankTransaction = async () => {
    try {
      const res = await backend.get(
        `transaction/${transactionId}/${bankName.toLowerCase()}`,
      );
      setTransaction(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bankTransaction();
    console.log(bankTransaction());
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
                alt="Bank Logo name"
              />
              <Heading as="h2" size="md">
                {bankName}
              </Heading>
            </Stack>

            <Box p={4}>
              <Text as="b" fontSize="lg">
                Account Number
              </Text>
              <HStack spacing="16px">
                <Text fontSize="lg">
                  {transaction && transaction.virtualAccount}
                </Text>
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
              <Text fontSize="lg">Rp {transaction && transaction.total}</Text>
            </Box>
          </Box>

          <Button
            onClick={() => {
              setOverlay(<OverlayModal />);
              onOpen();
            }}
            colorScheme="green"
            mt={6}
            float="right"
          >
            Confirm Payment
          </Button>
        </Box>
      </Center>
      <ModalLayout
        isOpenModal={isOpen}
        onCloseModal={onClose}
        overlay={overlay}
        bankName={bankName}
        transactionId={transaction && transaction.transactionId}
        transactionTotal={transaction && transaction.total}
      />
    </>
  );
};

export default BankTransferLayout;
