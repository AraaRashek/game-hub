import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenShoots from "../hooks/useScreenshots";

interface Props {
  gameId?: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShoots(gameId);
  if (error) return <p>Something went wrong...</p>;
  if (data?.count === 0) return null;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
