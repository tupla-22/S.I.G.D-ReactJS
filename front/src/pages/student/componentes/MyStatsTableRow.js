import { TD } from "../../../componentes/styledComponents/TD";

const MyStatsTableRow = ({ data }) => {
  return (
    <tr>
      <TD>{data.primerNombre_usuario}</TD>
      <TD>{data.primerApellido_usuario}</TD>
      <TD>{"14"}</TD>
      <TD>{"14"}</TD>
      <TD>{"14"}</TD>
      <TD>{"14"}</TD>
      <TD>{"14"}</TD>
      <TD>{"14"}</TD>
    </tr>
  );
};

export default MyStatsTableRow;
