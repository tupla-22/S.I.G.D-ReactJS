import { TextField } from "@mui/material";
import ButtonClassic from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";

const UserSearch = () => {
    return ( 
        <Form>
            <h3>Buscar usuario</h3>
            <TextField className="Form__input" label="Nombre"/>
            <ButtonClassic>Buscar</ButtonClassic>
        </Form>
     );
}
 
export default UserSearch;