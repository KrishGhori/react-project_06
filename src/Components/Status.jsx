const Status = ({ isLoggedIn }) => {
  return (
    <h2>
      {isLoggedIn ? "User is Logged In" : "User is Logged Out"}
    </h2>
  );
};

export default Status;
