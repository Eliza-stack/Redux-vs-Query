import { QueryClient, QueryClientProvider } from 'react-query';
import UsersList from './components/UsersList';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  );
}
