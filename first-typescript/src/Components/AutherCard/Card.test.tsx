import React from 'react';
import { getAllByText, render, screen } from '@testing-library/react';
import {MyCard} from './Card';


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
    created_at: "20/11/21",
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

describe('testing the card component',()=>{


    test('checking the card component', () => {
        render(<MyCard prop={prop} />);
      
        const title = screen.getByText(/This is my book/i);
        const author=screen.getAllByText(/walson/i)
        const url=screen.getAllByText(/www.walson.in/i)
        const createdat=screen.getByText("20/11/21")
        expect(title).toBeInTheDocument();
        expect(author[0]).toBeInTheDocument();
        expect(url[0]).toBeInTheDocument();
        expect(createdat).toBeInTheDocument();
      
      });
      

    test('checking the tag component',()=>{



    })



})



