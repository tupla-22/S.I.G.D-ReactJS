import { Box } from "@mui/system";
import FixtureHead from "./FixtureHead";
import FixtureRow from "./FixtureRow";
import Main from "./Main";
import "./styles/Fixture.css";

const cuadros = {
  nombre: "Fenix",
  fecha: "12/05/2022",
};

const Fixture = () => {
    const sxFixt = {
        width:"70%"
    }
  return (
    <Main>
      <div className="fixture">
        <Box>
          <FixtureHead />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
          <FixtureRow />
        </Box>
      </div>
    </Main>
  );
};

export default Fixture;
