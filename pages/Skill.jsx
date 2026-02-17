import React from 'react'
import "../src/components/Skill.css"
export default function Skill() {
  return (
    <div id="skillContainer">
        <div id="TextDiv">
            <h1>Skills</h1>
            Here are some of my skills on which I have been working on.
        </div>

      <div id="skillKnownDiv">
        <div id="frontendDiv">
          <h1 style={{"color":"white"}}>FrontEnd</h1>
        <div id="entire-frontend-skill-div">
            <div id="skilldiv" >
            <div id="reactjspicture"></div>
            <div>React js</div>
          </div>
          <div id="skilldiv">
            <div id="javaScriptpicture"></div>
             <div>JavaScript</div>
          </div>
          <div id="skilldiv">
            <div id="tailwindCsspicture"></div>
              <div>Tailwind</div>
          </div>
          <div id="skilldiv">
            <div id="Csspicture"></div>
             <div>Css</div>
          </div>
          <div id="skilldiv">
            <div id="htmlpicture"></div>
            <div>Html</div>
          </div>
          <div id="skilldiv">
            <div id="bootstrappicture"></div>
            <div>BootStrap</div>
          </div>
        </div>
           </div>
        <div id="backendDiv">
          <h1 style={{"color":"white"}}>BackEnd</h1>
            <div id="entire-frontend-skill-div">
            <div id="skilldiv" >
            <div id="nodepicture"></div>
            <div>Node js</div>
          </div>
          <div id="skilldiv">
            <div id="expresspicture"></div>
             <div>Express Js</div>
          </div>
          <div id="skilldiv">
            <div id="mongodbpicture"></div>
              <div>MongoDb</div>
          </div>
          <div id="skilldiv">
            <div id="redispicture"></div>
              <div>Redis</div>
          </div>
        
        </div>
        </div>
        <div id="othersDiv">
           <h1 style={{"color":"white"}}>Others</h1>
             <div id="entire-frontend-skill-div">
            <div id="skilldiv" >
            <div id="GitHubpicture"></div>
            <div>GitHub</div>
          </div>
          <div id="skilldiv">
            <div id="javaScriptpicture"></div>
             <div>Netlify</div>
          </div>
          <div id="skilldiv">
            <div id="tailwindCsspicture"></div>
              <div>VS Code</div>
          </div>
          <div id="skilldiv">
            <div id="Csspicture"></div>
             <div>Postman</div>
          </div>
          <div id="skilldiv">
            <div id="htmlpicture"></div>
            <div>Vercel</div>
          </div>
        </div>
        </div>
      </div>
      <div id="Skillpicturediv">
        <div id="Skillpicture">

        </div>
      
      </div>
      <div id="latestworkdiv"><a id="latestwork">Latest Works</a></div>
    </div>
  )
}
