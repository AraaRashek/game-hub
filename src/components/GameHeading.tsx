import { Box, Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Box paddingLeft={8} margin={2} marginBottom={4}>
      <Heading fontSize="5xl" as="h1">{`${gameQuery.platform?.name || ""} ${
        gameQuery.genre?.name || ""
      }${" "}Games`}</Heading>
    </Box>
  );
};

export default GameHeading;
