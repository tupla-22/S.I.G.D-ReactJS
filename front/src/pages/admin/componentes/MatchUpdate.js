import Main from "../../../componentes/styledComponents/Main";
import TeamUpdateForm from "./TemaUpdateForm";
import React, { useState, useEffect } from 'react';
import ChampionshipSearch from "./ChampionshipSeach";
import MatchSearch from "./MatchSeach";
import MatchUpdateForm from "./MatchUpdateForm";


const MatchUpdate = () => {

    return ( 
        <Main>
            <MatchSearch/>
            <MatchUpdateForm/>
        </Main>
     );
}
 
export default MatchUpdate;