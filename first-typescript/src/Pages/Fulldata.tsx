import { useLocation } from "react-router-dom";

export const Fulldata = () => {
  const location = useLocation();

  return (
    <>
      <h1>the full data is</h1>

      <h3>{JSON.stringify(location.state)}</h3>
    </>
  );
};
