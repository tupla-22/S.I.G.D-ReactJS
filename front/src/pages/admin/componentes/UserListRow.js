import { TD } from "../../../componentes/styledComponents/TD";
import SettingsIcon from '@mui/icons-material/Settings';
import { dateTradeEs } from "../../../functions/globals";

const UserListRow = ({ data,userType }) => {
  return(
    
    <tr>
      <TD>{data.primerNombre_usuario}</TD>
      <TD>{data.primerApellido_usuario}</TD>
      <TD>{data.ci_usuario}</TD>
      <TD>{data.email_usuario}</TD>
      <TD>{dateTradeEs(data.fechaNac_usuario)}</TD>
      <TD>{data.id_rol_usuario}</TD>
    </tr>
  )
};

export default UserListRow;
