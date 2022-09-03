import { DivOver } from "./DivOver";
import MatchesHistoryTableRow from "./MatchesHistoryTableRow";
import { Table } from "./Table";
import { TH } from "./TH";

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
