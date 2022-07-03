import { type } from "@testing-library/user-event/dist/type";
import { Component } from "react";
import { MyCard } from '../AutherCard/Card';
import {Returnerror} from './Returnerror'
import { v4 as uuidv4 } from 'uuid';

interface Data {
  author: string;
  comment_text: null;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: null;
  points: number;
  story_id: null,
  story_text: null;
  story_title: null;
  story_url: null;
  title: string;
  url: string;
  _highlightResult: any;
  _tags: string[]

}




type Mystate = {

  data: Data[];
  pagenumber: number;
  tempdata: Data[]

}
interface searchqueries {
  query: string;
  isquery: boolean;
  ishome: boolean;
}

interface Myprops {
  searchobj: searchqueries
  setsearchobj: React.Dispatch<React.SetStateAction<searchqueries>>
}











export class Mycomponent extends Component<Myprops, Mystate>{

  myown: null | ReturnType<typeof setTimeout>

  constructor(props: Myprops) {
    super(props);
    this.state = {
      data: [],
      pagenumber: 1,
      tempdata: []
    }
    this.myown = null
  }


  // writing a function resposible for fetching the data
  getthedata = function (this: Mycomponent) {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pagenumber}`)
      .then((res) => res.json())
      .then((rea) => { this.setState({ ...this.state, data: [...this.state.data, ...rea.hits], pagenumber: this.state.pagenumber + 1 }) })
      .catch((err) => { console.log(err) })
  }



  // fetching the data for every 10 seconds
  componentDidMount() {
    this.myown = setInterval(() => {
      console.log("i am post")
      this.getthedata()
    }, 10000)

  }

  // since the body and search query is in the different component using a temporary parameter for lifting the state up so that both the component can commnuicate

  ifthequeryisfalse() {
    this.props.setsearchobj({ ...this.props.searchobj, isquery: false })

    if (this.props.searchobj.query.length > 0) {


      let myarr: Data[]
      myarr = this.state.data.filter((e) => { return (e.author == this.props.searchobj.query) })

      this.setState({ ...this.state, tempdata: myarr })

      this.props.setsearchobj({ ...this.props.searchobj, query: "", isquery: false })

    }


  }




  render() {

    if (this.state.pagenumber == 1) {
      this.getthedata()
    }

    if (this.props.searchobj.isquery == true) {
      this.ifthequeryisfalse()

    }


// adding function for fetching the data whenever we scroll the scroller to end 

    window.addEventListener("scroll", () => {
      
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.getthedata()
      }

    })

    // console.log(this.state.data)

    if (!this.props.searchobj.ishome) {

      if (this.state.tempdata.length == 0) {
        return (
         <Returnerror/>
        )
      }
      else {
        return (<> {this.state.tempdata?.map((e) => <MyCard key={uuidv4()} prop={e} />)}  </>)

      }

    }
    else {
      return (<>
        {this.state.data?.map((e) => <MyCard key={uuidv4()} prop={e} />)}
      </>)
    }

  }





}