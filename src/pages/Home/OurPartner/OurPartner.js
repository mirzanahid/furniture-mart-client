import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import partner1 from '../../../assets/partner01.jpg'
import partner2 from '../../../assets/partner02.jpg'
import partner3 from '../../../assets/partner03.jpg'
import partner4 from '../../../assets/partner04.jpg'

const OurPartner = () => {
    return (
        <div>
            <Container>
                <h3 className='section_heading my-5'>Our Partner</h3>
                <Row className='d-flex align-items-center my-5'>
                    <Col lg='3'><img src={partner1} alt="" /></Col>
                    <Col lg='3'><img src={partner2} alt="" /></Col>
                    <Col lg='3'><img src={partner3} alt="" /></Col>
                    <Col lg='3'><img src={partner4} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurPartner;