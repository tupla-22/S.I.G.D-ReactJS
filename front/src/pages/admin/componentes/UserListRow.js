import { TD } from "../../../componentes/styledComponents/TD";
import SettingsIcon from '@mui/icons-material/Settings';

const UserListRow = ({ data,userType }) => {
  return(
    
    <tr>
      <TD>{data.primerNombre_usuario}</TD>
      <TD>{data.primerApellido_usuario}</TD>
      <TD>{data.ci_usuario}</TD>
      <TD>{data.email_usuario}</TD>
      <TD>{data.fechaNac_usuario}</TD>
      <TD>{data.id_rol_usuario}</TD>
    </tr>
  )
};

export default UserListRow;
