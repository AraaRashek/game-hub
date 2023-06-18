import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => {
      acc += page.results.length;
      return acc;
    }, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}

      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner marginLeft={10} />}
      >
        <SimpleGrid
          columns={{ sm: 3, md: 2, lg: 3, xl: 4 }}
          spacing={10}
          padding={10}
        >
          {isLoading &&
            skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
