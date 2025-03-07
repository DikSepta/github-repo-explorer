import { useQuery } from "@tanstack/react-query";
import { GithubUser } from "@/types/github";
import { AxiosError } from "axios";
import { searchUserByUsername } from "@/services/github/search";

export const useSearchUser = (query: string) => {
  return useQuery<GithubUser[], AxiosError>({
    queryKey: ["users", query],
    queryFn: () => searchUserByUsername(query),
    enabled: !!query && query !== "", // Prevents execution when username is empty
  });
};
