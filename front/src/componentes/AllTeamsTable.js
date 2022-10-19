import AllTeamsTableRow from "./AllTeamsTableRow";
const AllTeamsTable = () => {
  const sx = {
    padding: "10px",
    border: "1px solid #0005",
    borderRadius: "5px",
  };

  return (
    <table style={{minWidth:"400px"}}>
      <thead>
        <tr>
          <th style={sx}>Equipos</th>
          <th style={sx}>Jugadores</th>
          <th style={sx}>PJ</th>
          <th style={sx}>PG</th>
          <th style={sx}>PP</th>
        </tr>
      </thead>
      <tbody>
        <AllTeamsTableRow />
        <AllTeamsTableRow />
        <AllTeamsTableRow />
        <AllTeamsTableRow />
        <AllTeamsTableRow />
      </tbody>
    </table>
  );
};

export default AllTeamsTable;
