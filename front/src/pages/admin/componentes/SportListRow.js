import { BoxAlCen, BoxAlJusCen, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { TD } from "../../../componentes/styledComponents/TD"
import SportListRowPopStatsShower from "./SportListRowPopStatsShower"
import TouchAppTwoToneIcon from "@mui/icons-material/TouchAppTwoTone"
import { Button } from "@mui/material"
import InsertPhotoTwoToneIcon from "@mui/icons-material/InsertPhotoTwoTone"
import React, { useState, useEffect } from "react"
import BtnSettings from "../../../componentes/BtnSettings"
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"



const SportListRow = ({sports, setSports, sport,user, statsOftheSport }) => {
    const [delConfirm, setDelConfirm] = useState(0);

    const peticion= helpHttp()
    

    const contentSettings = [
        <ModalConfirm setConfirm={setDelConfirm} name={<DeleteForeverTwoToneIcon  />}/>
    ]

    useEffect(() => {
        if (delConfirm==1){
            peticion.del(urlApi(`deportes?id=${sport.id_deporte}&nameID=id_deporte`)).then(e => {
                
                console.log(e)
                if (e.status == 200) {
                    setSports(sports.filter(e=>e.id_deporte!=sport.id_deporte))
                }
            })
        }
    }, [delConfirm]);

	return (
        <tr>
            { (user.id_rol_usuario == 1 || user.id_rol_usuario == 2) && <BtnSettings content={contentSettings}></BtnSettings>}
			<TD>
				<BoxAlJusCen>
					<Button>
						{" "}
						<InsertPhotoTwoToneIcon />{" "}
					</Button>
				</BoxAlJusCen>{" "}
			</TD>
			<TD>{sport.id_deporte}</TD>
			<TDF>
				<SportListRowPopStatsShower sport={sport.id_deporte} statsOftheSport={statsOftheSport} />
			</TDF>
		</tr>
	)
}

{
	/* <img alt="Imagen del deporte" style={{height:"35px"}} src={`${sport.foto_deporte}`}></img> */
}

export default SportListRow
