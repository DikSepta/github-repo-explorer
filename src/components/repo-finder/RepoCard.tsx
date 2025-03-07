import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

type RepoCardProps = {
  title: string;
  description: string;
  star: number;
};

export default function RepoCard({ title, description, star }: RepoCardProps) {
  return (
    <Card className="rounded-none bg-zinc-200 py-2 px-4 gap-2">
      <CardHeader className="flex flex-row justify-between items-center px-0">
        <CardTitle>{title}</CardTitle>
        <div className="flex gap-2 items-center">
          <span className="inline-block">{star}</span>
          <FaStar />
        </div>
      </CardHeader>
      <CardContent className="text-left p-0 text-zinc-500 min-h-8">
        {description}
      </CardContent>
    </Card>
  );
}
