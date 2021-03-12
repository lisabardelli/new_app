import React, { useState } from 'react';
import '../App.css';
import Article from "./Article";
import ArticleList from "./ArticleList";
import moment from "moment";



function App() {
  const [articles, setArticles] = useState([])
  console.log(
    "Conversion: ",
    moment(new Date()).format("Do MMMM  h:mm a")
  );
  var date = moment(new Date()).format("Do MMMM")
  return (
    <div>
         <h1> {date}</h1>
         < ArticleList
         articles = {articles}
         setArticles = {setArticles}
         /> 
    </div>
  );
}

export default App;
