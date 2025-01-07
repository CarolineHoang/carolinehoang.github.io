// Base HTML for the 'web browser' panel, shadowed boxes with dots and the project grid 
// was inspired by divanov11 and adapted by me @CarolineHoang                              
// The original project can be found here: https://github.com/divanov11/portfolio-website
// Note: the original was in pure javascript and HTML. This website is built with React


import React from "react";
// import styled from 'styled-components';
// import { theme } from "../util/GlobalStyles";
// import './App.css';

import '../Styles/expandingCard.css'
import '../Styles/social-media-slider-toggles.css'
import '../Styles/navbar.css'
import '../Styles/landingPage.css'

//
            // let FilterContainer = styled.div`
            //     width:100%;
            // `;

            // let FilterRow = styled.div`
            //     width:100%;
            //     background-color: ${theme.columbiaBlue};
            //     display: flex;
            //     flex-direction: row;
            //     align-items: flex-start;
            //     @media only screen and (max-width: 770px) {
            //         justify-content: flex-start;
            //         display: inline-block;
            //         vertical-align: middle;
            //         text-align: center;
            //         display: flex;
            //         flex-direction: row;
            //     }
            // `;

            // let SelectedWrapper = styled.div`
            //     display: flex;
            //     flex-direction: row;
            //     align-items: center;
            //     font-family: 'Raleway';
            //     width:100%;
            //     flex-wrap: wrap;
            // `;

            // let RowGZ = styled.div`
            //     display: flex;
            //     flex-direction: row;
            //     align-items: center;
            //     font-family: 'Raleway';
            //     justify-content: center;
            // `;

            // let Tag = styled.div`
            //     display: flex;
            //     flex-direction: row;
            //     align-items: center;
            //     color: ${theme.white};
            //     margin: 0 1rem .7rem 0;
            //     font-weight: 200;
            //     font-size: 1.1rem;
            //     @media only screen and (max-width: 770px) {
            //         margin: 0 1rem .5rem 0;
            //         font-size: 1rem;
            //     }
            // `;

            // let Cancel = styled.div`
            //     cursor: pointer;
            //     color: ${theme.white};
            //     font-weight: 200;
            //     font-size: 0.8rem;
            // `;

            // let Dropdown = styled.div`
            //     float: left;
            //     overflow: hidden;
            //     width:100%;
            //     height:100%;
            //     z-index:300;
            // `;

            // let DropdownWrapper = styled.div`
            //     flex:1;
            //     display: flex;
            //     align-items:center;
            //     justify-content:center;
            // `;
            // let FilterTextWrapper = styled.div`
            //     flex:1;
            //     display: flex;
            //     align-items:center;
            //     justify-content:flex-start;
            // `;

            // let ClearWrapper = styled.div`
            //     flex:1;
            //     display: flex;
            //     align-items:center;
            //     justify-content:flex-end;
            // `;

            // let DropTableColumn = styled.td`
            //     flex: 1.5;
                
            //     display: flex;
            //     flex-direction: column;
            //     margin: 0 .4rem;
            //     @media only screen and (max-width: 770px) {
            //         margin: 0 .2rem;
            //     }
            //     border: none;
            //     :first-child{
            //         flex: 1;
            //         margin: 0 .2rem 0 0;
            //         padding:0;
            //     }
            //     :last-child{
            //         flex: 1;
            //         margin: 0;
            //         padding:0;
            //     }
            // `;

            // let DropTable = styled.table`
            //     width: 100%;
            //     padding:0;
            //     margin:0 0;
            //     border: 0;
            //     /* Necessary to get rid of defailt 2px table offsets!: */
            //     -webkit-border-vertical-spacing: 0;
            //     -webkit-border-horizontal-spacing: 0;
            //     /* table-layout: fixed; */
            // `;

            // let DropTableRow = styled.tr`
            //     display: flex;
            //     border: none;
            //     min-height: 2.5rem;
            //     position:relative;
            // `;

            // let Textbox = styled.div`
            //     font-family: 'Raleway';
            //     font-size: 1.5rem;
            //     color: ${theme.white};
            //     @media only screen and (max-width: 770px) {
            //         font-size: 1rem;
            //     }
            // `;

            // let DropButton = styled.button`
            //     width:100%;
            //     height:100%;
            //     cursor: pointer;
            //     text-decoration: none;
            //     border-radius: 10px;
            //     border: 1.5px solid ${theme.white};  
            //     color: ${props => props.active ? theme.columbiaBlue : theme.white  };
            //     font-family: 'Raleway';
            //     text-align: center;
            //     padding:0;
            //     background-color: ${props => props.active ? theme.white: theme.columbiaBlue};
            //     outline: none;
            //     font-size:1.2rem;
            //     @media only screen and (max-width: 770px) {
            //         font-size: 1rem;
            //     }
            // `;

            // let DropdownContent = styled.div`
            //     display: ${props => props.show ? '' : 'none'};
            //     position: absolute;
            //     flex-direction: row;
            //     background-color: ${theme.white};
            //     min-width: 8rem;
            //     font-family: 'Raleway';
            //     box-shadow: 0.5rem 0rem 1rem 0rem ${theme.shadow};
            //     z-index: 1;
            //     border-radius: 8px;
            //     border: 1.5px solid ${theme.columbiaBlue};
            //     padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
            //     margin-right: 0.5rem;
            //     margin-top: 0.3rem;
            //     @media only screen and (max-width: 770px) {
            //         font-size: 1rem;
            //         min-width: 7rem;
            //     }
            // `;

            // let ClearButton = styled.a`
            //     cursor: pointer;
            //     font-family: 'Raleway';
            //     font-size:1.2rem;
            //     color: ${theme.white};
            //     text-decoration: underline;
            //     z-index:20;
            //     @media only screen and (max-width: 770px) {
            //         font-size: 1rem;
            //     }
            // `;

            // const ButtonGZ = styled.div`
            //     cursor: pointer;
            //     font-family: 'Raleway';
            //     font-size:1.2rem;
            //     border-radius: 100%;
            //     border: 1px solid ${props => props.active ? theme.columbiaBlue : theme.mediumGray};
            //     padding: 0rem 0.45rem 0rem 0.45rem;
            //     vertical-align: center;
            //     color: ${props => props.active ? theme.columbiaBlue : theme.white};
            //     background-color: ${props => props.active ? theme.white : theme.lightGray};
            //     &:hover {
            //         background: ${props => props.active ? theme.columbiaBlue : theme.lightGray} ;
            //         color: ${theme.white};
            //     }
            // `;

            // let Number = styled.div`
            //     font-family: 'Raleway';
            //     font-size: 1.5rem;
            //     vertical-align: middle;
            //     margin: auto;
            // `;

            // let Label = styled.div`
            //     font-family: 'Raleway';
            //     padding-left: 0.6rem;
            //     padding-top: 0.2rem;
            //     color: ${theme.columbiaBlue};
            //     font-size: 1.3rem;
            //     background: ${theme.white};
            //     font-weight: normal;
            //     display: flex;
            //     align-items:center;
            //     text-align: initial;
            //     @media only screen and (max-width: 770px) {
            //         font-size: 1rem;
            //     }
            // `;

            // let Row = styled.div`
            //     display: flex;
            //     flex-direction: row;
            //     align-items:center;
            //     padding: 0.3rem 0rem 0.3rem 0rem;
            // `;

            // let Input = styled.div`
            //     border: 2px solid ${theme.columbiaBlue};
            //     border-radius: 6px;
            //     width: 1.2rem;
            //     height: 0.9rem;
            //     cursor: pointer;
            //     color: ${theme.white};
            //     font-size: 1.1rem;
            //     padding: 0.1rem 0rem 0.4rem 0.2rem;
            //     background-color: transparent;
            //     vertical-align: center;
            //     &:active{
            //         background-color: ${theme.columbiaBlue};
            //     }
            // `;

            // let CheckBox = styled.div`
            //     display: ${props => props.show ? '' : 'none'};
            //     border: 2px solid ${theme.columbiaBlue};
            //     border-radius: 6px;
            //     width: 1.2rem;
            //     height: 0.9rem;
            //     cursor: pointer;
            //     color: ${theme.white};
            //     font-size: 1.1rem;
            //     padding: 0.1rem 0rem 0.4rem 0.2rem;
            //     background-color: ${theme.columbiaBlue};
            //     position: absolute;
            // `;
//



const projectsJSON = {
    Portfolio: {title: 'My Portfolio', links: [], image:"" , text: 'A place for my projects. Built with React.js.' },
    Spectator: {title: 'Daily Spectator', links: ['https://www.columbiaspectator.com/'], image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Spectator.png?raw=true" , text: 'A news site that delivers Columbia and Morningside related news and shares articles written by students for students' },
    theShaft: {title: 'theShaft', links: ['https://www.theshaft.info/explore'] ,image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/theShaft.png?raw=true", text: 'A website that informs Columbia Students of how the Housing Lottery opperates and organizes information about the dorms' },
    Loopy: {title: 'Loopy', links: [], image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Loopy.png?raw=true", text: 'A site that allows the user to import sounds to use in a looping sequencer (CodeLabs Project)' },
    ScoreIT: {title: 'ScoreIT', links: ['https://github.com/CarolineHoang/ScoreIT'], image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/ScoreIT.png?raw=true", text: 'A site that teaches introductory music students about how to distinguish between different values of notes (UI Design Project)' },
    VocaSearchP: {title: 'VocaSearchP', links: ['https://github.com/CarolineHoang/vocAdventures'], image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Vocaloid2.png?raw=true", text: 'A site for Vocaloid enthusists and newbies to discover new producers to follow based on their favorite voicebanks (UI Design Project)' },
    RPG: {title: 'RPG Site', links: ['https://github.com/CarolineHoang/platformerJS', 'https://github.com/CarolineHoang/react-platformer'], image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/RPG.png?raw=true", text: 'A concept site for being able to manuver a website using an RPG character and arrow controls along side traditional clicking navigation' }



}
// if you want to use html tags in the text, do this:
// https://www.npmjs.com/package/react-html-parser
// or dangerouslySetHTML




export default class LandingPage extends React.Component{
  
    render() {
        //
            // var selectedFilters = [];
            // for(var prop in this.state) {
            //     if(this.state[prop] && !String(prop).startsWith("show")) {
            //         if(prop == "GroupSize") {
            //             if(this.state[prop] > 0) selectedFilters.push(String(prop) + ": " + String(this.state[prop]))
            //         } else{
            //             selectedFilters.push(String(prop))
            //         }
            //     }
            // }
        return(
            <div className="LPContentContainer" >
                {/* <div className="nameHeadline">
                    Caroline Hoang
                </div> */}
                <div className= "landingImage"> 

                
                    <section className="s1 " ref={this.props.sections[0].ref}>
                        <div className="main-container">
                            <div className="greeting-wrapper">
                                <h1 className="nameHeadline">Caroline Hoang</h1>
                                {/* <h3 className="nameHeadline">CS Student ○ Developer ○ Something</h3> */}
                                <h3 className="subHeadline" >CS Alum, Developer, Tech Enthusiast</h3>

                                {/* <h1 className="nameHeadline">Hi, I'm Caroline Hoang</h1> */}
                            </div>
                            {/* <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p>
                            <div ><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%'  allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p> */}

                        </div>
                    </section>

                    <section className="s2 " ref={this.props.sections[1].ref}>
                        <a name='aboutMe'></a>
                        <div className="main-container panelShade">
                        <div className="intro-wrapper">
                                <div className="nav-wrapper">

                                    {/* <!-- Link around dots-wrapper added after tutorial video --> */}
                                    {/* <a href="index.html"> */}
                                        <div className="dots-wrapper">
                                            <div id="dot-1" className="browser-dot"></div>
                                            <div id="dot-2" className="browser-dot"></div>
                                            <div id="dot-3" className="browser-dot"></div>
                                        </div>
                                    {/* </a> */}
                                    

                                    <ul id="navigation">
                                        <li><a href="#contact">Contact</a></li>

                                    </ul>
                                </div>
                                {/* <a name='aboutMe'></a> */}
                                <div className="left-column">
                                    <img id="profile_pic" src="https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/profile-image.jpg?raw=true" />
                            
                                
                                </div>
                                {/* <a name='aboutMe'></a> */}
                                <div className="right-column">

                                    {/* <div className ="preview-shadow"> */}
                                    <div className="previewContainer" >
                                        <div className="preview">
                                            <div id="corner-tl" className="corner"></div>
                                            <div id="corner-tr" className="corner"></div>
                                            <h3>Who am I?</h3>
                                            <p>I'm a Software Engineer based in New York and an Alumni of Columbia University with a <br/>Bachelor of Science in Computer Science.</p>
                                            <p>My specialty lies in the design, development, and implementation of web-based applications and service, and I love bringing projects to fruition.</p>
                                            {/* <p>In my freetime, I like to draw, listen to music, and fiddle with code.</p> */}
                                            <div id="corner-br" className="corner"></div>
                                            <div id="corner-bl" className="corner"></div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className ="about-wrapper">
                            {/* <div className ="left-column"> */}
                                {/* <div className="about-me"> */}
                                {/* <div className= "preview-shadow resumeWrapper"> */}
                                {/* <div className="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" className="corner"></div>
                                        <div id="corner-tr" className="corner"></div>
                                        <h3>Looking for my resume?</h3>
                                        <p>You can find it <a href="https://drive.google.com/drive/folders/13e-jBLED102tljJy7QB4QyvkRyVSNpzC?usp=sharing" target="_blank" rel="noreferrer">here</a>.</p>
                                        <div id="corner-br" className="corner"></div>
                                        <div id="corner-bl" className="corner"></div>
                                    </div>
                                </div> */}

                                {/* <div className="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" className="corner"></div>
                                        <div id="corner-tr" className="corner"></div>
                                        <h3>You can also find me on:</h3>

                                        <a href="https://github.com/CarolineHoang" target="_blank" rel="noreferrer">GitHub: @CarolineHoang</a>
                                        <br/>
                                        <a href="https://www.linkedin.com/in/carolinehoang/" target="_blank" rel="noreferrer">LinkedIn: .../in/carolinehoang/</a>
                                        <br/>
                                        <div id="corner-br" className="corner"></div>
                                        <div id="corner-bl" className="corner"></div>
                                    </div>
                                </div> */}
                                
                            </div>

                        </div>
                    </section>
                </div> 
                <div className= "landingImage-backwards">
                    <section className="s1" ref={this.props.sections[2].ref}>
                        <div className="main-container">
                            <a name='projects'></a>
                            <h3 className='categoryTitle' >Some of my Projects</h3>

                            <div className="post-wrapper">

                                {/* <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.Portfolio.title}</h2>
                                        <p>{projectsJSON.Portfolio.text}</p>
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.Portfolio.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            <div>~ You are here! :D ~</div>
                                        </div>
                                    </div>
                                </div> */}
                                <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.Spectator.title}</h2>
                                        <p>{projectsJSON.Spectator.text}</p>
                                        {/* <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div> */}
                                        {/* <div className="card_circle transition"></div> */}
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.Spectator.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            {/* <a href="https://twitter.com/Dave_Conner" className="btn btn-4"><span>Hover</span></a>  */}
                                            {/* <div className="cardButton"><i className="card-icon-font fab fa-github-alt"></i> See on GitHub </div> */}
                                            <a href={projectsJSON.Spectator.links[0]}><div className="cardButton"><i className="card-icon-font fas fa-link"></i> See Live </div></a>
                                            
                                            {/* <div className="mediaIcon"><i className="float-icon-font fa fa-github"></i></div>
                                            <div className="mediaIcon"><i className="float-icon-font fa fa-github"></i></div> */}
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.theShaft.title}</h2>
                                        <p>{projectsJSON.theShaft.text}</p>
                                        {/* <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div> */}
                                        {/* <div className="card_circle transition"></div> */}
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.theShaft.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            <a href={projectsJSON.theShaft.links[0]}><div className="cardButton"><i className="card-icon-font fas fa-link"></i> See Live </div></a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.Loopy.title}</h2>
                                        <p>{projectsJSON.Loopy.text}</p>
                                        {/* <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div> */}
                                        {/* <div className="card_circle transition"></div> */}
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.Loopy.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            <div>~ Links TBA ~</div>
                                            {/* Links Not Available */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.ScoreIT.title}</h2>
                                        <p>{projectsJSON.ScoreIT.text}</p>
                                        {/* <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div> */}
                                        {/* <div className="card_circle transition"></div> */}
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.ScoreIT.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            <a href={projectsJSON.ScoreIT.links[0]}><div className="cardButton"><i className="card-icon-font fab fa-github-alt"></i> See on GitHub </div></a>
                                            {/* <div className="cardButton"><i className="card-icon-font fas fa-link"></i> See Live </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.VocaSearchP.title}</h2>
                                        <p>{projectsJSON.VocaSearchP.text}</p>
                                        {/* <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div> */}
                                        {/* <div className="card_circle transition"></div> */}
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.VocaSearchP.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            <a href={projectsJSON.VocaSearchP.links[0]}><div className="cardButton"><i className="card-icon-font fab fa-github-alt"></i> See on GitHub </div></a>
                                            {/* <div className="cardButton"><i className="card-icon-font fas fa-link"></i> See Live </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card transition">
                                        <h2 className="transition">{projectsJSON.RPG.title}</h2>
                                        <p>{projectsJSON.RPG.text}</p>
                                        {/* <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div> */}
                                        {/* <div className="card_circle transition"></div> */}
                                        <div className="card_circle transition">
                                            <img className="card-img" src={projectsJSON.RPG.image}/>
                                        </div>
                                        <div className="optionsContainer">
                                            <a href={projectsJSON.RPG.links[0]}><div className="cardButton"><i className="card-icon-font fab fa-github-alt"></i> See on GitHub </div></a>
                                            {/* <div className="cardButton"><i className="card-icon-font fas fa-link"></i> See Live </div> */}
                                        </div>
                                    </div>
                                </div>
                 
                                
                               

                            </div>
                            
                        </div>
                    </section>

                    <section className="s2" ref={this.props.sections[3].ref}>
                        
                        <div className="main-container contactMeContainer">
                            <a name="contact"></a>
                            <h3 className="categoryTitle" >Get In Touch!</h3>
                            {/* <div className="greeting-wrapper"> */}
                                <h3 className="subHeadline" >Send me an email at:</h3>
                                <a href="mailto: carolinejhoang22@gmail.com" target="_blank" rel="noreferrer"><h2 className="emailHeadline">carolinejhoang22@gmail.com</h2></a>
                                <h3 className="subHeadline" >I look forward to hearing from you!</h3>
                                
                                <a href="mailto: carolinejhoang22@gmail.com" target="_blank" rel="noreferrer"><h2 className="emailIcon"><i className="fa fa-envelope-open"></i></h2></a>
                                {/* <h3 className="nameHeadline">CS Student ○ Developer ○ Something</h3> */}
                        </div>


                        {/* VVVVVV This is the original contact form that we've removed in favor of just having a link VVVVVV */}
                        {/* <div className="main-container">
                            <a href=""></a>
                            <h3 className="categoryTitle" >Get In Touch</h3>

                            <form id="contact-form">
                                <a name="contact1"></a>

                                <label>Name</label>
                                <input className="input-field" type="text" name="name" />

                                <label>Subject</label>
                                <input className="input-field" type="text" name="subject" />

                                <label>Email</label>
                                <input className="input-field" type="text" name="email" />

                                <label>Message</label>
                                <textarea className="input-field" name="message"></textarea>

                                <input id="submit-btn" type="submit" value="Send" />
                            </form>
                        </div> */}
                    </section> 

                    <section className="footer">
                        
                            <a href=""></a>
                            • 2018-2025 •{/* &nbsp;• &nbsp; <a href="https://drive.google.com/drive/folders/13e-jBLED102tljJy7QB4QyvkRyVSNpzC?usp=sharing" target="_blank" rel="noreferrer">Resume</a> &nbsp; • &nbsp; <a href="mailto: carolinejhoang22@gmail.com" target="_blank" rel="noreferrer">Contact Me</a>*/}
                            {/* <h3 className="categoryTitle" >Get In Touch</h3> */}
                            {/* <a href="https://twitter.com/Dave_Conner" className="btn btn-4"><span>Hover</span></a>  */}
                    </section> 
                </div>
                <div className="float-sm">
                    
                    <a href="mailto: carolinejhoang22@gmail.com" target="_blank" rel="noreferrer">
                        <div className="fl-fl float-pos4">
                            <div className="mediaIcon"><i className="float-icon-font fa fa-envelope-open"></i></div>
                            <span> Contact Me!</span>
                        </div>
                    </a>
                    {/* <a href="https://drive.google.com/drive/folders/13e-jBLED102tljJy7QB4QyvkRyVSNpzC?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="fl-fl float-gp">
                            <div className="mediaIcon"><i className="float-icon-font fa fa-file-alt"></i></div>
                            <span>My Resume!</span>
                        </div>
                    </a> */}
                    <a href="https://github.com/CarolineHoang/" target="_blank" rel="noreferrer">
                        <div className="fl-fl float-pos5">
                        {/* <div className="fl-fl float-rs"> */}
                            <div className="mediaIcon"><i className="float-icon-font fa fa-github"></i></div>
                            <span>GitHub</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/carolinehoang/" target="_blank" rel="noreferrer">
                        <div className="fl-fl float-pos6">
                        {/* <div className="fl-fl float-ig"> */}
                            <div className="mediaIcon"><i className="float-icon-font fa fa-linkedin"></i></div>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                </div>
                {/* <div className="backdrop">
                    <p className="text">Taitō <i className="fa fa-facebook"></i></p>
                </div>
                <div className="backdrop2 fl-fl float-tw">
                    <p className="text">Taitō</p>
                </div> */}
            </div>
        //
            // <FilterContainer>
            //     <SelectedWrapper>
            //         {selectedFilters.map(prop => (
            //             <Tag><Cancel onClick={this.onChange} id={String(prop)}>X&nbsp;</Cancel>{prop}</Tag>
            //         ))}
            //     </SelectedWrapper>
            //     <FilterRow>
            //         <DropTable>
            //             <DropTableRow >
            //                 <DropTableColumn>
            //                     <FilterTextWrapper>
            //                         <Textbox>
            //                             Filters:
            //                         </Textbox>
            //                     </FilterTextWrapper>
            //                 </DropTableColumn>
            //                 <DropTableColumn>
            //                     <DropdownWrapper>
            //                         <Dropdown>
            //                             <DropButton onClick={(e)=>this.toggle("school",e)} active = {this.state.showSchool} >School</DropButton>
            //                             <DropdownContent show={this.state.showSchool}>
            //                             <Row>
            //                                 <CheckBox show={this.state.Columbia} onClick ={(e)=>this.unCheck("Columbia",e)}>✓</CheckBox>
            //                                 <Input 
            //                                     id = "Columbia"  
            //                                     type = "checkbox"
            //                                     onClick = {this.onChange} 
            //                                     checked = {this.state.Columbia} >✓</Input> 
            //                                 <Label>Columbia</Label>                
            //                             </Row>
            //                             <Row>
            //                                 <CheckBox show={this.state.Barnard} onClick ={(e)=>this.unCheck("Barnard",e)}>✓</CheckBox>
            //                                 <Input 
            //                                     id = "Barnard"  
            //                                     type = "checkbox"
            //                                     onClick = {this.onChange} 
            //                                     checked = {this.state.Barnard}>✓</Input> 
            //                                 <Label>Barnard</Label>
            //                             </Row>
            //                         </DropdownContent>
            //                         </Dropdown>
            //                     </DropdownWrapper>
            //                 </DropTableColumn>
            //                 <DropTableColumn>
            //                     <DropdownWrapper>
            //                         <Dropdown>
            //                 <DropButton onClick={(e)=>this.toggle("group",e)} id="group" active={this.state.showGroup}>Group Size</DropButton>
            //                 <DropdownContent show={this.state.showGroup}>
            //                     <RowGZ>
            //                         <ButtonGZ id = "-" onClick={this.onChange} active={this.state.GroupSize -1 >=0} >-</ButtonGZ>
            //                         <Number>{this.state.GroupSize}</Number>
            //                         <ButtonGZ className="button" id = "+" onClick={this.onChange} active={this.state.GroupSize +1 <= this.props.MAX_GROUP}>+</ButtonGZ>
            //                     </RowGZ> 
            //                 </DropdownContent>
            //             </Dropdown>
            //                     </DropdownWrapper>
            //                 </DropTableColumn>
            //                 <DropTableColumn>
            //                     <DropdownWrapper>
            //                         <Dropdown>
            //                     <DropButton onClick={(e)=>this.toggle("room",e)} id="room" active ={this.state.showRoom} >Room Type</DropButton>
            //                     <DropdownContent show={this.state.showRoom}>
            //                         <Row>
            //                             <CheckBox show={this.state.Suite} onClick ={(e)=>this.unCheck("Suite",e)}>✓</CheckBox>
            //                             <Input 
            //                                 id="Suite" 
            //                                 onClick = {this.onChange} 
            //                                 type="checkbox"
            //                                 checked = {this.state.Suite}
            //                                 onChange = {this.checkBox} >✓</Input>
            //                             <Label>Suite Style</Label>
            //                         </Row>
            //                         <Row>
            //                             <CheckBox show={this.state.Single} onClick ={(e)=>this.unCheck("Single",e)}>✓</CheckBox>
            //                             <Input 
            //                                 id="Single" 
            //                                 onClick = {this.onChange} 
            //                                 type="checkbox"
            //                                 checked = {this.state.Single}>✓</Input> 
            //                             <Label>Single</Label>
            //                         </Row>
            //                         <Row>
            //                             <CheckBox show={this.state.Double} onClick ={(e)=>this.unCheck("Double",e)}>✓</CheckBox>
            //                             <Input 
            //                                 id="Double" 
            //                                 onClick = {this.onChange} 
            //                                 type="checkbox" 
            //                             checked = {this.state.Double}>✓</Input> 
            //                             <Label>Double</Label>
            //                         </Row>
            //                         <Row>
            //                             <CheckBox show={this.state.Triple}  onClick ={(e)=>this.unCheck("Triple",e)}>✓</CheckBox>
            //                             <Input 
            //                                 id="Triple" 
            //                                 onClick = {this.onChange} 
            //                                 type="checkbox" 
            //                                 checked = {this.state.Triple}>✓</Input> 
            //                             <Label>Triple</Label>
            //                         </Row>
            //                     </DropdownContent>
            //                 </Dropdown>
            //                     </DropdownWrapper>
            //                 </DropTableColumn>
            //                 <DropTableColumn>
            //                     <ClearWrapper>
            //                         <ClearButton show = {this.state} onClick={this.clear}>Clear</ClearButton>
            //                     </ClearWrapper>
            //                 </DropTableColumn>
            //             </DropTableRow>
            //         </DropTable>
            //     </FilterRow>
            // </FilterContainer>
        );
    }
}