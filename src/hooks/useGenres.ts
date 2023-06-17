import apiClient from "../services/api-client";

import { useQuery } from "react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchGenresResponse>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;
