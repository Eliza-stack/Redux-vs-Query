import { Provider } from 'react-redux';
import { store } from './store/store';
import UsersList from './components/UserList';

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}
