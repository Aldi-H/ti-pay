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

const ModalLayout = () => {
  const OverlayModal = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayModal />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayModal />);
          onOpen();
        }}
      >
        Test Modal
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
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
                    <Td>1 oct 2022, 10:33 AM</Td>
                  </Tr>
                  <Tr>
                    <Td>Transaction Id</Td>
                    <Td>7389135471639</Td>
                  </Tr>
                  <Tr>
                    <Td>Bank</Td>
                    <Td>BRI</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Payment</Td>
                    <Td>Rp. 200.000</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLayout;
