import Counter from './components/Counter';
import { Fragment } from 'react/jsx-runtime';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
        <Auth />
          <Counter />
    </>
  );
}

export default App;