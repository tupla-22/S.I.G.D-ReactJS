import DateRangeIcon from "@mui/icons-material/DateRange";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Table } from "./Table";
import { TH } from "./TH";
import Main from "./Main";
import FixtureRow from "./FixtureRow";

const Fixture = () => {
  return (
    <Main>
      <Table>
        <thead>
          <TH>
            <DateRangeIcon color="secondary" />
          </TH>
          <TH>
            <AccessTimeFilledIcon  color="secondary" />
          </TH>
          <TH>
            <ShieldIcon  color="secondary"></ShieldIcon>
          </TH>
          <TH>VS</TH>
          <TH>
            <ShieldIcon  color="secondary"></ShieldIcon>
          </TH>
        </thead>
        <tbody>
          <FixtureRow></FixtureRow>
        </tbody>
      </Table>
    </Main>
  );
};

export default Fixture;
