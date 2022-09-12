import DateRangeIcon from "@mui/icons-material/DateRange";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Table } from "./Table";
import { TH } from "./TH";
import Main from "./Main";
import FixtureRow from "./FixtureRow";
import FixtureBar from "./FixtureBar";
import { Outlet } from "react-router-dom";

const Fixture = () => {
  return (
    <>
      <FixtureBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Fixture;
