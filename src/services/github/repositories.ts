import { GithubRepo } from "@/types/github";
import { githubApi } from "./api";

export const getReposByUser = async (
  username: string
): Promise<GithubRepo[]> => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return response.data as GithubRepo[];
};
