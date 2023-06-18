import { Box, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../zustandStore";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platform = platforms?.results.find(
    (platform) => platform.id === platformId
  );
  const genre = genres?.results.find((genre) => genre.id === genreId);
  return (
    <Box paddingLeft={8} margin={2} marginBottom={4}>
      <Heading fontSize="5xl" as="h1">{`${platform?.name || ""} ${
        genre?.name || ""
      }${" "}Games`}</Heading>
    </Box>
  );
};

export default GameHeading;
