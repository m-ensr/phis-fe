import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleLg">PHISHER</span>
        <span className="headerTitleSm">Les victimes sont des proies.</span>
      </div>
      <img
        className="headerImg"
        src="https://r4.wallpaperflare.com/wallpaper/163/392/912/map-wold-map-technology-world-wallpaper-d8c6edc810508cc8901c51ae183254ea.jpg"
        alt=""
      />
      <h1 className="trapTitle"> Choose your trap !</h1>
    </div>
  );
}