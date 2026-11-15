import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about section">
      <h2 id="about-title" className="section-title">
        .\ about me
      </h2>
      <div className="about-text">
        <p>
          I am currently pursuing a dual B.Sc. in Computer Science at{" "}
          <a
            className="about-highlight"
            href="https://www.provadis-hochschule.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Provadis School of International Management and Technology
          </a>{" "}
          in Frankfurt, Germany in partnership with{" "}
          <a
            className="about-highlight"
            href="https://de.toshibatec.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toshiba Tec Germany
          </a>
          , where I have previously completed my apprenticeship. Alongside my
          studies, I help businesses drive their digital transformation by
          implementing document management systems, primarily{" "}
          <a
            className="about-highlight"
            href="https://start.docuware.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DocuWare
          </a>
          . Outside of work and uni, I&apos;m a tech enthusiast who enjoys
          wasting electricity and drinking Paulaner Spezi.
        </p>
      </div>
    </section>
  );
}

export default About;
