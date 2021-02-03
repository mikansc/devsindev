import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/img/logo.png";
import AddStudentButton from "../../assets/img/add-student.svg";

import Modal from "./Modal";
import StudentCard from "./StudentCard";
import TextInput from "../../components/TextInput/TextInput";

import Button from "../../components/Button/Button";
import useForm from "../../hooks/useForm";

import "./Home.styles.css";

const Home = () => {
  const [alunos, setAlunos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setFieldValue] = useForm({
    nome: "",
    idade: "",
    github: "",
    linkedin: "",
  });

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

  const handleSave = () => {
    axios.post("http://localhost:8080/v1/usuarios", data);
    setAlunos([...alunos, data]);
    setOpenModal(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={Logo} alt="DevInHouse" />
        </div>
        <div className="search-input">
          <TextInput placeholder="Buscar aluno..." />
        </div>
        <div className="header-add">
          <button onClick={handleOpenModal}>
            <img src={AddStudentButton} alt="Adicionar" />
          </button>
        </div>
      </header>
      <div className="container">
        <div className="content">
          {alunos.length === 0 ? (
            <p>Nenhum aluno encontrado.</p>
          ) : (
            alunos.map((aluno) => (
              <StudentCard key={aluno.id} student={aluno} />
            ))
          )}
        </div>
      </div>
      <Modal title="Novo aluno" open={openModal} onClose={handleCloseModal}>
        <TextInput
          label="Nome"
          placeholder="Digite o nome"
          value={data.nome}
          onChange={(e) => setFieldValue("nome", e.target.value)}
        />
        <TextInput
          type="number"
          label="Idade"
          placeholder="Digite a idade"
          value={data.idade}
          onChange={(e) => setFieldValue("idade", e.target.value)}
        />
        <TextInput
          label="LinkedIn"
          placeholder="https://linkedin.com/in/..."
          value={data.linkedin}
          onChange={(e) => setFieldValue("linkedin", e.target.value)}
        />
        <TextInput
          label="Github"
          placeholder="https://github.com/..."
          value={data.github}
          onChange={(e) => setFieldValue("github", e.target.value)}
        />
        <Button label="Salvar" onClick={handleSave} />
      </Modal>
    </>
  );
};

export default Home;
