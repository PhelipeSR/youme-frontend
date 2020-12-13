import { Container, Row, Col} from 'reactstrap';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  return (
    <Container>
      <Header /> 
      <Row style={{padding:"1% 8%"}}>
        <h3>Objetivo</h3>
        <p> Este é a plataforma desenvolvida para o trabalho final da disciplina Tópicos de Redes 3.</p>
        <p> Criamos um prótotipo de um Chat. Temos duas páginas iniciais, uma para que pessoas se cadastrem na nossa plataforma e outro para quem já tem cadastro somente fazer log-in.</p>
        <div style={{margin: '16px 0'}}>
          <Link className="btn solid" style={{marginRight: '8px'}} to="/sign-in">Sign In</Link>
          <Link className="btn solid" to="/sign-up">Sign Up</Link>
        </div>
        <h3>Quem somos ?</h3>
        <p>Nosso grupo é composto pelos estudantes Mariana Martins Pessoa Costa, Phelipe Resende e Natália. Para nos avaliar tem o projeto do github e o vídeo do youtube.</p>
        <div style={{marginTop: '16px', display: 'flex'}}>
          <a className="btn solid" style={{marginRight: '8px', display: 'flex', alignItems: 'center', width: 'auto'}} href="https://github.com/PhelipeSR/youme-backend">
            <FaGithub size={18} />
            &nbsp;&nbsp;Back-end
          </a>
          <a className="btn solid" style={{marginRight: '8px', display: 'flex', alignItems: 'center', width: 'auto'}} href="https://github.com/PhelipeSR/youme-frontend">
            <FaGithub size={18} />
            &nbsp;&nbsp;Front-end
          </a>
          <a className="btn solid" style={{marginRight: '8px', display: 'flex', alignItems: 'center', width: 'auto'}} href="https://www.youtube.com">
            <FaYoutube size={18} />
            &nbsp;&nbsp;YouTube
          </a>
        </div>
      </Row>
      <Footer />
    </Container>
  );
}

export default Home;