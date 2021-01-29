import LinkedInLogo from "../../assets/img/linkedin-brands.svg";
import GithubLogo from "../../assets/img/github-square-brands.svg";

const StudentCard = ({ student }) => {
  return (
    <div className="card">
      <h3>{student.nome}</h3>
      <p>{student.idade}</p>
      <div className="socials">
        <a href={student.linkedin}>
          <img src={LinkedInLogo} alt="LinkedIn Logo" />
        </a>
        <a href={student.github}>
          <img src={GithubLogo} alt="Github Logo" />
        </a>
      </div>
    </div>
  );
};

export default StudentCard;
