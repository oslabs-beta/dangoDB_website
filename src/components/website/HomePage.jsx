import React from 'react';
import Hero from '../Hero';
import HomeFooter from '../HomeFooter'
import { SiMongodb } from 'react-icons/si';
import { AiFillDatabase } from 'react-icons/ai';
import { FaDatabase } from 'react-icons/fa';



function Home() {
    return (
       <section className="home-container">
            <section className="home-hero-container main-content">
                <Hero/>
                <section className="main-description">
                    {/* <h1>What is 
                        <div className="dango-text"> dangoDB</div>
                        ?
                    </h1> */}
                    <p>
                        <strong className="dango-text">dangoDB </strong> 
                        is a light-weight
                        <a href="https://www.mongodb.com/"> MongoDB </a>
                        Object Document Mapper (ODM) built for 
                        <a href="https://deno.land/"> Deno</a>
                        . It provides the core functionality and familiar look and feel of established Node-based libraries for the Deno runtime.
                    </p> 
                </section>
            </section>
            <section className="main-features main-content">
                <section className="feature">
                    <SiMongodb className='feature-icon' />
                    <h2 className="feature-title">Validate</h2>
                    <p className="feature-description">Implement data type-casting and schema validation to structure your database.</p>
                </section>
                <section className="feature middle-feature">
                    <FaDatabase className='feature-icon' />
                    <h2 className="feature-title">Query</h2>
                    <p className="feature-description">Make quick, model-based queries to your MongoDB database.</p>
                </section>
                <section className="feature">
                    <AiFillDatabase className='feature-icon' />
                    <h2 className="feature-title">Simplify</h2>
                    <p className="feature-description">Allow the library to abstract away connection and driver boilerplate.</p>
                </section>
            </section>
            <section className="main-get-started main-content">
                <h2 className="get-started-title">Get Started</h2>
                <section className="get-started-content">
                    
                    <a href="https://deno.land/x/dangodb" className="get-started-content-container">
                        <h3 className="get-started-content-title">Import the Library</h3>
                        <p className="get-started-content-description">Head over to Deno.land to import the dangoDB library, connect to your MongoDB instance, and get started in just minutes.</p>
                    </a>
                    
                    <a href="#/schema" className="get-started-content-container">
                        <h3 className="get-started-content-title">Design Your Schema</h3>
                        <p className="get-started-content-description">Build your schema with our easy-to-use schema generator. With just a few clicks, you can copy and paste your new schema straight to your codebase.</p>
                    </a>
                </section>
            </section>
            <HomeFooter />
       </section>
    );
}

export default Home;