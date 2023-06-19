import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinintionItem from "./DefinintionItem";
import { Game } from "../interfaces/Game";

interface Props {
  game?: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={2} as="dl">
      <DefinintionItem term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinintionItem>
      <DefinintionItem term="Metascore">
        <CriticScore score={game?.metacritic} />
      </DefinintionItem>
      <DefinintionItem term="Genres">
        {game?.genres.map((genre) => {
          return <Text key={genre.id}>{genre.name}</Text>;
        })}
      </DefinintionItem>

      <DefinintionItem term="Publishers">
        {game?.publishers.map((publisher) => {
          return <Text key={publisher.id}>{publisher.name}</Text>;
        })}
      </DefinintionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
