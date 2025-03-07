import UserRepositories from "@/components/repo-finder/UserRepositories";
import { Accordion } from "@/components/ui/accordion";
import { GithubUser } from "@/types/github";

type UserListProps = {
  users?: GithubUser[];
};

export default function UserList({ users }: UserListProps) {
  if (!users) {
    return null;
  }

  if (!users.length) {
    return <div className="text-destructive text-sm">User not found.</div>;
  }

  return (
    <Accordion type="multiple">
      {users?.map((user) => (
        <UserRepositories key={user.id} user={user} />
      ))}
    </Accordion>
  );
}
