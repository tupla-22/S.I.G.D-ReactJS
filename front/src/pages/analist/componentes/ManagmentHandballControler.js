import { Button } from "@mui/material";
import { BoxFlex } from "../../../componentes/BoxFlex";
import Form from "../../../componentes/Form";
import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import RoundedCornerTwoToneIcon from '@mui/icons-material/RoundedCornerTwoTone';
import RectangleTwoToneIcon from '@mui/icons-material/RectangleTwoTone';
import ChangeCircleTwoToneIcon from '@mui/icons-material/ChangeCircleTwoTone';
import MoveUpTwoToneIcon from '@mui/icons-material/MoveUpTwoTone';
import SettingsOverscanTwoToneIcon from '@mui/icons-material/SettingsOverscanTwoTone';

const ManagmentControlerControler = () => {
    const handleClick = (e) =>{
      
    }
  return (
    <>

      <Form>
        <h3>Control football</h3>
        <BoxFlex>
          <Button onClick={handleClick} variant="contained">
            Doble
            <SportsSoccerTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Falta
            <HealingTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Corner
            <RoundedCornerTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Lateral
            <RectangleTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Cambio
            <ChangeCircleTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Tiro libre
            <MoveUpTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Penal
            <SettingsOverscanTwoToneIcon />
          </Button>
        </BoxFlex>
      </Form>
    </>
  );
};

export default ManagmentControlerControler;
