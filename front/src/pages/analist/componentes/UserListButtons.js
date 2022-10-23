import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BoxFlex } from "../../../componentes/BoxFlex";
import Form from "../../../componentes/Form";
import { PAlert } from "../../../componentes/PAlert";
import { GridContained } from "../../../componentes/styledComponents/GridContained";
import { H3 } from "../../../componentes/styledComponents/H3";
import { urlApi } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";

const peticion = helpHttp();

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #888;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;

const UserListButtons = ({ locales, visitantes, name, onClick }) => {
  const [user, setUser] = useState({});
  const [titularesLocales, setTitularesLocales] = useState({});
  const [titularesVisitantes, setTitularesVisitantes] = useState({});
  const [titulares, setTitulares] = useState();


  

  useEffect((e) => {
    setTitulares(Object.keys(titularesLocales))

  }, [titularesLocales]);
  
  useEffect((e) => {
    setTitulares(Object.keys(titularesVisitantes))
  }, [titularesVisitantes]);

  const handleTitulares = (e) => {};

  return (
    <BoxFlex>
      <Div>
        <GridContained>
          <h4>Equipo local:</h4>
          {locales.map((e) => (
            <Button
              onClick={() => {
                
                setTitularesLocales(
                  {...titularesLocales, [e.id_usuario]: e.primerNombre_usuario }
                );
                setUser(e);
              }}
              key={e.ci_usuario}
            >
              {e.primerNombre_usuario}
            </Button>
          ))}
        </GridContained>
      </Div>
      <Div>
        <GridContained>
          <h3>Titulares locales</h3>
          {Object.values(titularesLocales).map(e=><Button>{e}</Button>)}
        </GridContained>
        <GridContained>
          <h3>Titulares visitantes</h3>
          {Object.values(titularesVisitantes).map(e=><Button>{e}</Button>)}
        </GridContained>
      </Div>
      <Div>
        <GridContained>
          <h4>Equipo visitante: {}</h4>
          {visitantes.map((e) => (
            <Button
              onClick={() => {
                setTitularesVisitantes({...titularesVisitantes, [e.id_usuario]: e.primerNombre_usuario });
                setUser(e);
              }}
              key={e.ci_usuario}
            >
              {e.primerNombre_usuario}
            </Button>
          ))}
        </GridContained>
      </Div>
    </BoxFlex>
  );
};

export default UserListButtons;
