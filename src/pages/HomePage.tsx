import home_banner from "@/img/home_banner.jpeg";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src={home_banner} alt="Home Banner" />
        <div className="title">Stemma</div>
      </div>
      <div className="slogan">Let others know your geekness!</div>
      <br />
    </div>
  );
};

export default HomePage;
