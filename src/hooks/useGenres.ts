import apiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { useQuery } from "react-query";
import { Genre } from "../interfaces/Genre";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: ms("24h"),
  });

export default useGenres;
