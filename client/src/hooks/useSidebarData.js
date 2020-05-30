import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLastOrdersGlobal } from "../actions/lastOrdersGlobal";
import socketIOClient from "socket.io-client";

const useSidebarData = () => {
  const sidebarData = useSelector((state) => state.lastOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastOrdersGlobal());
    const socket = socketIOClient();
    socket.on("new_order", () => {
      dispatch(fetchLastOrdersGlobal());
    });
  }, [dispatch]);

  return sidebarData;
};

export default useSidebarData;
