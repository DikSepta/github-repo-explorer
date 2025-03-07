import { useQuery } from "@tanstack/react-query";
import { GithubRepo } from "@/types/github";
import { getReposByUser } from "@/services/github/repositories";
import { AxiosError } from "axios";

export const useGithubRepos = (username: string) => {
  return useQuery<GithubRepo[], AxiosError>({
    queryKey: ["githubRepos", username],
    queryFn: () => getReposByUser(username),
    enabled: !!username && username !== "", // Prevents execution when username is empty
  });
};
