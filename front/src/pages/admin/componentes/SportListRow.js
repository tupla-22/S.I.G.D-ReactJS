import { BoxAlCen, BoxAlJusCen, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos";
import { TD } from "../../../componentes/styledComponents/TD";
import SportListRowPopStatsShower from "./SportListRowPopStatsShower";
import TouchAppTwoToneIcon from "@mui/icons-material/TouchAppTwoTone"
import { Button } from "@mui/material";
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';

const SportListRow = ({sport , statsOftheSport,data}) => {
    
    return (  
        <tr>
            <TD><BoxAlJusCen><Button > <InsertPhotoTwoToneIcon/> </Button></BoxAlJusCen> </TD>
            <TD>{data.id_deporte}</TD>
            <TDF><SportListRowPopStatsShower sport={sport} statsOftheSport={statsOftheSport } /></TDF>
        </tr>
    );
}
 
{/* <img alt="Imagen del deporte" style={{height:"35px"}} src={`${data.foto_deporte}`}></img> */}

export default SportListRow;