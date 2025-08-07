import style from "../pages/posts/Posts.module.css";

export default function Post2Content() {
  return (
    <div className={style.postContent}>
      <h1>Rocket Fuel</h1>
      <img src="image4.png" alt="Rocket Fuel Image" className={style.image} />

      <p>
        Every journey to the stars begins with fire. Not magic, but a controlled cataclysm of chemistry and engineering. The story of spaceflight is the story of its fuels.
        To chart this course from today's launchpads to tomorrow's starships, we're joined by the visionary aerospace strategist, <strong>Archangel</strong>.
      </p>

      <h2>The Fuels That Get Us Off the Ground</h2>

      <h3>Solid Propellants: The Sprinters</h3>
      <p>
        Think of a giant firework. Solids mix fuel and oxidizer into one block, offering immense, brute-force thrust.
        They’re simple and powerful but can't be shut down once lit.
        This is the raw power that rockets like <strong>NASA's SLS</strong> use to escape Earth's gravity.
      </p>

      <h3>Liquid Propellants: The Marathon Runners</h3>
      <p>
        These offer what solids can't: <strong>control</strong>. With separate fuel and oxidizer tanks, liquid engines can be throttled, shut down, and restarted.
        This is the technology behind workhorses like <strong>SpaceX's Falcon 9</strong> (using Kerosene) and the Moon-bound <strong>Saturn V</strong> (using Liquid Hydrogen).
        The future points to <strong>Methane</strong>, the fuel for <strong>SpaceX's Starship</strong>, because it's efficient and can potentially be made on Mars.
      </p>

      <h3>Hybrid Propellants: The Innovators</h3>
      <p>
        Combining a solid fuel with a liquid oxidizer, hybrids offer a unique balance of safety and control.
        They are the engine of choice for companies like <strong>Virgin Galactic</strong>, democratizing access to the edge of space.
      </p>

      <h2>The Next Horizon: Archangel's Vision</h2>

      <p>
        <em>"The next great leap isn't about packing better fuel, but about learning to live off the land,"</em> Archangel notes. <br />
        <strong>"The future of propulsion is the future of settlement."</strong>
      </p>

      <h3>Living Off the Land (ISRU)</h3>
      <p>
        The ultimate game-changer is <strong>making fuel on other worlds</strong>.
        By using Mars's atmosphere and water ice, we can create methane fuel on-site.
        This breaks the tyranny of the rocket equation, turning Mars from a destination into a home.
      </p>

      <h3>Taming the Atom & Beyond</h3>
      <p>
        To truly conquer the solar system, we need to go <strong>nuclear</strong>.
        <strong>Nuclear Propulsion</strong> offers a massive leap in efficiency, potentially cutting a trip to Mars from nine months to just three.
        It's the key to rapid interplanetary transit.
      </p>

      <p>
        Far beyond that lies the ultimate prize: harnessing <strong>Fusion</strong> or <strong>Antimatter</strong>—the power of the stars themselves—to finally carry us to other suns.
      </p>

      <blockquote className={style.quote}>
        "We have always been a species that looks up. The chemistry of our rockets today will give way to the physics of our starships tomorrow.
        Each launch is not an end in itself, but a single, steady pulse in the great human heartbeat, pushing us outward, onward,
        until the light of our own sun is just one star among many."
      </blockquote>
    </div>
  );
}
