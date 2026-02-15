import { useState } from "react";
import LoginBtn from "./Components/LoginBtn";
import LogoutBtn from "./Components/LogoutBtn";
import Status from "./Components/Status";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
  <div className="app">
    <div className="card">
      <Status isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <LogoutBtn onLogout={handleLogout} />
      ) : (
        <LoginBtn onLogin={handleLogin} />
      )}
    </div>
  </div>
);

}

export default App;
