import React from "react";

function AllProjects() {
  const projects = [
    {
      name: 'Random Quote Machine',
      image: '',
      url: 'https://codepen.io/Dekkvar/full/eYyzmwQ'
    },{
      name: 'JavaScript Calculator',
      image: '',
      url: 'https://codepen.io/Dekkvar/full/ExovBgw'
    },{
      name: 'React Pomodoro',
      image: '',
      url: 'https://codepen.io/Dekkvar/full/WNddVMw'
    }
  ];

  return(
    <div className='projects-view'>
      <Projects name={projects[0].name} image={projects[0].image} url={projects[0].url} />
      <Projects name={projects[1].name} image={projects[1].image} url={projects[1].url} />
      <Projects name={projects[2].name} image={projects[2].image} url={projects[2].url} />
    </div>
  )
};

function Projects(props) {
  return (
    <div className='projectsView-container'>
      <a href={props.url} target='_blank' rel='noreferrer'>
        <img src={props.image} alt={props.name} />
        <div className='project-title'><span>{props.name}</span></div>
      </a>
    </div>
  )
};

export default AllProjects;