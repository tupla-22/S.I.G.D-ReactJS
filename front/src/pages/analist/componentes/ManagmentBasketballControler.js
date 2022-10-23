import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { BoxFlex } from "../../../componentes/BoxFlex";
import Form from "../../../componentes/Form";
import SportsSoccerTwoToneIcon from "@mui/icons-material/SportsSoccerTwoTone";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import RoundedCornerTwoToneIcon from "@mui/icons-material/RoundedCornerTwoTone";
import RectangleTwoToneIcon from "@mui/icons-material/RectangleTwoTone";
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone";
import MoveUpTwoToneIcon from "@mui/icons-material/MoveUpTwoTone";
import SettingsOverscanTwoToneIcon from "@mui/icons-material/SettingsOverscanTwoTone";
import UsersModal from "./UsersModal";
import React, { useState, useEffect } from "react";
import { getDateTime, urlApi } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const peticion =helpHttp();

const ManagmentBasketballControler = ({matchId , locales, visitantes }) => {
  const [form, setForm] = useState({});
  const [tipo, setTipo] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      id_fichaJugador_estadistica: e.target.value.id_fichaJugador_estadistica,
      id_usuario_estadistica: JSON.parse(localStorage.getItem("user"))
        .id_usuario,
      id_equipo_estadistica: e.target.value.id_equipo_estadistica,
      fecha_estadistica: getDateTime(),
      valor_estadistica: 1,
      verificado_estadistica:0,
      id_partido_estadistica:matchId
    });
    console.log(form);
  };

  const handleType = (e) => {
    setTipo(e.target.value);
    setForm({ ...form, tipo_estadistica: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const info={
      body:new URLSearchParams(form)
    }


    peticion.post(urlApi("estadisticas?"),info).then(e=>console.log(e))
  };

  return (
    <>
      <Form>
        <h3>Control Basketball</h3>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipo}
            label="Seleccionar"
            onChange={handleType}
          >
          <MenuItem value={"doble"}>
            Doble
            <SportsBasketballIcon/>
          </MenuItem>
            <MenuItem value={"triple"}>
              Triple
              <SportsBasketballIcon/>
            </MenuItem>
            <MenuItem value={"falta"}>
              Falta
              <HealingTwoToneIcon />
            </MenuItem>
            <MenuItem value="lateral">
              Saque
              <RectangleTwoToneIcon />
            </MenuItem>
            <MenuItem value="cambio">
              Cambio
              <ChangeCircleTwoToneIcon />
            </MenuItem>
            <MenuItem value="tiroLibre">
              Tiro libre
              <MoveUpTwoToneIcon />
            </MenuItem>
            <MenuItem value="pasos">
              Pasos
              <DirectionsWalkIcon />
            </MenuItem>
          </Select>
        </FormControl>

        {tipo !== "cambio" && tipo !== "falta" && (
          <>
            <h3>Equipos</h3>
            <FormControl className="Form__input" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jugador al que se le asigna
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jugador al que se le asigna"
                onChange={handleChange}
              >
                <h3>Locales</h3>
                {locales.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
                <h3>Visitantes</h3>
                {visitantes.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}

        {tipo == "falta" && (
          <>
            <h3>Jugador que realizo falta</h3>
            <FormControl className="Form__input" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jugador al que se le asigna
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jugador al que se le asigna"
                onChange={handleChange}
              >
                <h3>Locales</h3>
                {locales.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
                <h3>Visitantes</h3>
                {visitantes.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <h3>Jugador al que le hicieron falta</h3>
            <FormControl className="Form__input" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jugador al que se le asigna
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jugador al que se le asigna"
                onChange={handleChange}
              >
                <h3>Locales</h3>
                {locales.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
                <h3>Visitantes</h3>
                {visitantes.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}
        {tipo == "cambio" && (
          <>
            <h3>Jugador que entra</h3>
            <FormControl className="Form__input" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jugador al que se le asigna
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jugador al que se le asigna"
                onChange={handleChange}
              >
                <h3>Locales</h3>
                {locales.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
                <h3>Visitantes</h3>
                {visitantes.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <h3>Jugador que sale</h3>
            <FormControl className="Form__input" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jugador al que se le asigna
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jugador al que se le asigna"
                onChange={handleChange}
              >
                <h3>Locales</h3>
                {locales.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
                <h3>Visitantes</h3>
                {visitantes.map((e) => (
                  <MenuItem
                    value={{
                      id_fichaJugador_estadistica: e.id_fichaJugador,
                      id_equipo_estadistica: e.id_equipo,
                    }}
                  >
                    {e.primerNombre_usuario} {e.primerApellido_usuario}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}
        {tipo == "falta"}

        <Button onClick={handleSubmit} type={"submit"} variant="outlined">
          enviar{" "}
        </Button>
        {/* <BoxFlex>
          <UsersModal
            name={"gol"}
            locales={locales}
            visitantes={visitantes}
            form={form}
            setForm={setForm}
          >
            Gol
            <SportsSoccerTwoToneIcon />
          </UsersModal>
          <Button onClick={handleClick} variant="contained">
            Falta
            <HealingTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Corner
            <RoundedCornerTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Lateral
            <RectangleTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Cambio
            <ChangeCircleTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Tiro libre
            <MoveUpTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Penal
            <SettingsOverscanTwoToneIcon />
          </Button>
        </BoxFlex> */}
      </Form>
    </>
  );
};

export default ManagmentBasketballControler;
