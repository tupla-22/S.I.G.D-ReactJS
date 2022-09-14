import DateRangeIcon from "@mui/icons-material/DateRange";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Table } from "./styledComponents/Table";
import { TH } from "./styledComponents/TH";
import Main from "./styledComponents/Main";
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
