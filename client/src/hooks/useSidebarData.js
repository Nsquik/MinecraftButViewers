import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLastOrdersGlobal } from "../actions/lastOrdersGlobal";

const useSidebarData = () => {
  const sidebarData = useSelector((state) => state.lastOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLastOrdersGlobal());
  }, [dispatch]);

  return sidebarData;
};

export default useSidebarData;
