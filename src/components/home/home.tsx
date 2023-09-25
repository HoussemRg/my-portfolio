import React from 'react'
import "./home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "./../../images/houssem.jpg"
import Typed from 'react-typed';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

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
            <Button variant="outline-primary" className='cv-button' size='lg'>Download CV</Button>
            <Button variant="outline-primary" className='contact' size='lg'><Link to="/contact" className='contact-link'>Contact Me</Link></Button>
          </div>
          <div className="social-media"></div>
        </Col>
        <Col sm={4} className="text-center"><img src={Logo} alt="logo" className='image' /></Col>
      </Row>
    </Container>
  )
}
