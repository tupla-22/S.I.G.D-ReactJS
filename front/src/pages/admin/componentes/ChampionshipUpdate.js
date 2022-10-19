import Main from "../../../componentes/styledComponents/Main";
import TeamUpdateForm from "./TemaUpdateForm";
import React, { useState, useEffect } from "react";
import ChampionshipSearch from "./ChampionshipSeach";
import ChampionshipUpdateForm from "./ChampionshipUpdateForm";
import ChampionshipUpdateCard from "./ChampionshipUpdateCard";

const ChampionshipUpdate = () => {
    const [data, setData] = useState(null);

  return (
    <Main>
      {data && <ChampionshipUpdateCard data={data}></ChampionshipUpdateCard>}
      <ChampionshipUpdateForm setData={setData} />
      <ChampionshipSearch />
    </Main>
  );
};

export default ChampionshipUpdate;
