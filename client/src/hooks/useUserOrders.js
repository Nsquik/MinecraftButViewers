import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserOrders } from "../actions/user";

const useUserOrders = () => {
  const userOrders = useSelector((state) => state.userOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  return userOrders;
};

export default useUserOrders;
