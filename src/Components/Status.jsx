const Status = ({ isLoggedIn }) => {
  return (
    <p className={isLoggedIn ? "status success" : "status danger"}>
      {isLoggedIn ? "You are logged in" : "You are logged out"}
    </p>
  );
};

export default Status;
