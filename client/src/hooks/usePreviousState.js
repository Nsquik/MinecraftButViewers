import { useEffect, useRef } from "react";

const usePreviousState = (value) => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePreviousState;
// useEffect is skipped until return of the functional component is reached, so return ref.current is invoked first, then useEffect runs.
// Return previous value. This happens before useEffect update.
