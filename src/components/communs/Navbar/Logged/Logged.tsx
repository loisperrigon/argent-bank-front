import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../features/auth/auth";
import { RootState } from "../../../../store";

export default function Logged() {
  const username = useSelector((state: RootState) => state.auth.userFirstName);
  const dispatch = useDispatch();

  return (
    <div>
      <a className="main-nav-item" href="./user">
        <i className="fa fa-user-circle"></i>
        {username}
      </a>
      <a
        className="main-nav-item"
        href="./signIn"
        onClick={() => dispatch(logout())}
      >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </a>
    </div>
  );
}
