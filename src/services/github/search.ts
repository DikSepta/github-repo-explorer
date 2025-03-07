import { GithubUser } from "@/types/github";
import { githubApi } from "./api";

export const searchUserByUsername = async (
  query: string,
  perPage = 5
): Promise<GithubUser[]> => {
  const response = await githubApi.get(`/search/users`, {
    params: {
      q: query, //`${query}+in:login`,
      per_page: perPage,
    },
  });
  return response.data.items as GithubUser[];
};
