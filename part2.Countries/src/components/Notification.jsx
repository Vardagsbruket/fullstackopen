const Notification = ({ message, searchValue }) => {
  if (message === null || searchValue === null || searchValue === "") {
    return null;
  }

  return <>{message !== null && <div>{message}</div>}</>;
};
export default Notification;
