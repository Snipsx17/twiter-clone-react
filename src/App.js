import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import AuthContext from './pages/auth/Context';

function App({ initialLoged }) {
  const [isLogged, setIsLogged] = useState(!!initialLoged);
  const isLoggedHandler = () => {
    setIsLogged(true);
  };

  const logoutHandler = () => {
    setIsLogged(false);
  };

  const authData = {
    isLogged,
    isLoggedHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={authData}>
      <div>
        {isLogged ? (
          <Layout>
            <TweetsPage onLogout={logoutHandler} dark={false} />
          </Layout>
        ) : (
          <LoginPage onLogin={isLoggedHandler} />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
