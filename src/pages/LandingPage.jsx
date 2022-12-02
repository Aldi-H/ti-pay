import { Box, Grid, GridItem, Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backend from "../api/backend";
import Hero from "../components/Hero";

const LandingPage = () => {
  const [transaction, setTransaction] = useState(null);
  const { transactionId } = useParams();
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
    { id: 3, name: "Agen BRILink" },
  ];

  const getTransaction = async (transactionId) => {
    try {
      const res = await backend.get(`/transaction/${transactionId}`);
      setTransaction(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction(transactionId);
  }, []);

  return (
    <>
      <Hero transaction={transaction} />
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
    </>
  );
};

export default LandingPage;
