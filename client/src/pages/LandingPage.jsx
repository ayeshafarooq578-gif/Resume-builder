import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="features-section">
        <h2>Why Choose Us?</h2>

        <div className="cards">
          <FeatureCard
            title="Modern Templates"
            description="Choose from professional resume templates."
          />

          <FeatureCard
            title="Easy to Customize"
            description="Fill your information quickly and easily."
          />

          <FeatureCard
            title="Download as PDF"
            description="Export your resume instantly."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;