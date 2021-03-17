import React, { useState } from 'react';
import '../App.css';
import ArticleList from "./ArticleList";
import PillarButton from "./PillarButton"
import moment from "moment";


function App() {
  const [articles, setArticles] = useState([])
  const [pillars, setPillars] = useState([])
  const [selectedArticles, setSelectedArticles] = useState([])


  var date = moment(new Date()).format("Do MMMM")
  return (
    <div>
      <div>
        <h1 className="name">The News</h1><h1 className="date"> {date}</h1>
      < PillarButton 
       pillars = {pillars}
       setPillars = {setPillars}
       articles = {articles}
       setArticles = {setArticles}
       selectedArticles = {selectedArticles}
       setSelectedArticles = {setSelectedArticles}
       />
       </div>
     

         < ArticleList
         articles = {articles}
         setArticles = {setArticles}
         /> 


    </div>
  );
}

export default App;
