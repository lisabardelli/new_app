import React, { useState, useEffect } from 'react';
import '../App.css';
import Article from "./Article";

function ArticleList({articles, setArticles}) {
  
    useEffect(() => {
      const getArticles = () =>  {
        fetch('https://content.guardianapis.com/search?show-fields=all&api-key='
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
          {articles.map(item => (
            <div>
       
             <a href={item.webUrl}>{item.webTitle}</a><br></br>
             <h3> {item.pillarName}</h3>
             <img src={item.fields.thumbnail} ></img>
            </div>
          ))}

    </div>
  );
}

export default ArticleList;