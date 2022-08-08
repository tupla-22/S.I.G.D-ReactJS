import Article from "../componentes/Article";
import Parraf from "../componentes/Parraf";
import Title from "../componentes/Title";
import "./About.css";

const About = () => {
  return (
    <>
      <Article>
        <Title>¿Quienes somos?</Title>
        <Parraf>
          Una empresa de desarrollo de software la cual posee tres integrantes,
          dos desarrolladores y un analista, tupla está formada con una consigna
          muy importante para cada uno de los integrantes de dicha organización,
          nos referimos a la satisfacción del cliente en todo momento, y para
          esto implementamos una de las metodologías agiles más populares y más
          utilizadas por las grandes empresas, esta es "scrum".
        </Parraf>
      </Article>
      
      <Article>
        <Title>Misión</Title>
        <Parraf>
        Nuestra misión como empresa es poder entregar soluciones tecnológicas
        innovadoras y de calidad, con el respaldo de un comprometido equipo de profesionales.
        </Parraf>
      </Article>
      <Article>
        <Title>Visión</Title>
        <Parraf>
        Nuestra misión como empresa es poder entregar soluciones tecnológicas
        innovadoras y de calidad, con el respaldo de un comprometido equipo de profesionales.
        </Parraf>
      </Article>
    </>
  );
};

export default About;
