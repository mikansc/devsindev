import { ReactComponent as LinkedInLogo } from "../../assets/img/linkedin-brands.svg";
import { ReactComponent as GithubLogo } from "../../assets/img/github-square-brands.svg";

const StudentCard = ({ student, onClick }) => {
  return (
    <div className="card" onClick={onClick && onClick}>
      <div className="card-data">
        <h3>{student.nome}</h3>
        <p>{student.idade} anos</p>
      </div>
      <div className="socials">
        <a href={student.linkedin} target="_blank" rel="noreferrer">
          <LinkedInLogo
            color="#0077B5"
            alt="LinkedIn Logo"
            width="25"
            height="25"
          />
        </a>
        <a href={student.github} target="_blank" rel="noreferrer">
          <GithubLogo color="#000" alt="Github Logo" width="25" height="25" />
        </a>
      </div>
    </div>
  );
};

export default StudentCard;
