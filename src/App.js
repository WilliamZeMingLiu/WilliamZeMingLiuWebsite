import Button from '@material-ui/core/Button';

import './App.css';
import profilepic from './assets/profilepic.png';
import mytaurus from './assets/mytaurus.png';
import eth from './assets/eth.jpeg';
import synthetix from './assets/synthetix.jpeg';
import nba from './assets/nba.png';
import android from './assets/android.png';
import angular from './assets/angular.png';
import homevideos from './assets/homevideos.png';
import spacy from './assets/spacy.jpg';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const textIntro = "Hello! I'm a Hong Kong born full-stack and front-end developer currently based in California. I am a graduate student studying at USC and currently am seeking employment for 2021.  I hope my personal website will help you learn a little bit more about myself.";
const textEmail = "williamzemingliu@gmail.com"
const textBio1 = "Born and raised in Hong Kong, I spent my whole K-12 education attending Hong Kong International School. I was accepted into USC in 2017 as an Economics major, however early in my freshman year my interest in computer science and programming grew. I was also interested in business management, specifically the business behind building and funding startup tech companies. Thankfully, USC offered a double major program that allowed me to study both a Computer Science degree and Business Administration degree, exposing me to both the business and engineering aspects of technology.  Currently I am pursuing my Master’s degree in Computer Science at USC Viterbi, and I look forward to learning new things and improving my professional skills in the near future."
const textBio2 = "My most recent internship was interning at JUMP Investors, a venture capital company that is run by the co-founder of Akamai Technologies, Randall Kaplan. I decided to work at a VC because I wanted to explore the business of technology companies. I learned a great deal from reviewing pitch decks, drafting reports, and data entry for JUMP's in-house startup company, Sandee. In fact, I was the intern that provided the most amount of content creation for Sandee's website during that summer."
const textBio3 = "My previous internship was an quality assurance intern position at Aura Labs, a small startup company based in Hong Kong that builds websites and mobile applications for companies. This was my first experience working in an office, and the fact that this company comprised of less than 10 people at the time made me interested in working for startups in the future. Through my role, I was able to help identify over 20 bugs/mistakes on a client's website, ensuring that the application was published with zero bugs."

const linkedinUrl = "https://www.linkedin.com/in/william-ze-ming/";
const githubUrl = "https://github.com/WilliamZeMingLiu";
const facebookUrl = "https://www.facebook.com/william.liu.754";
const instagramUrl = "https://www.instagram.com/silly_billy_hk/";

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

var isClicked = false;

function App() {

  function handleClick() {
    if(isClicked){
        document.body.style.background = "white";
        document.body.style.animation = "";
        

        const header = [...document.getElementsByTagName('h1')];
        header.forEach((child) => { child.style.color = 'black' });

        const rowTitle = [...document.getElementsByClassName('row-title')];
        rowTitle.forEach((child) => { child.style.color = 'gray' });

        const paragraph = [...document.getElementsByTagName('p')];
        paragraph.forEach((child) => { child.style.color = 'gray' });

        document.getElementById("email-link").style.color = "blue";
    }
    else{
        document.body.style.background = "#4cc9f0";
        document.body.style.animation = "gradient 20s linear infinite";
        
        const header = [...document.getElementsByTagName('h1')];
        header.forEach((child) => { child.style.color = 'white' });

        const paragraph = [...document.getElementsByTagName('p')];
        paragraph.forEach((child) => { child.style.color = 'lightgray' });

        document.getElementById("email-link").style.color = "yellow";

    }
    isClicked = !isClicked;
  }

  return (
    <div className="app">
    	<div className="body">
    		<div className="intro">
                <div className="text-group1">
        			<a onClick={handleClick} className="main-title"><h1>I'm William Liu.</h1></a>
                    <p>{textIntro}</p>
                    <div className="social-media">
                        <a className="social-buttons" id="linkedin" href={linkedinUrl} rel="noreferrer" target="_blank"><LinkedInIcon fontSize="large" /></a>
                        <a className="social-buttons" id="github" href={githubUrl} rel="noreferrer" target="_blank"><GitHubIcon fontSize="large" /></a>
                        <a className="social-buttons" id="facebook" href={facebookUrl} rel="noreferrer" target="_blank"><FacebookIcon fontSize="large" /></a>
                        <a className="social-buttons" id="instagram" href={instagramUrl} rel="noreferrer" target="_blank"><InstagramIcon fontSize="large" /></a>
                    </div>
                    <p id="email-link">{textEmail}</p>
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
                </div>
    		</div>

            <h1 className="div-title">About Me</h1>
            <div className="bio">
                <div className="col1">
                    <img className="profile-pic" alt="profile pic" src={profilepic} />
                </div>
                <div className="col2">
                    <p>{textBio1}</p>
                    <p>{textBio2}</p>
                    <p>{textBio3}</p>
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
                        <a className="project-links" href="https://fluted-current-324004.wl.r.appspot.com/" target="_blank">App Link</a> 
                        <a>  |  </a>
                        <a className="project-links" href="https://github.com/WilliamZeMingLiu/synthetix" target="_blank">Github</a> 
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
                        <a className="project-links" href="https://mytaurus-frontend.herokuapp.com/" target="_blank">App Link</a> 
                        <a>  |  </a>
                        <a className="project-links" href="https://github.com/WilliamZeMingLiu/mytaurus-frontend" target="_blank">Github</a> 
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
                        <a className="project-links" href="https://pristine-crater-lake-96345.herokuapp.com/" target="_blank">App Link</a> 
                        <a>  |  </a>
                        <a className="project-links" href="https://github.com/WilliamZeMingLiu/nba-app" target="_blank">Github</a> 
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
                        <a className="project-links" href="https://hmw8-9485766.wl.r.appspot.com/" target="_blank">Web Link</a> 
                        <a>  |  </a>
                        <a className="project-links" href="https://www.youtube.com/watch?v=ioCsP15ckjM" target="_blank">App Demo Video</a> 
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
                        <a className="project-links" href="https://github.com/WilliamZeMingLiu/web-ner-challenge" target="_blank">Github</a> 
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
                        <a className="project-links" href="https://liufamilyhomevideos.com/" target="_blank">App Link</a>
                        <p className="bio-text">{textProject4}</p>
                    </div>
                </div>
                <div className="easter-egg">
                    <p>*click on my name above to see something cool</p>
                </div>
            </div>
    	</div>

        <div className="footer">
            <p>a website made by william liu.</p>
        </div>
    	
    </div>
  );
}

export default App;
