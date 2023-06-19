import { useQuery } from "react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Platform } from "../interfaces/Platform";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: ms("24h"),
  });

export default usePlatforms;
