import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


function Process() {
  return (
    <div>
        <Container fluid>
            <Row className="processrow">
                <Col>
                <div>
                <Image src='asset/i1.webp' id='img1'/>
                <div>
                    <h1>Fast Delivery</h1>
                    <p>Delivery to over 130 countries</p>
                </div>
                </div>
                </Col>
                <Col>
                <div >
                <Image src='asset/i2.webp' id='img2'/>
                <div>
                    <h1>Finest Edit in luxury</h1>
                    <p>Finest edit of more than 200 international luxury brands</p>
                </div>
                
                </div>
                </Col>
                <Col>
                <Image src='asset/i3.webp' id='img3'/>
                <div id="ej">
                    <h1>Designer Collaborations</h1>
                    <p>Exclusive capsule collections that you won't find anywhere else</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Process;