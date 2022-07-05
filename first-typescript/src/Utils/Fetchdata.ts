import { Method } from "axios";
import React from "react";
import {Mycomponent} from '../Pages/Home'
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
    tempdata: Data[];
  };




  

export const getthedata=()=>{

      
    

   
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${Mycomponent.prototype.state.pagenumber}`
    )
      .then((res) => res.json())
      .then((rea) => {
      Mycomponent.prototype. setState({
          ... Mycomponent.prototype. state,
          data: [...Mycomponent.prototype.state.data, ...rea.hits],
          pagenumber:Mycomponent.prototype. state.pagenumber + 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });







}