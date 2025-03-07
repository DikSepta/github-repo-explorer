import RepoExplorer from "@/components/repo-explorer/RepoExplorer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RepoExplorer />
    </QueryClientProvider>
  );
}

export default App;
