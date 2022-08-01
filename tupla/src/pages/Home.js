import { Button } from "@mui/material";
import Main from "../componentes/MainCenter";
import logo from "../media/logo.svg";
const Home = () => {
  let sx = {};

  return (
    <Main>
      <Button sx={{ width: "50%" }}>
        <a target="blank" style={{ width: "100%" }} href="https://sigd.netlify.app/">
          <img style={{ width: "100%" }} src={logo}></img>
        </a>
      </Button>
    </Main>
  );
};

export default Home;
