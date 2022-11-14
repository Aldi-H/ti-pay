import { Flex, Stack, Center, Heading, Text } from "@chakra-ui/react";

import logo from "../assets/ti-pay-logo.svg";

const Header = () => {
  return (
    <header>
      <Flex bg="orange.400" justify="center" pt={5} pb={3}>
        <Stack>
          <Center>
            <img width={200} height={76} src={logo} alt="Ti-Pay Logo" />
          </Center>
          <Text
            fontSize="md"
            fontWeight="semibold"
            color="white.50"
            textAlign="center"
          >
            Your Home To a Brand New Payment
          </Text>
        </Stack>
      </Flex>
    </header>
  );
};

export default Header;
