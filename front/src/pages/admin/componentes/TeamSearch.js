import { TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import TeamsList from "./TeamsList";

const TeamSearch = () => {
    return ( 
        <Form>
            <h3>Buscar equipo</h3>
            <TextField className="Form__input" label="Nombre"/>
            <ButtonClassic>Buscar</ButtonClassic>
            <TeamsList></TeamsList>
        </Form>
     );
}
 
export default TeamSearch;