import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkServerStatus } from "../../actions/server";

const ServerStatus = () => {
  const status = useSelector((state) => state.serverStatus);
  const dispatch = useDispatch();

  const renderContent = () => {
    switch (status) {
      case null:
        return "SPINNER";
      case false:
        return "Offline";

      default:
        return "Online";
    }
  };

  useEffect(() => {
    dispatch(checkServerStatus());
  }, [dispatch]);

  return (
    <div className="header__server-status">
      Status serwera:{" "}
      <div
        className={`header__server-status-text ${
          status === false || null ? "header__server-status-offline" : "header__server-status-online"
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default ServerStatus;
