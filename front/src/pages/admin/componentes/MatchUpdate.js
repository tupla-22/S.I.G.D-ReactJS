import Main from "../../../componentes/styledComponents/Main";
import TeamUpdateForm from "./TemaUpdateForm";
import React, { useState, useEffect } from "react";
import ChampionshipSearch from "./ChampionshipSeach";
import MatchSearch from "./MatchSeach";
import MatchUpdateForm from "./MatchUpdateForm";
import MatchList from "./MatchList";
import MatchUpdateCard from "./MatchUpdateCard";

const MatchUpdate = () => {
    const [data, setData] = useState(null);
  return (
    <>
      {data && <MatchUpdateCard data={data} />}
      <MatchUpdateForm setData={setData}/>
      
      <MatchList sport={"all"} />
    </>
  );
};

export default MatchUpdate;
