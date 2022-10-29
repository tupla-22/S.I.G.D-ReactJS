import Main from "../../../componentes/styledComponents/Main";
import TeamSearch from "./TeamSearch";
import TeamUpdateForm from "./TemaUpdateForm";
import React, { useState, useEffect } from 'react';
import TeamUpdateCard from "./TeamUpdateCard";


const TeamUpdate = () => {
    const [team, setTeam] = useState(null);

    return ( 
        <Main>
            {team && <TeamUpdateCard setTeam={setTeam} data={team}/>}
            <TeamUpdateForm setTeam={setTeam}></TeamUpdateForm>
            <TeamSearch/>
        </Main>
     );
}
 
export default TeamUpdate;