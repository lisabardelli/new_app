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

  return (
        <div className="pillar-name">  
        {pillars.map(pillarName => (
              <button>{pillarName}</button>
          ))}
            </div>
            );
}

export default PillarButton ;
