import { Link } from "react-router-dom";
import resumePreview from "../assets/resume-builder.png";

function Hero() {
        return(
            <section className="hero">
                <div className="hero-left">
                    <h1>
                        Create Professional 
                        <br />
                        Resumes
                    </h1>

                    <h2>In Minutes</h2>

                    <p>
                        Build Beautiful, recruiter-friendly 
                        resumes in just a few simple steps.
                        Download and apply with confidence.
                    </p>

                    <Link to="/create-resume">
                    <button className="hero-btn">
                        Build Your Resume Now →
                        </button>
                        </Link>
                </div>

                <div className="hero-right">
                    <img 
                  
                    src={resumePreview}
                    alt="resume"
/>
               
               
                    </div>
            </section>
        );
}

export default Hero;