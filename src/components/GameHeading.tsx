import { Box, Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  return (
    <Box paddingLeft={8} margin={2} marginBottom={4}>
      <Heading fontSize="5xl" as="h1">{`${platform?.name || ""} ${
        genre?.name || ""
      }${" "}Games`}</Heading>
    </Box>
  );
};

export default GameHeading;
