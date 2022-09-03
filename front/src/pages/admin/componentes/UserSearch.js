import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import UserList from "./UserList";

const UserSearch = () => {
    return ( 
        <Form>
            <h3>Buscar usuario</h3>
            <TextField className="Form__input" label="Nombre"/>
            <ButtonClassic variant="contained">Buscar</ButtonClassic>
            <UserList/>
        </Form>
     );
}
 
export default UserSearch;