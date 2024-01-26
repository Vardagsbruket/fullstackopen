const Notification = ({ message, errorMessage }) => {
  if (message === null && errorMessage === null) {
    return null;
  }

  return (
    <>
      {message !== null && <div className="success">{message}</div>}
      {errorMessage !== null && <div className="error">{errorMessage}</div>}
    </>
  );
};
export default Notification;
