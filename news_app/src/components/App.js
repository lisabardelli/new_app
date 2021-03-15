import React, { useState } from 'react';
import '../App.css';
import Article from "./Article";
import ArticleList from "./ArticleList";
import PillarButton from "./PillarButton"
import moment from "moment";


function App() {
  const [articles, setArticles] = useState([])
  const [pillars, setPillars] = useState([])
  var date = moment(new Date()).format("Do MMMM")
  return (
    <div>
      < PillarButton 
       pillars = {pillars}
       setPillars = {setPillars}/>
         <h1> {date}</h1>
         < ArticleList
         articles = {articles}
         setArticles = {setArticles}
         /> 
    </div>
  );
}

export default App;
