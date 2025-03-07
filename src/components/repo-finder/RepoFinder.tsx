import SearchBar from "@/components/repo-finder/SearchBar";
import UserList from "@/components/repo-finder/UserList";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchUser } from "@/hooks/useSearchUser";
import { useCallback, useState } from "react";

export default function RepoFinder() {
  const [query, setQuery] = useState("");

  const { data: listUser, isError, isLoading } = useSearchUser(query);

  const handleSearch = useCallback((search: string) => {
    setQuery(search);
  }, []);

  return (
    <div className="flex flex-col py-4 md:py-6 px-4 md:px-12">
      <div className="text-amber-600 text-center text-3xl font-bold mb-6">
        Github Repo Finder
      </div>
      <SearchBar isLoading={isLoading} onSearch={handleSearch} />
      {query !== "" ? (
        <h3 className="font-normal text-zinc-500 text-sm mt-2 mb-3 text-left">
          {isLoading ? "Searching" : "Showing result"} for "{query}"
        </h3>
      ) : null}
      {isLoading && (
        <>
          <Skeleton className="w-full h-11 mb-2" />
          <Skeleton className="w-full h-11" />
        </>
      )}
      {isError ? <div>Error fetching user</div> : <UserList users={listUser} />}
    </div>
  );
}
