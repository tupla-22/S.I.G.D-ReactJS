import FixtureHead from "./FixtureHead";
import FixtureRow from "./FixtureRow";
import Main from "./Main";
import "./styles/Fixture.css";

const cuadros = {
  nombre: "Fenix",
  fecha: "12/05/2022",
};

const Fixture = () => {
    const sx = {
        padding:10,
        border:"1px solid #0005",
        borderRadius:"5px"
        
      }



  return (
    <Main>
      <table>
        <FixtureHead sx={sx}/>
        <tbody>
          <FixtureRow data={cuadros.nombre} sx={sx}/>
          <FixtureRow data={cuadros.nombre} sx={sx}/>
          <FixtureRow data={cuadros.nombre} sx={sx}/>
          <FixtureRow data={cuadros.nombre} sx={sx}/>
          <FixtureRow data={cuadros.nombre} sx={sx}/>
          <FixtureRow data={cuadros.nombre} sx={sx}/>
        </tbody>
      </table>
    </Main>
  );
};

export default Fixture;
