import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="space-y-4">
      <div className="h-24 bg-slate-50 rounded-xl">
      <Marquee>
          <h2 className="text-3xl font-bold text-red-800 mt-8">This is a babies toy selling website . You can find here all car types of toy. Like car toy, bas toy, police car toy and others</h2>
      </Marquee>
      </div>
      <div
      className="hero h-96"
      style={{
        backgroundImage: `url("https://i.ibb.co/9wQVgZ4/cartoys.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Babys Car</h1>
          <p className="mb-5">
            Here you can find all of car toys for babies. This is one of the most car toys collection store for you.
          </p>
          <button className="btn btn-primary">Lets Explore</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
