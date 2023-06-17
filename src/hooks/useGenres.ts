import apiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { useQuery } from "react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: ms("24h"),
  });

export default useGenres;
