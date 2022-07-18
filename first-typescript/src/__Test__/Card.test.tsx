import React from 'react';
import { getAllByText, render, screen } from '@testing-library/react';
import {MyCard} from '../Components/Card/Card';
import {BrowserRouter} from 'react-router-dom'


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
  
  let prop:Data={
    author: "walson",
    comment_text: null,
    created_at: "2022-07-17T14:04:14.000Z",
    created_at_i: 12,
    num_comments: 12,
    objectID: "123",
    parent_id: null,
    points: 25,
    story_id: null,
    story_text: null,
    story_title: null,
    story_url: null,
    title: "This is my book",
    url: "www.walson.in",
    _highlightResult: 25,
    _tags:["walson","mybook","adventure"]
  
  }

  let myown:any=null

// let mydate=new Date(Date.parse(prop.created_at)).toDateString()




describe('testing the card component',()=>{
    test('checking the card component', () => {
        render(
          <BrowserRouter>
        <MyCard prop={prop} myown={myown} index={1} />
        </BrowserRouter>
        );
        const title = screen.getByText(/This is my book/i);
        const author=screen.getAllByText(/walson/i)
        const url=screen.getAllByText(/www.walson.in/i)
        const created=screen.getAllByText(/Created at:/i)
        expect(title).toBeInTheDocument();
        expect(author[0]).toBeInTheDocument();
        expect(url[0]).toBeInTheDocument();
        expect(created[0]).toBeInTheDocument();

      });
})



