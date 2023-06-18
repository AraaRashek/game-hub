import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../hooks/image-crop";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom="2">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="64px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
