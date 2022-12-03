import {
  Box,
  Button,
  Center,
  useColorModeValue,
  Icon,
  Image,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { MdOutlineArrowBack, MdOutlineCreditCard } from "react-icons/md";

const CreditTransferLayout = () => {
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

            <Image
              boxSize="50px"
              objectFit="cover"
              src="https://via.placeholder.com/50"
              alt="Card Type"
            />

            <Box p={4}>
              <form>
                <Grid gap={4} templateColumns="repeat(2, 1fr)">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Card Number</FormLabel>
                      <InputGroup>
                        <InputRightElement
                          pointerEvents="none"
                          children={
                            <Icon as={MdOutlineCreditCard} w="5" h="5" />
                          }
                        />
                        <Input bg="white" placeholder="Card Number" />
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={4} colStart={2} colEnd={1}>
                    <FormControl>
                      <FormLabel>Cardholder Name</FormLabel>
                      <Input bg="white" placeholder="Card Name" />
                    </FormControl>
                  </GridItem>
                  <GridItem colStart={2} colEnd={3}>
                    <FormControl>
                      <FormLabel>Exp. Date</FormLabel>
                      <Input w={48} bg="white" placeholder="Month/Year" />
                    </FormControl>
                  </GridItem>
                  <GridItem colStart={2}>
                    <FormControl>
                      <FormLabel>CCV/CVV</FormLabel>
                      <Input
                        w={48}
                        type="password"
                        bg="white"
                        placeholder="CVV"
                      />
                    </FormControl>
                  </GridItem>
                </Grid>
              </form>
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

export default CreditTransferLayout;