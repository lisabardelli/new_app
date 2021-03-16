import React, { useState, useEffect } from 'react';
import '../App.css';
import hardcodedOptions from "./hardCodedOptions";

function PillarButton ({pillars, setPillars, articles, setArticles,selectedArticles, setSelectedArticles })  {
    const options = hardcodedOptions;
    console.log("OPTIONS", options)

    
        useEffect(() => {
            const getOptions = () =>  {
                    setPillars([...options])
                }
                getOptions()
          }, []);

          const handleClick = (pillarName) => {
            setSelectedArticles([]);
            console.log("SELECTED ARTCILES OUTSIDE => ", selectedArticles);
            articles.map((article)=> {
                console.log("ARTICLE.PILLARNAME INSIDE ITERATION =>", article.pillarName)
                console.log("PILLARNAME CLICKED =>", pillarName)
                if (article.pillarName == pillarName){
                    console.log("EQUAL")
                    setSelectedArticles([...selectedArticles, article])
                    console.log("SELECTED ARTCILES INSIDE IF STATEMENT =>", selectedArticles)
                }
            }) 
                  // if (selectedArticles.length > 0) {
            //     console.log("SELECTED ARTICLES  > 0");
            //     setArticles([]);
            // }

            };

  return (
        <div className="pillar-name">  
        {pillars.map(pillarName => (
              <button  value={pillarName} onClick={ () => handleClick(pillarName)}>{pillarName}</button>
          ))}


{selectedArticles.map(item => (
            <div>
       
             <a href={item.webUrl}>{item.webTitle}</a><br></br>
             <h3> {item.pillarName}</h3>
             <img src={item.fields.thumbnail} ></img>
            </div>
          ))}


            </div>
            );
}

export default PillarButton ;
