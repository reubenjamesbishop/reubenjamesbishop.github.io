import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p>
        </div>
      })
      
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <div>
                  <h3>The University of Adelaide</h3>
                  <p className="info">Bachelor (Honours) Mechanical Engineering, 2016-2020</p>
                  <p>Awarded with First Class Honours. GPA: 6.250/7.000</p>
                  <p className="info">Bachelor of Mathematical and Computer Sciences, 2016-2020</p>
                  <p>Computer Science Major. GPA: 6.250/7.000</p>
                  {/* <p>{education.description}</p> */}
                </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          
         
          <div key="Lockheed Martin"><h3>Lockheed Martin</h3>
          <details open>
            <summary className="summaryInfo">
              <p className="info">Associate Software Engineer<span>&bull;</span> <em className="date">Febraury 2021 - Present</em></p>
            </summary>
            <p>
              &bull; Component lead for Tactical and Payload Control software system, as part of Future Submarine Program. <br/>
              &bull; Introduced Agile methodologies to Tactical, Weapons and Deployables group, significanlty improving productivity and team accountability. <br/>
              &bull; Developed and matinained subsystem requirements and performance specifications for payload and tactical control systems. <br/>
              &bull; Presented at design review conference to Lockheed Martin and Australian Commonwealth Senior Executive Leadership teams. <br/>
            </p>
          </details>

          <details open>
            <summary className="summaryInfo">
            <p className="info">Co-Op Technical Senior<span>&bull;</span> <em className="date">September 2020 - February 2021</em></p>
            </summary>
            <p>
              &bull; Worked with small team to design and develop internally facing prototype web application for the management of training courses and certifications. <br/>
              &bull; Rapidly upskilled in several technologies including React, Express, NodeJS and SQLite3. <br/>
              &bull; Used GitLab for version control, code review, testing and continous integration. <br/>
            </p>
            </details>
          </div>
          

          <div key="iO Energy"><h3>iO Energy</h3>
          <details open>
            <summary className="summaryInfo">
            <p className="info">Software Engineer<span>&bull;</span> <em className="date">June 2021 - Present</em></p>
            </summary>
            <p>
              &bull; Designed and developed cloud-native service for retrieving and processing new customer power meter data with AWS and Selenium, saving approximately 15 minutes per customer acquisition. <br/>
              &bull; Developed and implemented serverless architecture for automated bill comparison based on AWS Lambda functions and s3 storage.<br/>
              &bull; Developed and tested internal REST APIs to manage customer onboarding process with AWS, API Gateway, Postman and Python. <br/>
              &bull; Collaborated with AIML on machine learning project for accurate prediction of new customer energy load profiles. <br/>
            </p>
            </details>
          </div>
          

          <div key="Resolution Systems"><h3>Resolution Systems</h3>
          <details open>
            <summary className="summaryInfo">
            <p className="info">Data Labelling Engineer<span>&bull;</span> <em className="date">June 2020 - February 2021</em></p>
            </summary>
            <p>
              &bull; Developed mine site surface mapping algorithm for visualising changing topology in 3D, improving speed of existing method by several minutes per analysis. <br/>
              &bull; Designed and conducted a Fleet Management System case study to compare haul-truck load and dump accuracy between MaxMine and competitors. Formally presented results to executive management team and international clients. <br/>
              &bull; Maintained and improved multiple features for internal legacy labelling tool.<br/>
              &bull; Produced detailed haul-truck operation ground truth data sets for machine learning applications, managed via Git.<br/>
            </p>
            </details>
          </div>

          <div key="Micro-X"><h3>Micro-X</h3>
          <details open>
            <summary className="summaryInfo">
            <p className="info">Undergraduate Mechanical Engineer<span>&bull;</span> <em className="date">November 2018 - February 2019</em></p>
            </summary>
            <p>
              &bull; Solved several significant quality issues on flagship X-Ray device through component redesign. <br/>
              &bull; Designed multiple jigs and fictures, increasing manufacturing and test team efficiency. <br/>
              &bull; Produced detailed technical drawings for both contracted manufacturers and internal use. <br/>
              &bull; Drafted reports and documentation for QA, manufacturing, testing and R<span>&#38;</span>D teams. <br/>
            </p>
            </details>
          </div>

        </div>
    </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Personal Projects</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">

           <div key="Acture"><h3>Acture.io</h3>
            <p className="info"><a href="www.google.com">www.acture.com</a><span>&bull;</span> <em className="date">November 2018 - February 2019</em></p>
            <p>
              &bull; Co-Founder of Acture, a software platform that's helping digital advertisers automatically create more engaging social content using big data. <br/>
              &bull; Winner of the Enabled Solutions eChallenge prize, 2020.<br/>
              &bull; Developing structured and unstructured data collection pipelines with Python + Selenium for automated collection of Instagram data sets, including data cleaning, processing, feature engineering and warehousing.<br/>
              &bull; Developing data processing modules with a range of dimensionality reduction, deep learning, natural language processing and computer vision techniques.<br/>
              &bull; Conducted customer research, UI/UX design, business strategy an investor pitches.<br/>
            </p>
          </div>

          <div key="Other Projects"><h3>Other Projects</h3>
            <p>
              &bull; <a>Plaid! The Game</a>. Adelaide University Game-Jam, People's Choice Winner. <i>ThreeJS.</i><br/>
              &bull; <a>River's End Retreat</a>. Commercial Website. <i>ReactJS + Heroku CI/CD)</i><br/>
              &bull; <a>Multi-resolution Image Viewer</a>. Broswer-based Google street-view clone. <i>ThreeJS.</i><br/>
              &bull; Mechanical Engineering Honours Project in underwater energy harvesting using magnetostrictive materials.<br/>
            </p>
          </div>

				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
