import React from "react";

function FCCCertifications() {
  const fcccertification = [
    {
      name: 'Responsive Web Design Certification',
      image: '../images/FCC Responsive Web Design.png',
      url: 'https://freecodecamp.org/certification/Dekkvar/responsive-web-design'
    },{
      name: 'JavaScript Algorithms and Data Structures Certification',
      image: '../images/FCC JavaScript Algorithms and Data Structures.png',
      url: 'https://freecodecamp.org/certification/Dekkvar/javascript-algorithms-and-data-structures'
    },{
      name: 'Front End Development Libraries Certification',
      image: '../images/FCC Front End Development Libraries.png',
      url: 'https://freecodecamp.org/certification/Dekkvar/front-end-development-libraries'
    }
  ];

  return(
    <div className='projects-view'>
      <Certification name={fcccertification[0].name} image={fcccertification[0].image} url={fcccertification[0].url} />
      <Certification name={fcccertification[1].name} image={fcccertification[1].image} url={fcccertification[1].url} />
      <Certification name={fcccertification[2].name} image={fcccertification[2].image} url={fcccertification[2].url} />
    </div>
  )
};

function Certification(props) {
  return (
    <div className='projectsView-container'>
      <a href={props.url} target='_blank' rel='noreferrer'>
        <img src={props.image} alt={props.name} />
        <div className='project-title'><span>{props.name}</span></div>
      </a>
    </div>
  )
};

export default FCCCertifications;