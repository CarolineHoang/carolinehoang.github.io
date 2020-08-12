import React from "react";
// import styled from 'styled-components';
// import { theme } from "../util/GlobalStyles";
// import './App.css';


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





export default class LandingPage extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.classDaysRef = React.createRef()
    //     this.seniorProfRef = React.createRef()
    //     this.seniorColRef = React.createRef()
    //     this.handleScroll = this.handleScroll.bind(this)
    //     this.navigateTo = this.navigateTo.bind(this)
    //     this.prevScroll = 0
    //     this.state = {
    //       navActive: 0
    //     }
    //   }
    
    //   navigateTo(i){
    //     switch(i) {
    //       case 0: 
    //         window.scrollTo({top: this.classDaysRef.current.offsetTop, behavior: 'smooth'})
    //         break
    //       case 1:
    //         window.scrollTo({top: this.seniorProfRef.current.offsetTop, behavior: 'smooth'})
    //         break
    //       case 2:
    //         window.scrollTo({top: this.seniorColRef.current.offsetTop, behavior: 'smooth'})
    //         break
    //       default:
    //         break
    //     }
    //   }
    
    
    
    //   componentDidMount(){
    //     console.log("hi")
    //       window.addEventListener('scroll', this.handleScroll)
    //   }
    
    //   componentWillUnmount(){
    //       window.removeEventListener('scroll', this.handleScroll);
    //   }
    
    //   handleScroll(e){
    //     const top1 = this.classDaysRef.current.offsetTop
    //     const top2 = this.seniorProfRef.current.offsetTop
    //     const top3 = this.seniorColRef.current.offsetTop
    //     const currScroll = window.scrollY
    //     const winHeight = window.innerHeight
    //     const adjustedScroll = currScroll + 0.4 * winHeight
    
    //     // let scrollingUp = this.prevScroll > window.scrollY
    
    //     if(adjustedScroll > top1 && adjustedScroll < top2){
    //       this.setState({navActive: 0})
    //     }
    //     if(adjustedScroll > top2 && adjustedScroll < top3){
    //       this.setState({navActive: 1})
    //     }
    //     if(adjustedScroll > top3){
    //       this.setState({navActive: 2})
    //     }
    
    //     this.prevScroll = currScroll
    //   }
//
    // constructor(props) {
	//     super(props);

	//     this.state = {
    //         // showSchool: false,
    //         // showGroup: false,
    //         // showRoom: false,
    //         // Columbia: false,
    //         // Barnard: false,
    //         // GroupSize: 0,
    //         // Suite: false,
    //         // Single: false,
    //         // Double: false,
    //         // Triple: false
	//     };
    //     // this.onChange = this.onChange.bind(this);
    //     // this.toggle= this.toggle.bind(this);
    //     // this.clear= this.clear.bind(this);
    //     // this.unCheck= this.unCheck.bind(this);
    // }
//
    // onChange(e) {
    //     let target = e.target.id;

    //     if(target === "+") {
    //         this.setState({
    //             GroupSize:  ((this.state.GroupSize + 1) <= this.props.MAX_GROUP ) ? this.state.GroupSize + 1 : this.props.MAX_GROUP
    //         }, () => this.props.submit("", "", this.createPayload()))
    //     } else if(target === "-") {
    //         this.setState({
    //             GroupSize: ((this.state.GroupSize - 1) >= 0 ) ? this.state.GroupSize - 1 : 0
    //         }, () => this.props.submit("", "", this.createPayload()))
    //     } else if(String(target).startsWith("GroupSize")) {
    //         this.setState({
    //             GroupSize: 0
    //         }, () => this.props.submit("", "", this.createPayload()))
    //     } else { 
    //         this.setState({
    //             [target]: !this.state[target]
    //         }, () => this.props.submit("", "", this.createPayload()))
    //     }    
    // }
    
    // toggle(action,e) {
    //     // let action = e.target.id
    //     // console.log("action:" , action)
    //     if(action === "school") {
    //         this.setState({
    //             showSchool: !this.state.showSchool,
    //             showRoom: false,
    //             showGroup: false
    //         })
    //     }
    //     else if(action === "room") {
    //         this.setState({
    //             showRoom: !this.state.showRoom,
    //             showGroup: false,
    //             showSchool: false
    //         })
    //     }
    //     else if(action === "group") {
    //         this.setState({
    //             showGroup: !this.state.showGroup,
    //             showRoom: false,
    //             showSchool: false
    //         })
    //     }
    //     else{
    //         this.setState({
    //             showGroup: false,
    //             showRoom: false,
    //             showSchool: false
    //         })
    //     }
    // }

    // unCheck(value, e){
    //     let action = value;
    //     this.setState({
    //         [action]: !this.state[action]
    //     }, () => this.props.submit("", "", this.createPayload()))
    // }

    // createPayload() {
    //     let payload = {
    //         COLUMBIA: this.state.Columbia,
    //         BARNARD: this.state.Barnard,
    //         SINGLE_: this.state.Single,
    //         DOUBLE_: this.state.Double,
    //         TRIPLE_: this.state.Triple,
    //         SUITE_: this.state.Suite,
    //         GROUP_SIZE_1: this.state.GroupSize == 1,
    //         GROUP_SIZE_2: this.state.GroupSize == 2,
    //         GROUP_SIZE_3: this.state.GroupSize == 3,
    //         GROUP_SIZE_4: this.state.GroupSize == 4,
    //         GROUP_SIZE_5: this.state.GroupSize == 5,
    //         GROUP_SIZE_6: this.state.GroupSize == 6,
    //         GROUP_SIZE_7: this.state.GroupSize == 7,
    //         GROUP_SIZE_8: this.state.GroupSize == 8,
    //         GROUP_SIZE_9: this.state.GroupSize == 9,
    //         DORM: this.props.search
    //     }
    //     return payload;
    // }

    // clear() {
    //     this.setState({
    //         showSchool: false,
    //         showGroup: false,
    //         showRoom: false,
    //         Columbia: false,
    //         Barnard: false,
    //         GroupSize: 0,
    //         Suite: false,
    //         Single: false,
    //         Double: false,
    //         Triple: false
    //     }, () => this.props.submit("", "", this.createPayload()))
    // }
//
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
                        <div class="main-container">
                            <div class="greeting-wrapper">
                                <h1 className="nameHeadline">Caroline Hoang</h1>
                                {/* <h3 className="nameHeadline">CS Student ○ Developer ○ Something</h3> */}
                                <h3 className="subHeadline" >CS Student, Developer, Something</h3>

                                {/* <h1 className="nameHeadline">Hi, I'm Caroline Hoang</h1> */}
                            </div>
                            {/* <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p>
                            <div ><iframe src='https://gfycat.com/ifr/GrandFirstBalloonfish' frameborder='0' scrolling='no' width='100%' height='100%'  allowfullscreen></iframe></div><p> <a href="https://gfycat.com/grandfirstballoonfish-instrumental-hip-hop-casey-neistat-music">via Gfycat</a></p> */}


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
                                        <li><a href="#contact1">Contact</a></li>

                                    </ul>
                                </div>

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
                                </div>

                                <div class="right-column">

                                    <div id="preview-shadow">
                                        <div id="preview">
                                            <div id="corner-tl" class="corner"></div>
                                            <div id="corner-tr" class="corner"></div>
                                            <h3>Who am I?</h3>
                                            <p>I'm a rising Junior studying Computer Science at Columbia University.</p>
                                            <div id="corner-br" class="corner"></div>
                                            <div id="corner-bl" class="corner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="s2 " ref={this.props.sections[1].ref}>
                        <div class="main-container panelShade">

                            <div class="about-wrapper">
                                <div class="about-me">
                                    <h4>More about me</h4>

                                    <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>

                                    <p>While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.</p>


                                    <hr/>

                                    <h4>TOP EXPERTISE</h4>

                                    <p>Fullstack developer with primary focus on Django + React: <a target="_blank" href="resume.pdf">Download Resume</a></p>

                                    <div id="skills">
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

                                    </div>

                                </div>

                                
                                <div class="social-links">
                                    <img id="social_img" src="images/follow.jpg" />
                                    <h3>Find me on Twitter & Youtube</h3>

                                    <a target="_blank" href="https://www.youtube.com/c/dennisivy">YouTube: @DennisIvy</a>
                                    <br/>
                                    <a target="_blank" href="https://twitter.com/dennisivy11">Twitter: @DennisIvy11</a>
                                </div>
                            </div>

                        </div>
                    </section>
                </div> 
                <div className= "landingImage-backwards">
                    <section className="s1" ref={this.props.sections[2].ref}>
                        <div class="main-container">
                            <h3 className='categoryTitle' >Some of my Projects</h3>

                            <div class="post-wrapper">

                                <div      >
                                    <div class="post">
                                        {/* <img class="thumbnail" src="images/dash.jpg" /> */}
                                        {/* <iframe src="https://www.columbiaspectator.com/" class="thumbnail"></iframe> */}
                                        {/* <object  type="text/html" data="https://www.sitepoint.com/community/t/embed-a-webpage-within-another-webpage/230037/4"></object> */}
                                        <img class="thumbnail" src="images/dash.jpg" />
                                        <div class="post-preview">
                                            <h6 class="post-title">ScoreIT</h6>
                                            <p class="post-intro">Designed built & mantained a the lab managment system for FOI Laboratories</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="post">
                                        <img class="thumbnail" src="images/ecom.jpg" />
                                        <div class="post-preview">
                                            <h6 class="post-title">Spectator Site</h6>
                                            <p class="post-intro">Online store with paypal payments intergration and guest user shopping</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="post">
                                        <img class="thumbnail" src="images/membership site.jpg" />
                                        <div class="post-preview">
                                            <h6 class="post-title">The Shaft</h6>
                                            <p class="post-intro">Modulized guide for online courses with step by  step intructions</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="post">
                                        <img class="thumbnail" src="images/membership site.jpg" />
                                        <div class="post-preview">
                                            <h6 class="post-title">Vocaloid Site</h6>
                                            <p class="post-intro">Modulized guide for online courses with step by  step intructions</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div></div> */}
                                <div>
                                    <div class="post">
                                        <img class="thumbnail" src="images/membership site.jpg" />
                                        <div class="post-preview">
                                            <h6 class="post-title">Looper</h6>
                                            <p class="post-intro">Modulized guide for online courses with step by  step intructions</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="post">
                                        <img class="thumbnail" src="images/membership site.jpg" />
                                        <div class="post-preview">
                                            <h6 class="post-title">RPG</h6>
                                            <p class="post-intro">Modulized guide for online courses with step by  step intructions</p>
                                            <a href="post.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div></div> */}

                            </div>
                        </div>
                    </section>

                    <section class="s2" ref={this.props.sections[3].ref}>
                        <div class="main-container">
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
                        </div>
                    </section> 

                    <section class="footer">
                        
                            <a href=""></a>
                            Copyright Caroline Hoang . Resume . Contaact Me
                            {/* <h3 className="categoryTitle" >Get In Touch</h3> */}

            
                    </section> 
                </div>
                <div class="float-sm">
                    {/* <div class="backdrop float-right">
                        <p class="text">Taitō <i class="fa fa-facebook"></i></p>
                    </div> */}
                    {/* <div class="text "> Like us!</div> */}
                    
                    {/* <div class="fl-fl float-fb"> */}
                                {/* <i class="fa fa-facebook"></i> */}
                        {/* <p class="text backdrop2"> Like us!</p> */}
                                {/* <a href="" target="_blank"> Like us!</a> */}
                    {/* </div> */}


                    {/* <div class="fl-fl float-tw">
                        <div class="mediaIcon"><i class="fa fa-twitter"></i></div>
                        <a href="" target="_blank">Follow us!</a>
                    </div>
                    <div class="fl-fl float-gp">
                        <div class="mediaIcon"><i class="fa fa-google-plus"></i></div>
                        <a href="" target="_blank">Recommend us!</a>
                    </div>
                    <div class="fl-fl float-rs">
                        <div class="mediaIcon"><i class="fa fa-rss"></i></div>
                        <a href="" target="_blank">Follow via RSS</a>
                    </div>
                    <div class="fl-fl float-ig">
                        <div class="mediaIcon"><i class="fa fa-instagram"></i></div>
                        <a href="" target="_blank">Follow us!</a>
                    </div>
                    <div class="fl-fl float-pn">
                        <div class="mediaIcon"><i class="fa fa-pinterest"></i></div>
                        <a href="" target="_blank">Follow us!</a>
                    </div> */}
                    <a href="mailto: caroline.hoang@columbia.edu" target="_blank">
                        <div class="fl-fl float-tw">
                            <div class="mediaIcon"><i class="fa fa-envelope-open"></i></div>
                            <span> Contact Me!</span>
                        </div>
                    </a>
                    <a href="mailto: caroline.hoang@columbia.edu" target="_blank">
                        <div class="fl-fl float-gp">
                            <div class="mediaIcon"><i class="fa fa-file-alt"></i></div>
                            <span>My Resume!</span>
                        </div>
                    </a>
                    <a href="https://github.com/CarolineHoang/" target="_blank">
                        <div class="fl-fl float-rs">
                            <div class="mediaIcon"><i class="fa fa-github"></i></div>
                            <span>GitHub</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/carolinehoang/" target="_blank">
                        <div class="fl-fl float-ig">
                            <div class="mediaIcon"><i class="fa fa-linkedin"></i></div>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/caroline.hoang.35977/" target="_blank">
                        <div class="fl-fl float-pn">
                            <div class="mediaIcon"><i class="fa fa-facebook-f"></i></div>
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