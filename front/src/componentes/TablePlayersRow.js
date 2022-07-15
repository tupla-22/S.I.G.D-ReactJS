const TablePlayersRow = () => {
    const sx = {
        padding:"10px",
        border:"1px solid #0005"
    }


  return (
    <tr>
      <td style={sx}>Nombre de jugador</td>
      <td style={sx}>21</td>
      <td style={sx}>5</td>
    </tr>
  );
};

export default TablePlayersRow;
