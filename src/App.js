import React from 'react';
import './App.css';
import NavbarButton from './components/NavbarButton';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 'presentation'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    switch(this.state.content) {
      case 'aboutme':
        return <AboutMe />;
      case 'myprojects':
        return <MyProjects />;
      case 'contactme':
        return <ContactMe />;
      default:
        return <Presentation />;
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <div id='logo-container'>
            <button id='button-index' onClick={() => this.setState({content: 'presentation'})}>Dekkvar</button>
          </div>
          <div id='navbarButton-container'>
            <NavbarButton onClick={() => this.setState({content: 'aboutme'})}>About me</NavbarButton>
            <NavbarButton onClick={() => this.setState({content: 'myprojects'})}>My projects</NavbarButton>
            <NavbarButton onClick={() => this.setState({content: 'contactme'})}>Contact me</NavbarButton>
          </div>
        </header>
        <div id='content-container'>
          {this.handleClick()}
        </div>
      </div>
  );
  }
  
}


export default App;
