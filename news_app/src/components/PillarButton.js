import React, { useState, useEffect } from 'react';
import '../App.css';
import hardcodedOptions from "./hardCodedOptions";

function PillarButton ({pillars, setPillars})  {
    const options = hardcodedOptions;
    console.log("OPTIONS", options)
    
        useEffect(() => {
            const getOptions = () =>  {
                    setPillars([...options])
                }
                getOptions()
          }, []);

          const handleClick = () => {
            console.log("in handleClick")  
            };

  return (
        <div className="pillar-name">  
        {pillars.map(pillarName => (
              <button onClick={ () => handleClick()}>{pillarName}</button>
          ))}
            </div>
            );
}

export default PillarButton ;
