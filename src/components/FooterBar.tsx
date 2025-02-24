import profileImg from "@/img/cat-profile.jpg";
import githubImg from "@/img/github.png";
import mokokoImg from "@/img/personal_website.png";
import linkedInImg from "@/img/linkedIn.png";

const FooterBar: React.FC = () => {
  return (
    <>
      <div className="footerbar">
        <div className="profile-card">
          <div className="name-field">
            <img src={profileImg} />
            Insoo Son
          </div>
          <div className="email-field">insooeric.son@gmail.com</div>
          <div className="links-field">
            <a
              href="https://github.com/insooeric/GithubBadge#readme"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubImg} />
            </a>
            <a
              href="https://insooeric.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mokokoImg} />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-son-6742b7173/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInImg} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBar;
