// This navbar is adapted and improved from the navbar I built for Columbia Daily Spectator's 2019 Commencement Article
// This version handles mobile and desktop views from just the css without the additional MobileAndTablet import. 
// It also does not require the reversal of the nav items

import React from 'react';

export default class Navbar extends React.Component {
    render(){
        const NavItems = this.props.sections.map((el, i)=>(
            <div className = "navItem" key={i} 
            // active={"false"}
            active={this.props.active === i ? "true" : "false"} 
            // active={this.props.active === i} 
            onClick={()=>{this.props.navigateTo(i); console.log(i)}}>
                {el.sectName}
            </div>
        ))
        // Because css only supports writing downwards and we want to write upwards, we
        // are rotating the whole thing by 180deg and reversing the items
        return (
            <div className = "navbarWrapper">
                <div className = "navbarWrapperInner">
                    <div className = "navbarWrapperInner2">
                        <div className = "crownLogo" href= "https://www.columbiaspectator.com/"/>
                        <div className = "itemContainer navOptions">
                            {[...NavItems]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}