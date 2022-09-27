import DateRangeIcon from "@mui/icons-material/DateRange";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Table } from "./styledComponents/Table";
import { TH } from "./styledComponents/TH";
import Main from "./styledComponents/Main";
import FixtureRow from "./FixtureRow";

const FixtureHB = () => {
  return (
    <Main>
      <Table>
        <thead>
          <tr>
            <TH>
              <DateRangeIcon color="secondary" />
            </TH>
            <TH>
              <AccessTimeFilledIcon color="secondary" />
            </TH>
            <TH>
              <ShieldIcon color="secondary"></ShieldIcon>
            </TH>
            <TH>VS</TH>
            <TH>
              <ShieldIcon color="secondary"></ShieldIcon>
            </TH>
          </tr>
        </thead>
        <tbody>
          <FixtureRow></FixtureRow>
        </tbody>
      </Table>
    </Main>
  );
};

export default FixtureHB;