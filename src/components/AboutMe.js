import React from "react";
import '../stylesheets/AboutMe.css'

function AboutMe() {
  return (
    <div className='aboutMe-container'>
      <div className='img-container'>
        <img src='../images/me.png' alt='me' />
      </div>
      <div className='information-container'>
        <h2>Who I am?</h2>
        <div>My name is <strong>Aitor Couñago Figueroa</strong>. I was a physical therapist and now I like to resolve some coding problems.</div>
        <div>The first time I seriously meet the software development was when my brother-in-law went to study a bootcamp in London and showed me some of the things he developed and how the software development works.</div>
        <div>I love logic and puzzles, so I immediately saw the charm of programming. However, it wasn't until I had a patient, who was a senior software developer, that I seriously considered leaving my profession. He encouraged me to take the step and he told me something that lit the spark in my head: it is a profession in which you can grow.</div>
        <div>I love physical therapy and I fought really hard to get into university to become a physical therapist, but it is a profession where there is zero room for growth. So I thought, if I can become a physical therapist, I can become a software developer.</div>
      </div>
    </div>
  )
}

export default AboutMe;