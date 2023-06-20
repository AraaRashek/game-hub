import { useQuery } from "react-query";
import apiClient, { FetchResponse } from "../services/api-client";

import ms from "ms";

const useScreenShoots = (gameId?: number) => {
  return useQuery({
    queryKey: ["game", "ScreenShoots"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<ScreenShots>>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
  });
};

export default useScreenShoots;
