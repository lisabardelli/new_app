import React, { useState, useEffect } from 'react';
import '../App.css';
import Article from "./Article";
// require('dotenv').config();
// const Dotenv = require('dotenv-webpack');
// const keyAPI = process.env.KEY
function ArticleList({articles, setArticles}) {
  
    useEffect(() => {
      const getArticles = () =>  {
        fetch('https://content.guardianapis.com/search?api-key='
       )
       .then(response => response.json())
       .then(data => { 
             setArticles([...data.response.results])
         })
       .catch(e => {
           console.log(e);
           return e;
       })
       };
      getArticles()
    }, []);
    

  return (
    <div>
      < Article />
      <ul>
          {articles.map(item => (

            <li>{item.webTitle} </li>
          ))}
      </ul>
    </div>
  );
}

export default ArticleList;