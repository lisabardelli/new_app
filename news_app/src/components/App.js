import React, { useState } from 'react';
import '../App.css';
import Article from "./Article";
import ArticleList from "./ArticleList";

function App() {
  const [articles, setArticles] = useState([])
  return (
    <div>
         <h1> Hello world</h1>
         < ArticleList
         articles = {articles}
         setArticles = {setArticles}
         /> 
    </div>
  );
}

export default App;
