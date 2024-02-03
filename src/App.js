import './App.css';
import Button from '@material-ui/core/Button';
import profilepic from './assets/profile-pic.jpg';
import mytaurus from './assets/mytaurus.png';
import synthetix from './assets/synthetix.jpeg';
import nba from './assets/nba.png';
import android from './assets/android.png';
import angular from './assets/angular.png';
import homevideos from './assets/homevideos.png';
import spacy from './assets/spacy.jpg';
import { useState } from 'react';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const textIntro = `Hello! I'm a Hong Kong born software developer currently based in Los Angeles, California.
I graduated from USC with a Master's and Bachelor's degree in Computer Science.
I'm currently employed at a cool startup called <a id="acuity-link" href="https://www.acuitymd.com/" target="_blank" >AcuityMD</a>.
This is my personal website, so I hope you learn a little bit about me.
`;
const textEmail = "williamzemingliu@gmail.com"

const linkedinUrl = "https://www.linkedin.com/in/william-ze-ming/";
const githubUrl = "https://github.com/WilliamZeMingLiu";

const tag1 = "React / NodeJS / Express / Firebase / Polygon / Postman / Heroku";
const tag2 = "React / NodeJS / Express";
const tag3 = "Angular / Android Studio (Java) / NodeJS / Express / Google Cloud Platform";
const tag4 = "React / NodeJS / Express / SQLite";
const tag5 = "React / GraphQL / Terra Blockchain / Google Cloud Platform";
const tag6 = "React / Bootstrap / Python / Flask / spaCy";

const textProject1 = "MyTaurus is a web application that acts as a management dashboard for your financial assets, specifically cryptocurrencies and stocks.  The main goal for this application is to provide users a single platform to manage all their asset types.  Features include user accounts and authentification, visual KPI graphs, adding and removing assets to portfolio, searching for specific assets using autocomplete search bar, and asynchronous data that updates in real time.  I was responsible for the front-end development and worked with four other software engineers to complete this project";
const textProject2 = "NBA StatHub is a web application that provides users relevant and live NBA information.  Functionalities include game schedules, injury/news updates, live game standings, and player/team season statistics.  One of my favourite features is the player and team comparator, users can pick any two players (or teams) and compare each other’s statistics.  I developed this full-stack application independently.";
const textProject3 = "This unnamed web and Android mobile application utilises TicketMaster’s API data to display live entertainment events.  Users fill out forms to input what events they want to be displayed, users can filter based on event category, keywords, distance from their current location or from a specified location.  Search results return all relevant events and their information.  Other functionalities include favouriting events and displaying Google Maps with the venue location.  I worked on both applications independently.";
const textProject4 = "Liu Family’s Home videos is a simple web application I made during COVID.  My father had a hard drive of dozens of hours of video tape that he shot throughout my childhood.  I decided to help him edit the videos and upload them to a Google cloud drive.  Using my web application knowledge and experience, I decided to create a website to share these home videos with our distant family and friends.  I independently developed this full-stack application. ";
const textProject5 = "Synthetix is a dApp (decentralized finance app) that enables users to manage crypto wallets and trade crypto.  Powered by the Terra blockchain.";
const textProject6 = "This web app enables users to input any text, and using the Python module spaCy, identifies named entities for NLP learning.";

const resumeUrl = 'https://drive.google.com/file/d/1Rr1xAvAUGJljxwO_KuO7zB9wKjatjncV/view?usp=sharing';


function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log("HELLO")
    if(isClicked){
        document.body.style.background = "#faf0e6";
        document.body.style.animation = "";
        

        const header = [...document.getElementsByTagName('h1')];
        header.forEach((child) => { child.style.color = 'black' });

        const rowTitle = [...document.getElementsByClassName('row-title')];
        rowTitle.forEach((child) => { child.style.color = 'black' });

        const paragraph = [...document.getElementsByTagName('p')];
        paragraph.forEach((child) => { child.style.color = 'black' });

        document.getElementById("email-link").style.color = "blue";
        document.getElementById("acuity-link").style.color = "blue";
        document.getElementById("project-link1").style.color = "blue";
        document.getElementById("project-link2").style.color = "blue";
        document.getElementById("project-link3").style.color = "blue";
        document.getElementById("project-link4").style.color = "blue";
        document.getElementById("project-link5").style.color = "blue";
    }
    else{
        document.body.style.background = "#4cc9f0";
        document.body.style.animation = "gradient 4s linear infinite";
        
        const header = [...document.getElementsByTagName('h1')];
        header.forEach((child) => { child.style.color = 'white' });

        const paragraph = [...document.getElementsByTagName('p')];
        paragraph.forEach((child) => { child.style.color = 'lightgray' });

        document.getElementById("email-link").style.color = "yellow";
        // document.getElementById("acuity-link").style.color = "yellow";
        document.getElementById("project-link1").style.color = "yellow";
        document.getElementById("project-link2").style.color = "yellow";
        document.getElementById("project-link3").style.color = "yellow";
        document.getElementById("project-link4").style.color = "yellow";
        document.getElementById("project-link5").style.color = "yellow";

    }
    setIsClicked(!isClicked);
  }

  return (
    <div className="app">
    	<div className="body">
    		<div className="intro">
                <div className="text-group1">
        			<a onClick={handleClick} className="main-title"><h1>I'm William Liu.</h1></a>
                    <img className="profile-pic" alt="profile pic" src={profilepic} />
                    <p dangerouslySetInnerHTML={{ __html: textIntro }}></p>
                    <Button
                        target="_blank"
                        href={resumeUrl}
                        variant="contained"
                        color="default"
                        size="large"
                        startIcon={<CloudDownloadIcon />}
                    >
                    Resume
                    </Button>
                    <a href = "mailto: williamzemingliu@gmail.com"><p id="email-link">{textEmail}</p></a>
                    <div className="social-media">
                        <a className="social-buttons" id="linkedin" href={linkedinUrl} rel="noreferrer" target="_blank"><LinkedInIcon fontSize="large" /></a>
                        <a className="social-buttons" id="github" href={githubUrl} rel="noreferrer" target="_blank"><GitHubIcon fontSize="large" /></a>
                    </div>
                </div>
    		</div>
            
            <h1 className="div-title">Projects</h1>
            <div className="projects">


                <h1 className="row-title">Synthetix</h1>
                <div className="row">
                    <div className="img-col">
                        <img alt="project" src={synthetix} />
                    </div>
                    <div className="text-col">
                        <p className="tag-text">{tag5}</p>
                        {/* <a className="project-links" href="https://fluted-current-324004.wl.r.appspot.com/" target="_blank">App Link</a>  */}
                        {/* <a>  |  </a> */}
                        {/* <a id="project-link1" className="project-links" href="https://github.com/WilliamZeMingLiu/synthetix" target="_blank">Github</a>  */}
                        <p className="bio-text">{textProject5}</p>  
                    </div>
                </div>

                <h1 className="row-title">MyTaurus</h1>
                <div className="row">
                    <div className="img-col">
                        <img alt="project" src={mytaurus} />
                    </div>
                    
                    <div className="text-col">
                        <p className="tag-text">{tag1}</p>
                        {/* <a className="project-links" href="https://mytaurus-frontend.herokuapp.com/" target="_blank">App Link</a>  */}
                        {/* <a>  |  </a> */}
                        {/* <a id="project-link2" className="project-links" href="https://github.com/WilliamZeMingLiu/mytaurus-frontend" target="_blank">Github</a>  */}
                        <p className="bio-text">{textProject1}</p> 
                        
                    </div>
                </div>
                <h1 className="row-title">NBA StatHub</h1>
                <div className="row">
                    <div className="img-col">
                        <img alt="project" src={nba} />
                    </div>
                    <div className="text-col">
                        <p className="tag-text">{tag2}</p>
                        {/* <a className="project-links" href="https://pristine-crater-lake-96345.herokuapp.com/" target="_blank">App Link</a>  */}
                        {/* <a>  |  </a> */}
                        {/* <a id="project-link3" className="project-links" href="https://github.com/WilliamZeMingLiu/nba-app" target="_blank">Github</a>  */}
                        <p className="bio-text">{textProject2}</p>
                    </div>
                </div>
                <h1 className="row-title">Event Search</h1>
                <div className="row">
                    <div className="img-col">
                        <div className="android-wrapper">
                            <img id="one" alt="project" src={android} />
                            <img id="two" className="android" alt="project" src={angular} />
                        </div>
                    </div>
                    <div className="text-col">
                        <p className="tag-text">{tag3}</p>
                        {/* <a className="project-links" href="https://hmw8-9485766.wl.r.appspot.com/" target="_blank">Web Link</a>  */}
                        {/* <a>  |  </a> */}
                        <a id="project-link4" className="project-links" href="https://www.youtube.com/watch?v=ioCsP15ckjM" target="_blank">App Demo (Video)</a> 
                        <p className="bio-text">{textProject3}</p>
                    </div>
                </div>
                <h1 className="row-title">NLP Named Entity Recognition</h1>
                <div className="row">
                    <div className="img-col">
                        <img alt="project" src={spacy} />
                    </div>
                    <div className="text-col">
                        <p className="tag-text">{tag6}</p>
                        {/* <a id="project-link5" className="project-links" href="https://github.com/WilliamZeMingLiu/web-ner-challenge" target="_blank">Github</a>  */}
                        <p className="bio-text">{textProject6}</p>  
                    </div>
                </div>
                <h1 className="row-title">Liu Family's Home Videos</h1>
                <div className="row">
                    <div className="img-col">
                        <img alt="project" src={homevideos} />
                    </div>
                    <div className="text-col">
                        <p className="tag-text">{tag4}</p>
                        {/* <a className="project-links" href="https://liufamilyhomevideos.com/" target="_blank">App Link</a> */}
                        <p className="bio-text">{textProject4}</p>
                    </div>
                </div>
                <div className="easter-egg">
                    <p>*click on my name to see something cool</p>
                </div>
            </div>
    	</div>

        <div className="footer">
            <p>A website made by William Liu</p>
        </div>
    	
    </div>
  );
}

export default App;
