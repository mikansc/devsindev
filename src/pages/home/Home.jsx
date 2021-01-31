import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/img/logo.png";
import AddStudentButton from "../../assets/img/add-student.svg";

import "./Home.styles.css";
import Modal from "./Modal";
import StudentCard from "./StudentCard";

const Home = () => {
  const [alunos, setAlunos] = useState([]);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/usuarios").then((res) => {
      console.log(res);
      setAlunos(res.data);
    });
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={Logo} alt="DevInHouse" />
        </div>
        <div className="header-search">
          <input type="text" placeholder="Buscar aluno ..." />
        </div>
        <div className="header-add">
          <button onClick={handleOpenModal}>
            <img src={AddStudentButton} alt="Adicionar" />
          </button>
        </div>
      </header>
      <div className="container">
        {alunos.length === 0 ? (
          <p>Nenhum aluno encontrado.</p>
        ) : (
          alunos.map((aluno) => <StudentCard key={aluno.id} student={aluno} />)
        )}
      </div>
      <Modal title="Novo aluno" open={openModal} onClose={handleCloseModal}>
        Hello, world
      </Modal>
    </>
  );
};

export default Home;
