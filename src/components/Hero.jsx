import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <img
        src={profile}
        alt="Profile"
        className="profile"
      />

      <h1>Yadagiri Swajith</h1>

      <p>
        B.Tech Student | Frontend Developer |
        React JS Learner
      </p>

    </section>
  );
}

export default Hero;