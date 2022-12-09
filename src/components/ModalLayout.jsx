import {
  Button,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
} from "@chakra-ui/react";

import { useState } from "react";

const ModalLayout = ({
  isOpenModal,
  onCloseModal,
  overlay,
  transactionTotal,
  transactionId,
  bankName,
}) => {
  return (
    <>
      <Modal isCentered isOpen={isOpenModal} onClose={onCloseModal} size="xl">
        {overlay}
        <ModalContent p={8}>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h2" size="lg">
              Payment Successful
            </Heading>
            <TableContainer mt={8}>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Transaction Date</Td>
                    <Td>{new Date().toDateString()}</Td>
                  </Tr>
                  <Tr>
                    <Td>Transaction Id</Td>
                    <Td>{transactionId}</Td>
                  </Tr>
                  <Tr>
                    <Td>Bank</Td>
                    <Td>{bankName}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Payment</Td>
                    <Td>Rp {transactionTotal}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLayout;
