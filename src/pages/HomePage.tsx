import home_banner from "@/img/home_banner.jpeg";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src={home_banner} alt="Home Banner" />
        <div className="title">Badge Hub</div>
      </div>
      <div className="slogan">Make custom badge and use it!</div>
      <br />
    </div>
  );
};

export default HomePage;
