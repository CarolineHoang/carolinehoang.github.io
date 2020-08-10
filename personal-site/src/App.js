import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';


const sections = ["Class Days", "Senior Profiles", "Senior Columns"]

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.classDaysRef = React.createRef()
    this.seniorProfRef = React.createRef()
    this.seniorColRef = React.createRef()
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
    if(adjustedScroll > top3){
      this.setState({navActive: 2})
    }

    this.prevScroll = currScroll
  }


render(){
  return (
    <div className="App">
        <header className="App-header">
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
          navigateTo={this.navigateTo}
          />
          _ref
          <LandingPage   _ref={this.classDaysRef} />
          <LandingPage   _ref={this.seniorProfRef} />
          <LandingPage   _ref={this.eniorColRef} />

          {/* <LandingPage  classDaysRef={this.classDaysRef} seniorProfRef={this.seniorProfRef} seniorColRef={this.eniorColRef} /> */}
          A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>A<br/>

          
        </header>
      </div>
  );
}
}

export default App;
