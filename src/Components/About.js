import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var profilepic= "images/"+this.props.data.image;
      var profilepic= "images/profilepic.jpg";
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row testrow" >
         <div className="four columns minor-col">
            <img className="profile-pic"  src={profilepic} alt="Reuben Bishop Profile Pic" />
            <div className="row">
               <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
               </div>
            </div>
         </div>
         <div className="eight columns main-col">
            <h2>About Me</h2>
            {/* <p>{bio}</p> */}
            <p>
               Hi! My name is Reuben Bishop, and I'm an engineer based out of Adelaide, Australia. 
               I love learning and making things, and I'm always down to jump on a new project or pickup another technology. 
               I'm particularly keen on data science, machine learning, cloud, full stack web development and technical leadership. 
               While I'm mainly interested in software nowadays, I also love design and build projects and have a strong mechanical engineering background. 
               <br/><br/>
               Between freelance work, contracting, internships and my full time gig, I've had experience in a wide range of industries including medical, mining, technology, defence and energy. 
               Please reach out to me if you have any questions, or just want to chat!
            </p>
            <div className="row">
               <div className="columns download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                  </p>
               </div>
            </div>
         </div>
      </div>



   </section>
    );
  }
}

export default About;
