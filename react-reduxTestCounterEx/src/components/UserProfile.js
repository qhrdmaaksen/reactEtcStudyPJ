import classes from './UserProfile.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store";

const UserProfile = () => {

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
