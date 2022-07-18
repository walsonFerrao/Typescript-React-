import { useLocation } from "react-router-dom";
import { Card } from "@mui/material";
export const Fulldata = () => {
  const location = useLocation();

  return (
    <>
    <Card sx={{padding:5,paddingRight:4}} >


      
      <h1>the full data is</h1>
       
      <p style={{maxWidth:"150ch"}}  >{JSON.stringify(location.state)}</p>
      </Card>
    </>
  );
};
