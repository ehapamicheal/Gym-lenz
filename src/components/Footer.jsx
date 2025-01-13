import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';





const Footer = () => {



    const CurrentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to="/" className="logo">
                   <img src={Logo} alt="Footer Logo" />
                </Link>

                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.
                </p>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/micheal-ehapa-3868a1242/" target="_blank" rel="noreferal noopener">
                        <FaLinkedin/>
                    </a>

                    <a href="https://web.facebook.com/profile.php?id=61555703157372" target="_blank" rel="noreferal noopener">
                        <FaFacebookF/>
                    </a>

                    <a href=" https://x.com/EhapaMchea43916" target="_blank" rel="noreferal noopener">
                        <AiOutlineTwitter/>
                    </a>

                    <a href="https://www.instagram.com/ehapamicheal1" target="_blank" rel="noreferal noopener">
                        <AiFillInstagram/>
                    </a>

                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link>Blog</Link>
                <Link>Case Studies</Link>
                <Link>Events</Link>
                <Link>Communities</Link>
                <Link>FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link>Support</Link>
            </article>

        </div>

        <div className="footer-copyright">
            <small>{CurrentYear} Michealehapa &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}


export default Footer;