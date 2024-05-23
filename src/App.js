// App.js

import React, { useState } from 'react';

import LoginForm from './components/Login_Form/LoginForm';
import TodoList from './components/TodoData/TodoData';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div className="App">
      {!loggedInUser ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <TodoList userId={loggedInUser.id} />
        </div>
      )}
    </div>
  );
};

export default App;
