import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"
import { set, setSeconds } from "date-fns"
import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { useMediaQuery } from "@mui/material"
import { id } from "date-fns/locale"
import { Box } from "@mui/system"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import { BoxColCen } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { useNavigate } from "react-router-dom"

const peticion = helpHttp()

const Clock = ({ confirm, minutos, setMinutos, paused, started, endMatch, matchId, setEndMatch }) => {
	const [minits, setMinits] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [idInterval, setIdInterval] = useState(null)
  const [idMinutos, setIdMinutos] = useState(null)
  

  useEffect(() => {
    if (endMatch == true) {
      clearInterval(idInterval)
    }
  }, [endMatch]);
 
	useEffect(() => {
		setMinutos(minits)
	}, [minits])

	useEffect(() => {
		if (started == 1 && paused == 0) {
			setIdInterval(
				setInterval(() => {
					setSeconds((seconds) => seconds + 1)
				}, 1000)
			)
		} else {
			clearInterval(idInterval)
		}
	}, [started, paused])

	useEffect(() => {
		if (seconds == 60) {
			setSeconds(0)
			setMinits(minits + 1)
		}
	}, [seconds])
	return (
		<BoxColCen>
			<QueryBuilderIcon />
			<h3>
				{minits}:{seconds}
			</h3>
		</BoxColCen>
	)
}

export default Clock
