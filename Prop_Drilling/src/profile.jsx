import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const username = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome {username.firstname} {username.lastname}</p>
    </div>
  );
}

export default Profile;
