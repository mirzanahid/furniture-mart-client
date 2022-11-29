import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import OurPartner from '../Home/OurPartner/OurPartner';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="category_title_header">
                <h3>Our Blog</h3>
            </div>
            <Container className='my-5 blog'>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
                                <Accordion.Body>
                                    <p>The differences between SQL vs NoSQL are:</p>
                                    <p>

                                    </p>
                                    <ul>
                                        <li><p>SQL databases are social, NoSQL databases are non-relational.</p></li>
                                        <li><p>SQL databases utilize organized inquiry dialect and have a predefined pattern. NoSQL databases have energetic mappings for unstructured information.</p></li>
                                        <li><p>SQL databases are vertically versatile, whereas NoSQL databases are evenly adaptable.</p></li>
                                        <li><p>SQL databases are table-based, whereas NoSQL databases are archive, key-value, chart, or wide-column stores.</p></li>
                                        <li><p>SQL databases are way better for multi-row exchanges, whereas NoSQL is superior for unstructured information like records or JSON.</p></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        JWT, or JSON Web Token, is an open standard utilized to share security data between two parties — a client and a server. Each JWT contains encoded JSON objects, counting a set of claims. JWTs are marked employing a cryptographic calculation to guarantee that the claims cannot be changed after the token is issued.
                                    </p>
                                    <p>JWTs can be broken down into three parts: header, payload, and signature. Each portion is isolated from the other by dab (.), and will take after the underneath structure: Header.Payload.Signature. The data contained within the header depicts the calculation utilized to produce the signature. All the claims inside JWT confirmation are put away in this part. Claims are utilized to supply confirmation to the party getting the token. For case, a server can set a claim saying 'isAdmin: true' and issue it to an regulatory client upon effectively logging into the application. The admin client can presently send this token in each resulting ask he/she sends to the server to demonstrate their character. The signature portion of a JWT is determined from the header and payload areas.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Differences Between Node.js and JavaScript:
                                    </p>
                                    <ul>
                                        <li><p>JavaScript may be a client-side scripting dialect that's lightweight, cross-platform, and deciphered. Both Java and HTML incorporate it. Node.js, on the other hand, could be a V8-based server-side programming dialect.</p></li>
                                        <li><p>JavaScript may be a basic programming dialect that can be utilized with any browser that has the JavaScript Motor introduced. Node.js, on the other hand, is an translator or execution environment for the JavaScript programming dialect.</p></li>
                                        <li><p>Any motor may run JavaScript. As a result, composing JavaScript is unimaginably simple, and any working environment is comparative to a total browser. Node.js, on the other hand, as it were empowers the V8 motor.</p></li>
                                        <li><p>A particular non-blocking operation is required to get to any working framework. There are many fundamental objects in JavaScript, but they are completely OS-specific.</p></li>
                                        <li><p>The basic benefits of JavaScript incorporate a wide choice of interfacing and intuitive and fair the correct sum of server contact and coordinate guest input.
                                            <br /><br />
                                            Node.js, on the other hand, offers hub bundle administration with over 500 modules and the capacity to handle numerous demands at the same time. It too offers the special capacity to empower microservice engineering and the Web of Things. Indeed when comparing hub js vs. respond js, hub js continuously wins.</p></li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                                    </p>
                                    <p>
                                        On the off chance that NodeJS can handle the ask without I/O blocking at that point the occasion circle would itself prepare the ask and sends the reaction back to the client by itself. But, it is conceivable to handle numerous demands parallelly utilizing the NodeJS cluster module or worker_threads module.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Blog;