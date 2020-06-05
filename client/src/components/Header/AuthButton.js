import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions/user";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const AuthButton = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const renderContent = () => {
    switch (auth) {
      case null:
        return <ClipLoader color={"#ffdd31"} />;
      case false:
        return (
          <button className="header__hello-button">
            <a href="/auth/twitch">TWITCH.TV LOGIN</a>
          </button>
        );
      default:
        return (
          <>
            Hej, {auth.display_name}
            <Link to="/me">
              <img src={auth.img} alt="user profile"></img>
            </Link>
          </>
        );
    }
  };

  return <div className="header__hello">{renderContent()}</div>;
};

export default AuthButton;
