import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
}

export default App;
