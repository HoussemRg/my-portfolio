import React from 'react'
import "./home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "./../../images/houssem.jpg"
import Typed from 'react-typed';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Github from "./../../images/github.png"
import Linkedin from "./../../images/linkdeen.png"
import Facebook from "./../../images/facebook.png"
export default function Home() {
  return (
    <Container className='home-container'>
      <Row>
        <Col sm={8}>
          <h5 className="hello">Hello !</h5>
          <h1 className='name'>I am Houssem</h1>
          <Typed
            className='text-typed'
            strings={['Sofware Engineer']}
            typeSpeed={40}
            backSpeed={60}
            loop
           />
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consect
            etur dicta! Quisquam fuga quibusdam enim repudiandae excepturi veniam est n
            ulla cupiditate, porro corporis officiis, dolore repellat! Itaque, fuga minima? Saepe!
          Molestias, error, est molestias obcaecati dolores cumque,
          Commodi rente voluatibus?</p>
          <div className="buttons text-center me-auto">
            <Button variant="outline-primary" className='cv-button btn-lg'>Download CV</Button>
            <Link to="/contact" className='btn btn-outline-primary btn-lg link-button'>Contact Me</Link>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/houssem-regaieg-589526258/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin-icon" className='linkedin-icon' /></a>
            <a href="https://www.facebook.com/profile.php?id=100009183349705" target="_blank" rel="noreferrer"><img src={Facebook} alt="facebook-icon" className='facebook-icon' /></a>
            <a href="https://github.com/HoussemRg" target="_blank" rel="noreferrer"><img src={Github} alt="github-icon" className='github-icon'/></a>
          </div>
        </Col>
        <Col sm={4} className="text-center align-self-center"><img src={Logo} alt="logo" className='image' /></Col>
      </Row>
    </Container>
  )
}
