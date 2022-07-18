import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Tags } from "../Tags/Tag";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
const Myheading = styled("span")(() => ({
  fontSize: "25px",
  fontWeight: "bolder",
}));

const Myflex = styled("div")(() => ({
  display: "flex",
  gap: "5%",
}));





interface Data {
  author: string;
  comment_text: null;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: null;
  points: number;
  story_id: null;
  story_text: null;
  story_title: null;
  story_url: null;
  title: string;
  url: string;
  _highlightResult: any;
  _tags: string[];
}

interface myprop {
  prop: Data;
  myown:any;
  index:number;
}

export const MyCard: React.FC<myprop> = ({ prop,myown,index }) => {
  const navigate = useNavigate();

  function takemetofulldata() {
    navigate("/full", { state: prop });
  }
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          ml: 4,
          mr: 4,
          mb: 4,
          mt: 4,
          paddingLeft: 4,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: "#dbeee0",
          
        }}
      >
        <CardContent  data-testid={`element${index}`}>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            <Myheading   >Title:</Myheading> {prop.title}
          </Typography>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            <Myheading>Author:</Myheading> {prop.author}
          </Typography>
          <Typography variant="h6" component="div">
            <Myheading> URL:</Myheading> <a href={prop.url}  target="_blank">{prop.url}</a>
          </Typography>
          <Typography sx={{ fontSize: 20, mt: 3 }} color="text.secondary">
            <Myheading> Created at:</Myheading> {new Date(Date.parse(prop.created_at)).toDateString() + "   "+"("+  new Date(Date.parse(prop.created_at)).toLocaleTimeString() + ")"}
          </Typography>
          <Tags arr={prop._tags} />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              // cleartheinterval()
              clearInterval(myown)
              takemetofulldata();
            }}
          >
            View full data
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
