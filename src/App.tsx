import RepoFinder from "@/components/repo-finder/RepoFinder";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RepoFinder />
    </QueryClientProvider>
  );
}

export default App;
