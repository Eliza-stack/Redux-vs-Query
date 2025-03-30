import { useQuery } from 'react-query';
import { fetchUsers } from '../api/usersApi';

export default function UsersList() {
  const { data: users, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
  );
}
