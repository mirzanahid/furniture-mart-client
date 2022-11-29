import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import partner1 from '../../../assets/partner01.jpg'
import partner2 from '../../../assets/partner02.jpg'
import partner3 from '../../../assets/partner03.jpg'
import partner4 from '../../../assets/partner04.jpg'

const OurPartner = () => {
    return (
        <div className='mb-6'>
            <Container>
                <div className="title my-5">
                    <h3 className='section_heading'>Our Partners</h3>
                </div>

                <Row className='d-flex align-items-center my-5'>
                    <Col lg='3' sm='6' md='3' className='text-center'><img src={partner1} alt="" /></Col>
                    <Col lg='3' sm='6' md='3' className='text-center'><img src={partner2} alt="" /></Col>
                    <Col lg='3' sm='6' md='3' className='text-center'><img src={partner3} alt="" /></Col>
                    <Col lg='3' sm='6' md='3' className='text-center'><img src={partner4} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurPartner;