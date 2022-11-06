
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BoxFlex } from "../../componentes/BoxFlex";
import Article from "../../componentes/styledComponents/Article";
import { H3 } from "../../componentes/styledComponents/H3";
import Main from "../../componentes/styledComponents/Main";
import { PW } from "../../componentes/styledComponents/PW";
import LanguajeContext from "../../contexts/LanguajeContext";

const user = JSON.parse(localStorage.getItem("user"));


const HomePageAnalist = () => {

  
  const { text } = useContext(LanguajeContext)
  
  return (
    <>
      <Main>
        <Article>
          <H3>
            {text.bienvenidaClasica}
          </H3>
          <PW>
            {text.afffs}
          </PW>
        </Article>
        <BoxFlex></BoxFlex>
      </Main>
      <Outlet />
    </>
  );
};

export default HomePageAnalist;
