import Main from "../../../componentes/styledComponents/Main";
import TeamUpdateForm from "./TemaUpdateForm";
import React, { useState, useEffect } from "react";
import ChampionshipSearch from "./ChampionshipSeach";
import ChampionshipUpdateForm from "./ChampionshipUpdateForm";

const ChampionshipUpdate = () => {
  return (
    <Main>
      <ChampionshipUpdateForm />
      <ChampionshipSearch />
    </Main>
  );
};

export default ChampionshipUpdate;
