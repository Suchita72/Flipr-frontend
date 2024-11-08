import React from 'react';
import '../CssComponent/AboutUs.css';
import handshake from '../hand.svg';
import stair from '../stairs.svg'
import AuthorList from './AuthorList';
import Join from './Join';
const AboutUs = () => {
    return (
        <div className="about-us">
            {/* Intro Section */}
            <section className="intro">
                <h1>We are a team of content writers who share their learnings</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae arcu orci. Vivamus ac arcu quam.</p>
            </section>

            {/* Statistics Section */}
            <section className="statistics">
                <div className='hd'>
                <div className="stat">
                    <h2>12+</h2>
                    <p>Blog Writers</p>
                </div>
                <div className="stat">
                    <h2>18K+</h2>
                    <p>Daily Readers</p>
                </div>
                <div className="stat">
                    <h2>30K+</h2>
                    <p>Social Followers</p>
                </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values">
                <div className="value">
                    <h3>Creating valuable content</h3>
                    <p>Our mission is to provide valuable content for creative individuals around the world.</p>
                </div>
                <div className="value">
                    <h3>A platform for empowerment</h3>
                    <p>We empower individuals to improve their skills and grow personally and professionally.</p>
                </div>
            </section>

            {/* Team Section */}
            
            <section className="team">
                <div>
                <div >

                <h2>Our Team of Creatives</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae arcu orci.</p>
                </div>
                <div>
                <img  className='ig'src={handshake}alt="Our team" />
                </div>
                </div>
                <div className="story">
                    <h3>Why we started this Blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae arcu orci.</p>
                    <img  className='ig'src={stair} alt="Story" />
                
                
                
        
                </div>
            </section>

            <section>
                <AuthorList/>
            </section>

            {/* List of Authors */}
            {/* <section className="authors">
                <h2>List of Authors</h2>
                <div className="author-list">
                    {['Author 1', 'Author 2', 'Author 3', 'Author 4'].map((author, index) => (
                        <div className="author" key={index}>
                            <img src={`path/to/author${index+1}.jpg`} alt={author} />
                            <h3>{author}</h3>
                            <p>Position</p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Call to Action */}
            <Join/>
                   </div>
    );
};

export default AboutUs;
