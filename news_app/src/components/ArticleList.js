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
    <div className="container">
          {articles.map(item => (
            <div className="one-article">
           
              <a className="title" href={item.webUrl}>{item.webTitle}</a><br></br>
              {/* <h3 className="pillar-n"> {item.pillarName}</h3> */}
        
             <img className="image" src={item.fields.thumbnail} ></img>
            </div>
          ))}

    </div>
  );
}

export default ArticleList;