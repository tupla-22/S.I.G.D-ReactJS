import { TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";

const TeamSearch = () => {
    return ( 
        <Form>
            <h3>Buscar equipo</h3>
            <TextField className="Form__input" label="Nombre"/>
            <ButtonClassic>Buscar</ButtonClassic>
        </Form>
     );
}
 
export default TeamSearch;