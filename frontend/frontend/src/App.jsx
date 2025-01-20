import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
        <div class="container">
            <div class="header">
                <img src="https://via.placeholder.com/120" alt="Profile Picture"></img>
                <h1>Vinushree Selvan</h1>
                <p>Aspiring Electronics and Communication Engineer | Embedded Systems Enthusiast</p>
            </div>
    
            <div class="section about">
                <h2>About Me</h2>
                <p>I am a dedicated engineering student passionate about designing innovative embedded systems and exploring the realms of signal processing and wireless communication.</p>
            </div>
    
            <div class="section skills">
                <h2>Skills</h2>
                <div class="skill">
                    <h3>Embedded Systems</h3>
                </div>
                <div class="skill">
                    <h3>Signal Processing</h3>
                </div>
                <div class="skill">
                    <h3>Wireless Communication</h3>
                </div>
            </div>
    
            <div class="section projects">
                <h2>Projects</h2>
                <div class="project">
                    <h3>Smart Wheelchair</h3>
                    <p>Integrating Raspberry Pi Pico with GPS, motors, and mobile app control.</p>
                </div>
                <div class="project">
                    <h3>IoT Home Automation</h3>
                    <p>Developed a system to control home appliances remotely.</p>
                </div>
            </div>
    
            <div class="section contact">
                <h2>Contact Me</h2>
                <a href="mailto:john.doe@example.com">Email</a>
                <a href="https://linkedin.com/in/johndoe">LinkedIn</a>
            </div>
        </div>
        </>
  )
}


export default App