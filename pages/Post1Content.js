import style from "../pages/posts/Posts.module.css";

export default function Post1Content() {
  return (
    <div className={style.postContent}>
      <h1 className={style.mainHeadingShifted}>What Makes a Rocket Fly Straight?</h1>
      
      {/* First Image */}
      <img src="page1img1.jpg" alt="Rocket launch" className={style.image} />
      
      <section>
        <h2>Introduction</h2>
        <p>
          Ever wondered why some rockets soar straight into the sky while others wobble or veer off-course?
          A rocket's ability to fly straight is the result of finely tuned engineering principles that balance
          forces, align components, and maintain stability. In this blog, we'll break down what truly keeps a
          rocket on track.
        </p>
      </section>

      <section>
        <h2>1. Stability: The Backbone of Straight Flight</h2>
        <p>
          Stability is a rocket's ability to return to its path after disturbances like wind or vibration.
          A rocket is statically stable if it self-corrects when slightly tilted. This depends on the positions
          of the Center of Mass (CoM) and Center of Pressure (CoP), the point where resultant aerodynamic forces act.
          For stability, the CoM must lie ahead of the CoP, typically by 1–2 body diameters.
        </p>
        <p>
          However, to avoid continuous wobbling or spiraling, a rocket also needs <strong>dynamic stability</strong>,
          the ability to actively dampen oscillations over time.
        </p>
      </section>

      <section>
        <h2>2. Fins: The Unsung Stabilizers</h2>
        <p>
          Fins serve as aerodynamic surfaces that restore alignment when a rocket tilts. Their design impacts
          how quickly and smoothly a rocket can correct its orientation. Swept-back fins reduce drag and increase
          control. Larger fins provide greater stability but also more drag. As air flows past, they generate
          corrective forces that keep the rocket pointed upward.
        </p>
      </section>

      <section>
        <h2>3. Thrust Must Be Centered</h2>
        <p>
          Even the most stable rocket will spiral out of control if its engine isn't aligned. To fly straight,
          the thrust vector (direction of engine force) must pass directly through CoM. Gimbal-mounted engines
          or fixed-alignment mounts help ensure thrust follows the right path.
        </p>
      </section>

      <blockquote>
        "Stability isn't magic — it's math, mass, and motion working in perfect harmony."
      </blockquote>

      <section>
        <h2>4. Strategic Mass Distribution</h2>
        <p>
          The placement of weight inside a rocket plays a crucial role in its flight stability.
          It's a common misconception that tail-heavy rockets should be more stable, since the mass is
          concentrated below, like a pendulum. But in flight, aerodynamic forces dominate — not gravity.
        </p>
        <p>
          Nose-heavy rockets have their CoM forward, a good thing for stability.
          Tail-heavy rockets tend to wobble or flip.
          Changing fuel levels shift the CoM during flight, which must be accounted for.
        </p>
      </section>

      <section>
        <h2>5. Active Guidance Systems</h2>
        <p>
          If you think you belong among the stars, you'll need to learn how to fly through the unknown, not just with balance, but with control. Hence, passive stability is not enough:
        </p>
        <ul>
          <li>Thrust Vector Control (TVC): Engines tilt to correct direction mid-flight</li>
          <li>Gyroscopes and IMUs: Detect deviations in real time</li>
          <li>Canards or control surfaces: Small movable wings that adjust orientation</li>
          <li>Gimbal-mounted Engines: Engines that swivel to correct orientation</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          A rocket's straight flight isn't just about raw power. It's about balance, alignment, and control. From fins and mass distribution to thrust vectoring and guidance systems, every element works together to keep it steady.
        </p>
        <p>
          In rocketry, going up is easy — staying on course is the real challenge.
        </p>
      </section>
      
      {/* Second Image */}
      <img src="page2img2.jpg" alt="Rocket guidance systems" className={style.image} />
    </div>
  );
}