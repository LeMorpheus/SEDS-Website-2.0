import style from "../pages/posts/Posts.module.css";

export default function Post3Content() {
  return (
    <div className={style.postContent}>
      <h1>Spaceport America Cup</h1>
      <img src="image2.jpg" alt="Rocket Fuel Image" className={style.image} />
      <p>
        In SEDS, we work together as different teams to achieve our goals in a more specialized way. 
        Our rocketry team, named <span className={style.highlight}>Artemis</span>, comprises around 25 
        highly enthusiastic and determined individuals passionately working towards their mission objectives.
      </p>

      <section>
        <h2>The Competition</h2>
        <p>
          The main goal of Team Artemis is to build rockets and participate in the{" "}
          <span className={style.highlight}>Spaceport America Cup (SA Cup)</span>—an intercollegiate 
          rocket-building competition held in New Mexico, USA. Around 1,700 students from over 150 countries 
          participate. The teams are provided launch facilities and must design, build, and attach their 
          rockets to the launcher. The primary objective is to launch rockets to an altitude of{" "}
          <span className={style.highlight}>10,000 ft</span> and recover them safely.
        </p>
      </section>

      <section>
        <h2>Our Rockets</h2>
        <p>
          Artemis participates in the <span className={style.highlight}>COTS (Commercial Off-The-Shelf)</span> 
          category, where the rocket motor is bought rather than built. The team currently works on two rockets 
          with different specifications:
        </p>
        
        <div className={style.rocketSpecs}>
          <div className={style.rocketCard}>
            <h3>Apeiron II</h3>
            <ul>
              <li><strong>Airframe Length:</strong> 267 cm</li>
              <li><strong>Peak Thrust:</strong> 2680 N</li>
              <li><strong>Predicted Apogee:</strong> 10,102 ft</li>
            </ul>
          </div>
          
          <div className={style.rocketCard}>
            <h3>Apeiron III</h3>
            <ul>
              <li><strong>Airframe Length:</strong> 2.5 m</li>
              <li><strong>Peak Thrust:</strong> 2680 N</li>
              <li><strong>Predicted Apogee:</strong> 3.028 km</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Subsystems</h2>
        <p>
          Team Artemis is divided into four specialized subsystems for comprehensive development:
        </p>
        
        <div className={style.subsystemGrid}>
          <div className={style.subsystemCard}>
            <h3>Structures</h3>
            <p>
              Designs, simulates, and fabricates the rocket airframe using composite materials, 
              CAD, and CFD tools. Responsible for manufacturing body tubes and airbrake assemblies.
            </p>
          </div>
          
          <div className={style.subsystemCard}>
            <h3>Avionics</h3>
            <p>
              Manages telemetry logging, GPS, communication, and altimetry using custom PCBs coded via Arduino. 
              Now using SMD components for better accuracy and compactness.
            </p>
          </div>
          
          <div className={style.subsystemCard}>
            <h3>Recovery</h3>
            <p>
              Ensures safe landing using parachutes, descent optimization, and innovative CO<sub>2</sub> 
              ejection systems. Developed reefing mechanisms to control parachute deployment.
            </p>
          </div>
          
          <div className={style.subsystemCard}>
            <h3>Payload</h3>
            <p>
              Previously used a biological payload (special mention in SA Cup 2021). Currently 
              being restructured for future experiments and payload systems.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Our Workflow</h2>
        <p>
          Rocket development at SEDS BPHC follows a rigorous process:
        </p>
        <ol className={style.processList}>
          <li>Design components in software like OpenRocket</li>
          <li>Run simulations and verify with seniors, PhD scholars, and professors</li>
          <li>Manufacture components (some in-house, some outsourced)</li>
          <li>Assemble and conduct test launches</li>
          <li>Iterate based on test results</li>
        </ol>
      </section>

      <section className={style.highlightSection}>
        <h2>Our Pivot: Project-Based Approach</h2>
        <p>
          In the coming months, Artemis will transition into a <span className={style.highlight}>project-based</span> team. 
          Each subsystem will take on research-focused projects with the goal of publishing papers. 
          This shift will provide students with:
        </p>
        <ul>
          <li>Hands-on aerospace experience</li>
          <li>Research publication opportunities</li>
          <li>Strengthened resumes for internships and master's applications</li>
          <li>Specialized skill development</li>
        </ul>
        <p>
          This evolution represents our commitment to both competitive excellence and academic contribution 
          in the field of rocketry.
        </p>
      </section>
    </div>
  );
}