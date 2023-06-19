import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { Game } from "../interfaces/Game";
import ms from "ms";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<Game>(`/games/${slug}`).then((res) => res.data),
    staleTime: ms("24h"),
  });

export default useGame;
