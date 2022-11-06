import { Button, Modal, Typography } from "@mui/material"
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone"
import { helpHttp } from "../../../helpers/helpHttp"
import React, { useState, useEffect } from "react"
import { Box } from "@mui/system"
import { TD } from "../../../componentes/styledComponents/TD"
import { Table } from "../../../componentes/styledComponents/Table"
import ModalConfirm from "./ModalConfirm"
import { BoxAlCen, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import TextFieldRex from "../../../componentes/TextField"
import { urlApi } from "../../../functions/globals"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "98%",
	bgcolor: "background.paper",
	borderRadius: "15px",
	boxShadow: 24,
	p: 4,
}

const BtnUpadateRow = ({ keys, tableRowData,setOk, form, setArray,fieldName, array, thead, id, table }) => {
	const [open, setOpen] = React.useState(false)
	const [confirm, setConfirm] = useState(0)
	const [updateForm, setUpdateForm] = useState({})
	const peticion = helpHttp()

	useEffect(() => {
		setUpdateForm(form)
	}, [form])

    useEffect(() => {
        if (confirm == 1) {
            peticion.put(urlApi(`${table}?id=${id}&nameID=${fieldName}`),{body:new URLSearchParams(updateForm)}).then(e => {
                console.log(e,"Actualizacion de equipos")
                if (e.status == 200) {
                    setOk(true)
                }
                setConfirm(0)
            })
            console.log(updateForm)
        }
	}, [confirm])

	const handleClose = () => setOpen(false)

	const handleUpdate = () => {
		setOpen(true)
	}
	return (
		<>
			<Button onClick={handleUpdate}>
				<ChangeCircleTwoToneIcon color="secondary" /> Actualizar
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Table>
						{thead}
						<tbody>
							<tr>
								{tableRowData.map((e) => (
									<TD>{e}</TD>
								))}
							</tr>
							<tr>
								{keys.map((e) => (
									<TD>
										<TextFieldRex
											value={updateForm[e]}
											form={updateForm}
											setForm={setUpdateForm}
											name={e}
										/>
									</TD>
								))}
								<TDF>
									<ModalConfirm setConfirm={setConfirm} name={"Actualizar"}></ModalConfirm>
								</TDF>
							</tr>
						</tbody>
					</Table>
				</Box>
			</Modal>
		</>
	)
}

export default BtnUpadateRow
