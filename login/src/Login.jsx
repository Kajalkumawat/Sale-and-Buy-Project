import { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    alert("Login Successful");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;