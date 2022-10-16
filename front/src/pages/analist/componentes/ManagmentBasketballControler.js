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
import { getDateTime, getProp } from "../../../functions/globals";
import UsersModal from "./UsersModal";

const peticion = helpHttp();

const ManagmentBasketballControler = ({ visitantes, locales }) => {
  const [form, setForm] = useState({});
  const handleClick = (e) => {
    setForm({
      ...form,
      tipo_estadistica: getProp(e).name,
      fecha_estadistica: getDateTime(),
      valor_estadistica: 1,
    });
    console.log(form);
  };

  return (
    <>
      <Form>
        <h3>Control basketball</h3>
        <BoxFlex>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Doble
            <SportsSoccerTwoToneIcon />
          </UsersModal>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Falta
            <HealingTwoToneIcon />
          </UsersModal>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Doble driblin
            <PanToolTwoToneIcon />
          </UsersModal>

          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Caminar
            <DirectionsWalkTwoToneIcon />
          </UsersModal>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Saque lateral
            <RectangleTwoToneIcon />
          </UsersModal>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Cambio
            <ChangeCircleTwoToneIcon />
          </UsersModal>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Tiro libre
            <MoveUpTwoToneIcon />
          </UsersModal>
          <UsersModal
            locales={locales}
            visitantes={visitantes}
            name="doble"
            onClick={handleClick}
            variant="contained"
          >
            Triple
            <SettingsOverscanTwoToneIcon />
          </UsersModal>
        </BoxFlex>
      </Form>
    </>
  );
};

export default ManagmentBasketballControler;
