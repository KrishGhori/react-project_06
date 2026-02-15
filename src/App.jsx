import { useState } from "react";
import LoginBtn from "./Components/LoginBtn";
import LogoutBtn from "./Components/LogoutBtn";
import Status from "./Components/Status";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app">

      <header className="navbar">
        <h1>Auth Dashboard</h1>
      </header>

      <main className="main">

        <div className="card">

          <div className="status-section">
            <Status isLoggedIn={isLoggedIn} />
          </div>

          <div className="button-section">
            {isLoggedIn ? (
              <LogoutBtn onLogout={handleLogout} />
            ) : (
              <LoginBtn onLogin={handleLogin} />
            )}
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
