import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./about.css";

function About() {
  const githubAvatarUrl =
    "https://avatars.githubusercontent.com/u/94220649?v=4";
  const githubUrl = "https://github.com/m-ensr";
  const linkedinUrl = "https://www.linkedin.com/in/m-ensar-ozdemir/";

  const githubAvatarUrl1 =
  "https://i.ibb.co/st1r5rn/1.jpg";
const githubUrl1 = "https://github.com/mteksahin";
const linkedinUrl1 = "https://www.linkedin.com/in/mteksahin/";

const githubAvatarUrl2 =
"https://media.licdn.com/dms/image/D4D03AQGHCthKJPgzmA/profile-displayphoto-shrink_400_400/0/1672231982431?e=1710374400&v=beta&t=DaBQRUxTjdHJ6KGk2mSMyRdxM--ntQLNH19_r-MEt28";
const githubUrl2 = "https://github.com/zeynepkiral";
const linkedinUrl2 = "https://www.linkedin.com/in/zeynepk%C4%B1ral";
  return (
    <div className="about-container">
      <div className="card">
        <img src={githubAvatarUrl} alt="GitHub User 1" />
        <p>Mustafa Ensar Özdemir</p>
        <div className="icons">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="card">
        <img src={githubAvatarUrl1} alt="GitHub User 2" />
        <p>Mehmet Emin Tekşahin</p>
        <div className="icons">
          <a href={linkedinUrl1} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href={githubUrl1} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="card">
        <img src={githubAvatarUrl2} alt="GitHub User 3" />
        <p>Zeynep Kıral</p>
        <div className="icons">
          <a href={linkedinUrl2} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href={githubUrl2} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
