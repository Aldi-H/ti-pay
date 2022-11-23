import { Box, Grid, GridItem, Heading, Select } from "@chakra-ui/react";

const LandingPage = () => {
  const bankList = [
    { id: 1, name: "BNI" },
    { id: 2, name: "BRI" },
    { id: 3, name: "BCA" },
    { id: 4, name: "Mandiri" },
  ];

  const cardList = [
    { id: 1, name: "Visa" },
    { id: 2, name: "Mastercard" },
    { id: 3, name: "JCB" },
  ];

  const cashList = [
    { id: 1, name: "Alfamart/Alfamidi" },
    { id: 2, name: "Indomaret" },
    { id: 1, name: "Agen BRILink" },
  ];

  return (
    <Box p={4}>
      <Heading p={4} as="h2" size="md">
        Choose type of payment
      </Heading>

      <Grid p={4} gridTemplateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem>
          <Select placeholder="Bank Transfer">
            {bankList.map((bank) => (
              <option key={bank.id}>{bank.name}</option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <Select placeholder="Credit/Debit Card">
            {cardList.map((card) => (
              <option key={card.id}>{card.name}</option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <Select placeholder="Cash">
            {cashList.map((cash) => (
              <option key={cash.id}>{cash.name}</option>
            ))}
          </Select>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LandingPage;
