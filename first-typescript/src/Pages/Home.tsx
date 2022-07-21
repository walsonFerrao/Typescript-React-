import { type } from "@testing-library/user-event/dist/type";
import { Component } from "react";
import { MyCard } from "../Components/Card/Card";
import { Returnerror } from "../Components/Nothingfound/Returnerror";
import { v4 as uuidv4 } from "uuid";
import { Waypoint } from "react-waypoint";

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

type Mystate = {
  data: Data[];
  pagenumber: number;
  isscroll: boolean;
  query: string;
};
interface searchqueries {
  query: string;
}

interface Myprops {
  searchobj: searchqueries;
}

// this is my Component where I all the cards are displayed

export class Mycomponent extends Component<Myprops, Mystate> {
  myown: null | ReturnType<typeof setTimeout>;
  myarray:null | Data[]
  constructor(props: Myprops) {
    super(props);
    this.state = {
      data: [],
      pagenumber: 0,
      isscroll:false,
      query: "",
    };
    this.myown = null;
    this.myarray=[]
  }

  // writing a function resposible for fetching the data
  getthedata =async () => {
    if (this.state.pagenumber <= 50) {
      console.log(this.state.pagenumber);
  
       this.setState({...this.state,pagenumber:this.state.pagenumber+1})

        fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pagenumber}`
      )
        .then((res) => res.json())
        .then((rea) => {
          this.setState({
            ...this.state,
            data: [...this.state.data, ...rea.hits],

          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // componentWillMount()
  // {
  //   this.getthedata()
  //   // console.log("iammmm")

     
  // }
  componentDidMount()
  {
 
  setTimeout(()=>{this.setState({...this.state,isscroll:true})},1000)

  this.myown = setInterval(() => {
    console.log("i am post");
    this.getthedata();
  }, 10000);
  
  }

  
  // since the body and search query is in the different component using a temporary parameter for lifting the state up so that both the component can commnuicate

  render() {
   
if(this.state.pagenumber==0)
{
  this.getthedata()
}

 
    if (!this.props.searchobj.query) {
      return (
        <div data-testid="dataifnoquery">

          {this.state.data.map((e,index) => (
            <MyCard prop={e}  key={uuidv4()}  myown={this.myown} index={index} />
          ))}
      {this.state.isscroll?<Waypoint bottomOffset="-10px" onEnter={this.getthedata} />:""}
        </div>
      );
    } else {
     this.myarray = this.state.data.filter((e) => {
        return (
          e.author
            .toLowerCase()
            .includes(this.props.searchobj.query.toLowerCase()) ||
          e.title
            .toLowerCase()
            .includes(this.props.searchobj.query.toLowerCase())
        );
      });


      if (this.myarray.length !== 0) {
        return (<div data-testid="dataifquery">
        {this.myarray?.map((e,index) => (
          <MyCard prop={e} key={uuidv4()}  myown={this.myown} index={index}  />
        ))}
       {/* {this.state.pagenumber>=0? <Waypoint bottomOffset="-10px" onEnter={()=>{console.log("me");this.getthedata()}}></Waypoint>:""} */}
      </div>);
      } else
      
        return (
          <Returnerror />
        );
    }
  }
}
