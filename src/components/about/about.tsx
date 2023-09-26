import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "./../../images/houssem.jpg"
import {Link} from 'react-router-dom'
import "./about.css"
const About = () => {
  return (
    <Container className='home-container mt-2'>
      <Row>
        <Col>
          <h1 className='first-title'>About <span className='me'>Me</span></h1>
          <div><img src={Logo} alt="logo" className='image' /></div>
          <h3 className='second-title'>Software Engineer</h3>
          <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dicta assumenda et vero quis repudiandae, voluptatum deleniti eveniet perferendis numquam delectus est repellendus nam? Quasi porro inventore perferendis ducimus!
          Magnam distinctio enim unde eius explicabo molestias doloribus nulla officiis neque amet porro, pariatur ad expedita officia possimus in! Magni odit explicabo itaque error quos facilis dolores harum temporibus? Exercitationem.
          Repellendus ratione debitis quisquam quis recusandae ad ullam sed voluptatibus inventore rem dolore adipisci voluptates praesentium sunt blanditiis ducimus in id obcaecati quia, pariatur reprehenderit mollitia culpa. Nihil, possimus praesentium!</p>
          <Link to="/education" className='btn btn-outline-primary btn-lg link-button'>Read More</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default About
