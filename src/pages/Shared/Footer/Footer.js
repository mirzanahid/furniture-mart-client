import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-20">

                                        <div className="footer-logo mb-35">
                                            <Link ><img src="logo2.svg" alt="" className='' /></Link>
                                        </div>
                                        <div className="footer-pera">
                                            <p>Furniture Mart is always known for budget friendly products. We customize all the product category according to your budget posted by seller. </p>
                                        </div>
                                        <div className="footer-social">
                                            <Link ><FaFacebook></FaFacebook></Link>
                                            <Link ><FaInstagram></FaInstagram></Link>
                                            <Link ><FaTwitter></FaTwitter></Link>
                                            <Link ><FaWhatsapp></FaWhatsapp></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xl-1 col-xl-2 col-lg-2 col-md-4 col-sm-12">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Navigation</h4>
                                        <ul>
                                            <li><Link>Home</Link></li>
                                            <li><Link>About</Link></li>
                                            <li><Link>Services</Link></li>
                                            <li><Link>Blog</Link></li>
                                            <li><Link>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Services</h4>
                                        <ul>
                                            <li><Link>Care</Link></li>
                                            <li><Link>Treatment</Link></li>
                                            <li><Link>Trainingl</Link></li>
                                            <li><Link>Hygienic Care</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle mb-10">
                                        <h4>Subscribe newsletter</h4>
                                        <p>Subscribe our newsletter to get updates about our services and offers.</p>
                                    </div>

                                    <div className="footer-form mb-20">
                                        <div id="mc_embed_signup">
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>
                                                <button  type="submit" className='footer-btn'>
                                                    Submit
                                                </button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="Row">
                                <div className="Col-xl-12 ">
                                    <div className="footer-copy-right text-center">
                                        <p>Copyright ©2022 All rights reserved <Link to={'/'}>Furniture Mart</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;