import { useQuery } from "react-query";
import apiClient, { FetchResponse } from "../services/api-client";

import ms from "ms";
import { Trailer } from "../interfaces/Trailer";

const useTrailers = (gameId?: number) => {
  return useQuery({
    queryKey: ["game", "Trailers"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Trailer>>(`/games/${gameId}/movies`)
        .then((res) => res.data),
    staleTime: ms("24h"),
  });
};

export default useTrailers;
