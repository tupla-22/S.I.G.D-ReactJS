import { Button } from "@mui/material";
import { BoxFlex } from "../../../componentes/BoxFlex";
import Form from "../../../componentes/Form";
import SportsSoccerTwoToneIcon from "@mui/icons-material/SportsSoccerTwoTone";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import RoundedCornerTwoToneIcon from "@mui/icons-material/RoundedCornerTwoTone";
import RectangleTwoToneIcon from "@mui/icons-material/RectangleTwoTone";
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone";
import MoveUpTwoToneIcon from "@mui/icons-material/MoveUpTwoTone";
import SettingsOverscanTwoToneIcon from "@mui/icons-material/SettingsOverscanTwoTone";
import PanToolTwoToneIcon from "@mui/icons-material/PanToolTwoTone";
import DirectionsWalkTwoToneIcon from "@mui/icons-material/DirectionsWalkTwoTone";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../../../helpers/helpHttp";
import { getDateTime } from "../../../functions/globals";
import UsersModal from "./UsersModal";

const peticion = helpHttp();

const ManagmentBasketballControler = () => {
  const [form, setForm] = useState({});
  const handleClick = (e) => {
    setForm({
      ...form,
      tipo_estadistica: e.target.name,
      fecha_estadistica: getDateTime(),
      valor_estadistica:1,
    });
    console.log(form);
  };

  return (
    <>
      <Form>
        <h3>Control football</h3>
        <BoxFlex>
          <UsersModal name="doble" onClick={handleClick} variant="contained">
            Doble
            <SportsSoccerTwoToneIcon />
          </UsersModal>
          <Button name="falta" onClick={handleClick} variant="contained">
            Falta
            <HealingTwoToneIcon />
          </Button>
          <Button name="dobleDriblin" onClick={handleClick} variant="contained">
            Doble driblin
            <PanToolTwoToneIcon />
          </Button>

          <Button name="caminar" onClick={handleClick} variant="contained">
            Caminar
            <DirectionsWalkTwoToneIcon />
          </Button>
          <Button name="saqueLateral" onClick={handleClick} variant="contained">
            Saque lateral
            <RectangleTwoToneIcon />
          </Button>
          <Button name="cambio" onClick={handleClick} variant="contained">
            Cambio
            <ChangeCircleTwoToneIcon />
          </Button>
          <Button name="tiroLibre" onClick={handleClick} variant="contained">
            Tiro libre
            <MoveUpTwoToneIcon />
          </Button>
          <Button name="triple" onClick={handleClick} variant="contained">
            Triple
            <SettingsOverscanTwoToneIcon />
          </Button>
        </BoxFlex>
      </Form>
    </>
  );
};

export default ManagmentBasketballControler;
