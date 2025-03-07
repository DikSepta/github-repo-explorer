import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  onSearch: (search: string) => void;
  isLoading?: boolean;
};

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;

    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <Input placeholder="Enter username" name="username" />
      <Button
        disabled={isLoading}
        type="submit"
        className="w-full rounded-none"
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
}
