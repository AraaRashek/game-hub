import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Box margin={5} padding={10}>
        <Spinner />
      </Box>
    );
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem margin={10}>
        <Heading marginBottom={10}>{game?.name}</Heading>

        <ExpandableText>{String(game?.description_raw)}</ExpandableText>

        <GameAttributes game={game} />
      </GridItem>
      <GridItem margin={10}>
        <GameTrailer gameId={game?.id} />
        <GameScreenshots gameId={game?.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
