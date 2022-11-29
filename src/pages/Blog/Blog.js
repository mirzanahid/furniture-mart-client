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
                                <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
                                <Accordion.Body>
                                    <p>The state makes a difference in keeping the information of diverse components in adjust since each state overhaul will re-render all important components. It can too act as a medium to communicate between different components.
                                    </p>
                                    <p>
                                        There are four fundamental sorts of state you would like to appropriately oversee in your Respond apps:
                                    </p>
                                    <ul>
                                        <li><p>Server state.</p></li>
                                        <li><p>Global state </p></li>
                                        <li><p>Local state</p></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is a unit test? Why should we write unit tests?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        A unit test is basically a method that makes a little segment of our program and checks its usefulness separated from other components. Ordinarily, a unit test comprises three stages: The framework beneath test, frequently known as the SUT, is initialized to begin with. Another, a boost is connected to the framework beneath test (ordinarily by conjuring a method on it), and after that the behavior that comes about is watched. The unit test succeeds in case the watched behavior matches the desires; on the off chance that not, it falls flat, recommending that there's a blame with the framework being tried. The acronym AAA, or organize, act, and attest, is another title for these three unit test steps.
                                    </p>
                                    <p>
                                        Composing testable code clearly needs a few self-control, center, and additional work. In any case, making program could be a complicated mental handle, so we ought to continuously work out caution and abstain from quickly slapping unused code together off the beat of our heads. We'll get clean, reusable, freely coupled, simple to preserve APIs as a remunerate for this appropriate computer program quality confirmation activity that won't harmed developers' brains when they attempt to get it them. The capacity to effectively get it, keep up, and amplify that code is eventually what makes testable code predominant to non-testable code.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>React vs. Angular vs. Vue</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <span className='font-weight-bold'>Angular:</span>
                                        AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

                                        Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time.
                                    </p>

                                    <p>
                                        <span className='font-weight-bold'>React:</span>
                                        Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                                        One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times In a positive way.
                                    </p>
                                    <p>
                                        <span className='font-weight-bold'>Vue:</span>
                                        Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

                                        Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it's simple to use and connect with other libraries or applications. This framework's fast learning angle is almost a trademark. It's a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
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