const LogoutBtn = ({ onLogout }) => {
  return (
    <button className="logout-btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutBtn;
