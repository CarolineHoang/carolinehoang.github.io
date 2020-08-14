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
    Spectator: {title: 'Daily Spectator', image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Spectator.png?raw=true" , text: '<b>Aenean</b> lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.' },
    theShaft: {title: 'theShaft', image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/theShaft.png?raw=true", text: 'Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.' },
    Loopy: {title: 'Loopy', image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Loopy.png?raw=true", text: 'Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.' },
    ScoreIT: {title: 'ScoreIT', image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/ScoreIT.png?raw=true", text: 'Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.' },
    VocaSearchP: {title: 'VocaSearchP', image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Vocaloid2.png?raw=true", text: 'Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.' },
    RPG: {title: 'RPG Site', image:"https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/RPG.png?raw=true", text: 'Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.' }



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

                
                    <section className="s1 " ref={this.props.sections[0].ref}>\
                        <div class="main-container">
                            <div class="greeting-wrapper">
                                <h1 className="nameHeadline">Caroline Hoang</h1>
                                {/* <h3 className="nameHeadline">CS Student ○ Developer ○ Something</h3> */}
                                <h3 className="subHeadline" >CS Student, Developer, Something</h3>

                                {/* <h1 className="nameHeadline">Hi, I'm Caroline Hoang</h1> */}
                            </div>
                            {/* <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p>
                            <div ><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%'  allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p> */}

                        </div>
                    </section>

                    <section className="s2 " ref={this.props.sections[1].ref}>
                        <a name='aboutMe'></a>
                        <div class="main-container panelShade">
                        <div class="intro-wrapper">
                                <div class="nav-wrapper">

                                    {/* <!-- Link around dots-wrapper added after tutorial video --> */}
                                    <a href="index.html">
                                        <div class="dots-wrapper">
                                            <div id="dot-1" class="browser-dot"></div>
                                            <div id="dot-2" class="browser-dot"></div>
                                            <div id="dot-3" class="browser-dot"></div>
                                        </div>
                                    </a>
                                    

                                    <ul id="navigation">
                                        <li><a href="#contact">Contact</a></li>

                                    </ul>
                                </div>
                                {/* <a name='aboutMe'></a> */}
                                <div class="left-column">
                                    <img id="profile_pic" src="https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/profile-image.jpg?raw=true" />
                                    {/* <h5 style={{"text-align": 'center', "line-height": '0'}}>Personalize Theme</h5>

                                    <div id="theme-options-wrapper">
                                        <div data-mode="light" id="light-mode" class="theme-dot"></div>
                                        <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
                                        <div data-mode="green" id="green-mode" class="theme-dot"></div>
                                        <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
                                    </div>

                                    <p id="settings-note">*Theme settings will be saved for<br/>your next vist</p> */}
{/*                                 
                                <div class="previewContainer" >
                                        <div className="preview">
                                            <div id="corner-tl" class="corner"></div>
                                            <div id="corner-tr" class="corner"></div>
                                            <h3>Who am I?</h3>
                                            <p>I'm a rising Junior studying Computer Science at Columbia University.</p>
                                            <div id="corner-br" class="corner"></div>
                                            <div id="corner-bl" class="corner"></div>
                                        </div>
                                </div> */}
                                
                                </div>
                                {/* <a name='aboutMe'></a> */}
                                <div class="right-column">

                                    {/* <div className ="preview-shadow"> */}
                                    <div class="previewContainer" >
                                        <div className="preview">
                                            <div id="corner-tl" class="corner"></div>
                                            <div id="corner-tr" class="corner"></div>
                                            <h3>Who am I?</h3>
                                            <p>I'm a rising Junior based in NY and studying Computer Science at Columbia University.</p>
                                            <div id="corner-br" class="corner"></div>
                                            <div id="corner-bl" class="corner"></div>
                                        </div>
                                    </div>
                                    {/* <div class="previewContainer" >
                                        <div className="preview">
                                            <div id="corner-tl" class="corner"></div>
                                            <div id="corner-tr" class="corner"></div>
                                            <h3>Who am I?</h3>
                                            <p>I'm a rising Junior studying Computer Science at Columbia University.</p>
                                            <div id="corner-br" class="corner"></div>
                                            <div id="corner-bl" class="corner"></div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className ="about-wrapper">
                            {/* <div className ="left-column"> */}
                                {/* <div class="about-me"> */}
                                {/* <div className= "preview-shadow resumeWrapper"> */}
                                <div class="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" class="corner"></div>
                                        <div id="corner-tr" class="corner"></div>
                                        <h3>Looking for my Resume?</h3>
                                        <p>You can find it <a href="https://drive.google.com/drive/folders/13e-jBLED102tljJy7QB4QyvkRyVSNpzC?usp=sharing" target="_blank">Here</a>.</p>
                                        <div id="corner-br" class="corner"></div>
                                        <div id="corner-bl" class="corner"></div>
                                    </div>
                                </div>

                                <div class="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" class="corner"></div>
                                        <div id="corner-tr" class="corner"></div>
                                        <h3>You can also find me on:</h3>

                                        <a target="_blank" href="https://github.com/CarolineHoang">GitHub: @CarolineHoang</a>
                                        <br/>
                                        <a target="_blank" href="https://www.linkedin.com/in/carolinehoang/">LinkedIn: .../in/carolinehoang/</a>
                                        <br/>
                                        <a target="_blank" href="https://www.facebook.com/caroline.hoang.35977">FaceBook: .../caroline.hoang.35977</a>
                                        <div id="corner-br" class="corner"></div>
                                        <div id="corner-bl" class="corner"></div>
                                    </div>
                                </div>
                                {/* <div class="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" class="corner"></div>
                                        <div id="corner-tr" class="corner"></div>
                                        <h3>You can also find me on:</h3>

                                        <a target="_blank" href="https://github.com/CarolineHoang">GitHub: @CarolineHoang</a>
                                        <br/>
                                        <a target="_blank" href="https://www.linkedin.com/in/carolinehoang/">LinkedIn: .../in/carolinehoang/</a>
                                        <br/>
                                        <a target="_blank" href="https://www.facebook.com/caroline.hoang.35977">FaceBook: .../caroline.hoang.35977</a>
                                        <div id="corner-br" class="corner"></div>
                                        <div id="corner-bl" class="corner"></div>
                                    </div>
                                </div>
                                <div class="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" class="corner"></div>
                                        <div id="corner-tr" class="corner"></div>
                                        <h3>You can also find me on:</h3>

                                        <a target="_blank" href="https://github.com/CarolineHoang">GitHub: @CarolineHoang</a>
                                        <br/>
                                        <a target="_blank" href="https://www.linkedin.com/in/carolinehoang/">LinkedIn: .../in/carolinehoang/</a>
                                        <br/>
                                        <a target="_blank" href="https://www.facebook.com/caroline.hoang.35977">FaceBook: .../caroline.hoang.35977</a>
                                        <div id="corner-br" class="corner"></div>
                                        <div id="corner-bl" class="corner"></div>
                                    </div>
                                </div> */}
                                {/* </div> */}
                                {/* <div className= "preview-shadow resumeWrapper">
                                    <div id="preview" >
                                        <div id="corner-tl" class="corner"></div>
                                        <div id="corner-tr" class="corner"></div>
                                        <h3>Looking for my Resume?</h3>
                                        <p>You can find it here.</p>
                                        <div id="corner-br" class="corner"></div>
                                        <div id="corner-bl" class="corner"></div>
                                    </div>
                                </div> */}
                                    {/* <h4>More about me</h4>

                                    <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>

                                    <p>While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.</p> */}


                                    {/* <hr/> */}

                                    {/* <h4>TOP EXPERTISE</h4>

                                    <p>Fullstack developer with primary focus on Django + React: <a target="_blank" href="resume.pdf">Download Resume</a></p> */}

                                    {/* <div id="skills">
                                        <ul>
                                            <li>Python</li>
                                            <li>Django</li>
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Postgres</li>
                                        </ul>

                                        <ul>
                                            <li>Google Maps API</li>
                                            <li>JS Charts</li>
                                            <li>AWS (RDS/S3)</li>
                                            <li>Heroku</li>
                                            <li>HTML/CSS</li>
                                        </ul>

                                    </div> */}

                                {/* </div> */}

                                {/* <div className= "preview-shadow findMeWrapper"> */}
                                {/* <div class="previewContainer" >
                                    <div className="preview" >
                                        <div id="corner-tl" class="corner"></div>
                                        <div id="corner-tr" class="corner"></div>
                                        <h3>You can also find me on:</h3>

                                        <a target="_blank" href="https://github.com/CarolineHoang">GitHub: @CarolineHoang</a>
                                        <br/>
                                        <a target="_blank" href="https://www.linkedin.com/in/carolinehoang/">LinkedIn: .../in/carolinehoang/</a>
                                        <br/>
                                        <a target="_blank" href="https://www.facebook.com/caroline.hoang.35977">FaceBook: .../caroline.hoang.35977</a>
                                        <div id="corner-br" class="corner"></div>
                                        <div id="corner-bl" class="corner"></div>
                                    </div>
                                </div> */}
                              
                            </div>

                        </div>
                    </section>
                </div> 
                <div className= "landingImage-backwards">
                    <section className="s1" ref={this.props.sections[2].ref}>
                        <div class="main-container">
                            <a name='projects'></a>
                            <h3 className='categoryTitle' >Some of my Projects</h3>

                            <div class="post-wrapper">

                                

                                {/* <div>
                                        <img class="thumbnail" src="https://github.com/CarolineHoang/wsite2/blob/master/personal-site/src/Assets/Spectator.png?raw=true" />
                                        <div class="post-preview">
                                            <h6 class="post-title">Spectator Site</h6>
                                            <p class="post-intro">Online store with paypal payments intergration and guest user shopping</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div> */}
                                <div>
                                    <div class="card transition">
                                        <h2 class="transition">{projectsJSON.Spectator.title}</h2>
                                        <p>{projectsJSON.Spectator.text}</p>
                                        {/* <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div> */}
                                        {/* <div class="card_circle transition"></div> */}
                                        <div class="card_circle transition">
                                            <img class="card-img" src={projectsJSON.Spectator.image}/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div class="card transition">
                                        <h2 class="transition">{projectsJSON.theShaft.title}</h2>
                                        <p>{projectsJSON.theShaft.text}</p>
                                        {/* <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div> */}
                                        {/* <div class="card_circle transition"></div> */}
                                        <div class="card_circle transition">
                                            <img class="card-img" src={projectsJSON.theShaft.image}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card transition">
                                        <h2 class="transition">{projectsJSON.Loopy.title}</h2>
                                        <p>{projectsJSON.Loopy.text}</p>
                                        {/* <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div> */}
                                        {/* <div class="card_circle transition"></div> */}
                                        <div class="card_circle transition">
                                            <img class="card-img" src={projectsJSON.Loopy.image}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card transition">
                                        <h2 class="transition">{projectsJSON.ScoreIT.title}</h2>
                                        <p>{projectsJSON.ScoreIT.text}</p>
                                        {/* <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div> */}
                                        {/* <div class="card_circle transition"></div> */}
                                        <div class="card_circle transition">
                                            <img class="card-img" src={projectsJSON.ScoreIT.image}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card transition">
                                        <h2 class="transition">{projectsJSON.VocaSearchP.title}</h2>
                                        <p>{projectsJSON.VocaSearchP.text}</p>
                                        {/* <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div> */}
                                        {/* <div class="card_circle transition"></div> */}
                                        <div class="card_circle transition">
                                            <img class="card-img" src={projectsJSON.VocaSearchP.image}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card transition">
                                        <h2 class="transition">{projectsJSON.RPG.title}</h2>
                                        <p>{projectsJSON.RPG.text}</p>
                                        {/* <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div> */}
                                        {/* <div class="card_circle transition"></div> */}
                                        <div class="card_circle transition">
                                            <img class="card-img" src={projectsJSON.RPG.image}/>
                                        </div>
                                    </div>
                                </div>
                 
                                
                               

                            </div>
                            
                        </div>
                    </section>

                    <section class="s2" ref={this.props.sections[3].ref}>
                        
                        <div class="main-container contactMeContainer">
                            <a name="contact"></a>
                            <h3 className="categoryTitle" >Get In Touch!</h3>
                            {/* <div class="greeting-wrapper"> */}
                                <h3 className="subHeadline" >Send me an email at:</h3>
                                <a href="mailto: caroline.hoang@columbia.edu" target="_blank"><h2 className="emailHeadline">caroline.hoang@columbia.edu</h2></a>
                                <h3 className="subHeadline" >70 Morningside Drive, New York, NY 10027</h3>
                                <a href="mailto: caroline.hoang@columbia.edu" target="_blank"><h2 className="emailIcon"><i class="fa fa-envelope-open"></i></h2></a>
                                {/* <h3 className="nameHeadline">CS Student ○ Developer ○ Something</h3> */}
                                

                                {/* <h1 className="nameHeadline">Hi, I'm Caroline Hoang</h1> */}
                            {/* </div> */}
                            {/* <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p>
                            <div ><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%'  allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p> */}

                        </div>
                        {/* <div class="main-container">
                            <a href=""></a>
                            <h3 className="categoryTitle" >Get In Touch</h3>

                            <form id="contact-form">
                                <a name="contact1"></a>

                                <label>Name</label>
                                <input class="input-field" type="text" name="name" />

                                <label>Subject</label>
                                <input class="input-field" type="text" name="subject" />

                                <label>Email</label>
                                <input class="input-field" type="text" name="email" />

                                <label>Message</label>
                                <textarea class="input-field" name="message"></textarea>

                                <input id="submit-btn" type="submit" value="Send" />
                            </form>
                        </div> */}
                    </section> 

                    <section class="footer">
                        
                            <a href=""></a>
                            © 2018-2020 Caroline Hoang • NY • &nbsp; <a href="https://drive.google.com/drive/folders/13e-jBLED102tljJy7QB4QyvkRyVSNpzC?usp=sharing" target="_blank">Resume</a> &nbsp; • &nbsp; <a href="mailto: caroline.hoang@columbia.edu" target="_blank">Contact Me</a>
                            {/* <h3 className="categoryTitle" >Get In Touch</h3> */}

                            {/* <div class="previewContainer" >
                                        <div className="preview">
                                            <div id="corner-tl" class="corner"></div>
                                            <div id="corner-tr" class="corner"></div>
                                            <h3>Who am I?</h3>
                                            <p>I'm a rising Junior studying Computer Science at Columbia University.</p>
                                            <div id="corner-br" class="corner"></div>
                                            <div id="corner-bl" class="corner"></div>
                                        </div>
                                </div> */}
                    </section> 
                </div>
                <div class="float-sm">
                    
                    <a href="mailto: caroline.hoang@columbia.edu" target="_blank">
                        <div class="fl-fl float-tw">
                            <div class="mediaIcon"><i class="float-icon-font fa fa-envelope-open"></i></div>
                            <span> Contact Me!</span>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/13e-jBLED102tljJy7QB4QyvkRyVSNpzC?usp=sharing" target="_blank">
                        <div class="fl-fl float-gp">
                            <div class="mediaIcon"><i class="float-icon-font fa fa-file-alt"></i></div>
                            <span>My Resume!</span>
                        </div>
                    </a>
                    <a href="https://github.com/CarolineHoang/" target="_blank">
                        <div class="fl-fl float-rs">
                            <div class="mediaIcon"><i class="float-icon-font fa fa-github"></i></div>
                            <span>GitHub</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/carolinehoang/" target="_blank">
                        <div class="fl-fl float-ig">
                            <div class="mediaIcon"><i class="float-icon-font fa fa-linkedin"></i></div>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/caroline.hoang.35977/" target="_blank">
                        <div class="fl-fl float-pn">
                            <div class="mediaIcon"><i class="float-icon-font fa fa-facebook-f"></i></div>
                            <span>Facebook</span>
                        </div>
                    </a>
                </div>
                {/* <div class="backdrop">
                    <p class="text">Taitō <i class="fa fa-facebook"></i></p>
                </div>
                <div class="backdrop2 fl-fl float-tw">
                    <p class="text">Taitō</p>
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
            //                         <ButtonGZ class="button" id = "+" onClick={this.onChange} active={this.state.GroupSize +1 <= this.props.MAX_GROUP}>+</ButtonGZ>
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