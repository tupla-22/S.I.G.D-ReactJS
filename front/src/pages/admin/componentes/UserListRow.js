import { TD } from "../../../componentes/TD";

const UserListRow = ({ data }) => {
  return(
    
    <tr>
      <TD>{data.primerNombre_usuario}</TD>
      <TD>{data.primerApellido_usuario}</TD>
      <TD>{data.ci_usuario}</TD>
      <TD>{data.email_usuario}</TD>
      <TD>{data.fechaNac_usuario}</TD>
    </tr>
  )
};

export default UserListRow;
