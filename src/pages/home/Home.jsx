import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/img/logo.png";
import AddStudentButton from "../../assets/img/add-student.svg";

import Modal from "./Modal";
import StudentCard from "./StudentCard";
import TextInput from "../../components/TextInput/TextInput";

import "./Home.styles.css";
import Button from "../../components/Button/Button";
import useForm from "../../hooks/useForm";

const Home = () => {
  const [alunos, setAlunos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [field, setFieldValue] = useForm({
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
    const { nome, idade, github, linkedin } = field;
    console.log("Save", {
      nome,
      idade,
      github,
      linkedin,
    });
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={Logo} alt="DevInHouse" />
        </div>
        <TextInput placeholder="Buscar aluno..." />
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
        <TextInput
          label="Nome"
          placeholder="Digite o nome"
          value={field.nome}
          onChange={(e) => setFieldValue("nome", e.target.value)}
        />
        <TextInput
          label="Idade"
          placeholder="Digite a idade"
          value={field.idade}
          onChange={(e) => setFieldValue("idade", e.target.value)}
        />
        <TextInput
          label="LinkedIn"
          placeholder="Digite a url do linkedin"
          value={field.linkedin}
          onChange={(e) => setFieldValue("linkedin", e.target.value)}
        />
        <TextInput
          label="Github"
          placeholder="Digite a url do github"
          value={field.github}
          onChange={(e) => setFieldValue("github", e.target.value)}
        />
        <Button label="Salvar" onClick={handleSave} />
      </Modal>
    </>
  );
};

export default Home;
