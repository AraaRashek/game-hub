import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

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
    <>
      <Box margin={5} padding={10}>
        <Heading marginBottom={10}>{game?.name}</Heading>

        <ExpandableText>{String(game?.description_raw)}</ExpandableText>

        <GameAttributes game={game} />
      </Box>
    </>
  );
};

export default GameDetailsPage;
