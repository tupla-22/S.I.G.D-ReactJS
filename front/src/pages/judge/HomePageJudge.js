import { Outlet } from "react-router-dom";
import { BoxFlex } from "../../componentes/BoxFlex";
import Article from "../../componentes/styledComponents/Article";
import { H3 } from "../../componentes/styledComponents/H3";
import Main from "../../componentes/styledComponents/Main";
import { PW } from "../../componentes/styledComponents/PW";
import { getUser } from "../../functions/globals";
import React, { useState, useEffect } from 'react';



const HomePageJudge = () => {

  const user = getUser()
  useEffect(() => {
    
  }, []);
    return ( 
        <>
          <Main>
            <Article>
              <H3>
                Bienvenido {user.primerNombre_usuario} {user.primerApellido_usuario}{" "}
                al "sistema informático de gestión deportiva de la institución UTU".
              </H3>
              <PW>
                Aquí tu puedes validar los partidos que se juegan y
                registrar las estadísticas de los partidos y jugadores.
              </PW>
            </Article>
            <BoxFlex></BoxFlex>
          </Main>
          <Outlet />
        </>
     );
}
 
export default HomePageJudge;