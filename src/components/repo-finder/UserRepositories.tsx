import RepoCard from "@/components/repo-finder/RepoCard";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { useGithubRepos } from "@/hooks/useGithubRepo";
import { GithubUser } from "@/types/github";

type UserRepositoriesProps = {
  user: GithubUser;
};

export default function UserRepositories({ user }: UserRepositoriesProps) {
  const { data: repositories, isLoading } = useGithubRepos(user.login);

  return (
    <AccordionItem value={user.login} className="not-last:mb-2">
      <AccordionTrigger className="cursor-pointer bg-zinc-100 p-3">
        {user.login}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-1 p-1 pl-4 md:pl-8">
        {isLoading ? (
          <Skeleton className="w-full h-16" />
        ) : (
          <>
            {!repositories || !repositories.length ? (
              <div className="py-2">No repository found.</div>
            ) : (
              repositories.map((repo) => (
                <RepoCard
                  key={repo.html_url}
                  title={repo.name}
                  description={repo.description}
                  star={repo.stargazers_count}
                />
              ))
            )}
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
