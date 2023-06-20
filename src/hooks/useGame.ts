import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { Game } from "../interfaces/Game";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<Game>(`/games/${slug}`).then((res) => res.data),
  });

export default useGame;
