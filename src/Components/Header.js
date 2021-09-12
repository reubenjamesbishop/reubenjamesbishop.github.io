import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      // var profilepic= "images/"+this.props.data.image;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })

      var profilepic= "images/profilepic.jpg";

      var social = [
         {
           "name": "linkedin",
           "url": "https://www.linkedin.com/in/reubenbishop/",
           "className": "fa fa-linkedin"
         },
         {
           "name": "github",
           "url": "http://github.com/reubenjamesbishop",
           "className": "fa fa-github"
         }
       ]

       var networks=social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
       })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         {/* <img className="profile-pic"  src={profilepic} alt="Reuben Bishop Profile Pic" /> */}
            <h1 className="responsive-headline">Hi, I'm Reuben.</h1>
            <h3>Engineer, developer, and passionate about software, data science, technical leadership and continous learning.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
