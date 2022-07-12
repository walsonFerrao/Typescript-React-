import { useLocation } from "react-router-dom";

export const Fulldata = () => {
  const location = useLocation();

  return (
    <>
    

      <div style={{padding:"30px"}}>

      
      <h1>the full data is</h1>
       
      <p>{JSON.stringify(location.state)}</p>
      </div>
    </>
  );
};
