import React from "react";
import '../stylesheets/MyProjects.css'
import FCCCertifications from "./FCCCertifications";
import AllProjects from "./AllProjects";

class MyProjects extends React.Component {
  constructor() {
    super();
    this.state={
      folder: 'allprojects'
    }
    this.handleFolder = this.handleFolder.bind(this);
  }

  handleFolder() {
    switch(this.state.folder) {
      case 'FCCCertifications':
        return <FCCCertifications />;
      default:
        return <AllProjects />;
    }
  }

  render() {
    return (
      <div className='myprojects-container'>
        <h2>My projects</h2>
        <div className='folders-container'>
          <FoldersButton 
            onClick={(this.state.folder === 'FCCCertifications') ? (() => this.setState({folder: 'allprojects'})) : (() => this.setState({folder: 'FCCCertifications'}))}
            icon={this.state.folder === 'FCCCertifications' ? 'fa-folder-open' : 'fa-folder'}>FreeCodeCamp Certifications</FoldersButton>
          <FoldersButton
            onClick={(this.state.folder === 'OtherProjects') ? (() => this.setState({folder: 'allprojects'})) : (() => this.setState({folder: 'OtherProjects'}))}
            icon={this.state.folder === 'OtherProjects' ? 'fa-folder-open' : 'fa-folder'}>Other Projects</FoldersButton>
        </div>
        <div className='projects-transition'>
          {this.handleFolder()}
        </div>
      </div>
    )
  }
}
  

function FoldersButton(props) {
  return(
    <button className='foldersButton' onClick={props.onClick}>
      <i class={`fa-solid ${props.icon}`}></i>
      {props.children}
    </button>
  )
}


export default MyProjects;