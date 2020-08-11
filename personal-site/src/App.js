import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';


// const sections = ["Class Days", "Senior Profiles", "Senior Columns"]
// const sections = ["Home", "About Me", "Projects", "Contact Me"]

const sections =    [ 
                      {sectName:"Home", ref: null}, 
                      {sectName:"About Me", ref: null}, 
                      {sectName:"Projects", ref: null}, 
                      {sectName:"Contact Me", ref: null}
                    ]

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.classDaysRef = sections[0].ref = React.createRef()
    this.seniorProfRef = sections[1].ref = React.createRef()
    this.seniorColRef = sections[2].ref = React.createRef()
    this.seniorColRef1 = sections[3].ref = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
    this.navigateTo = this.navigateTo.bind(this)
    this.prevScroll = 0
    this.state = {
      navActive: 0
    }
  }

  navigateTo(i){
    switch(i) {
      case 0: 
        window.scrollTo({top: this.classDaysRef.current.offsetTop, behavior: 'smooth'})
        break
      case 1:
        window.scrollTo({top: this.seniorProfRef.current.offsetTop, behavior: 'smooth'})
        break
      case 2:
        window.scrollTo({top: this.seniorColRef.current.offsetTop, behavior: 'smooth'})
        break
      case 3:
          window.scrollTo({top: this.seniorColRef1.current.offsetTop, behavior: 'smooth'})
          break
      default:
        break
    }
  }



  componentDidMount(){
    console.log("hi")
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    const top1 = this.classDaysRef.current.offsetTop
    const top2 = this.seniorProfRef.current.offsetTop
    const top3 = this.seniorColRef.current.offsetTop
    const top4 = this.seniorColRef1.current.offsetTop
    const currScroll = window.scrollY
    const winHeight = window.innerHeight
    const adjustedScroll = currScroll + 0.4 * winHeight

    // let scrollingUp = this.prevScroll > window.scrollY

    if(adjustedScroll > top1 && adjustedScroll < top2){
      this.setState({navActive: 0})
    }
    if(adjustedScroll > top2 && adjustedScroll < top3){
      this.setState({navActive: 1})
    }
    if(adjustedScroll > top3 && adjustedScroll < top4){
      this.setState({navActive: 2})
    }
    if(adjustedScroll > top4 ){
      this.setState({navActive: 3})
    }

    this.prevScroll = currScroll
  }


  render(){
    return (
      <div className="App">
          {/* <header className="App-header"> */}
          <header >
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div className="nameHeadline">
              Caroline Hoang
            </div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            <Navbar  sections={sections} 
            active={this.state.navActive} sections={sections} navigateTo={this.navigateTo}
            />
            {/* _ref */}
            {/* <LandingPage   _ref={this.classDaysRef} /> */}
            {/* <LandingPage   _ref={this.seniorProfRef} />
            <LandingPage   _ref={this.eniorColRef} /> */}

            {/* <LandingPage   ref={this.classDaysRef} />
            <LandingPage   ref={this.seniorProfRef} />
            <LandingPage   ref={this.seniorColRef} /> */}

            <LandingPage  sections= {sections} classDaysRef={this.classDaysRef} seniorProfRef={this.seniorProfRef} seniorColRef={this.seniorColRef} />
            {/* A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/> */}

            
          </header>
        </div>
    );
  }
}

export default App;
