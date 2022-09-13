import { DivOver } from "./DivOver";
import MatchesHistoryTableRow from "./MatchesHistoryTableRow";
import { Table } from "./styledComponents/Table";
import { TH } from "./styledComponents/TH";

const MatchesHistoryTable = () => {

  return (
    <DivOver>
      <Table>
        <thead>
          <tr>
            <TH>Equipos</TH>
            <TH>Jugadores</TH>
            <TH>PJ</TH>
            <TH>PG</TH>
            <TH>PP</TH>
            <TH>PE</TH>
          </tr>
        </thead>
        <tbody>
          <MatchesHistoryTableRow></MatchesHistoryTableRow>
        </tbody>
      </Table>
    </DivOver>
  );
};

export default MatchesHistoryTable;
