import * as Styled from "./style";
import React, { useEffect, useState } from 'react';


const LoginForm = ({ onLogin }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => setError(error.message));
  }, []);

  const handleLogin = () => {
    if (selectedUser) {
      onLogin(selectedUser);
    }else{
        alert("Please select the user")
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

 

  return (
    <Styled.LoginForm >
    <div className="container ">
      <div style={{ paddingTop: "9%" }}>
        <Styled.Login>
          <Styled.LoginData>
            <div className="login">Login</div>
            <div className="select-user">Select user to login</div>

            <div>
              <div className="dropdown btnData">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {selectedUser ? selectedUser.name : "Selected User"}
                </button>
                <ul className="dropdown-menu">
                  {users.map(user => (
                    <li key={user.id} onClick={() => setSelectedUser(user)}>
                      <a className="dropdown-item" href="#">{user.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="get">
              <button className="btnStart" onClick={handleLogin}>Get Started</button>
            </div>

          </Styled.LoginData>
        </Styled.Login>
      </div>
    </div>
    </Styled.LoginForm>
  );
};

export default LoginForm;
