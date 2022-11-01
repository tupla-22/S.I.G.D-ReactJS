import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"
import React, { useState, useEffect } from "react"
import { helpHttp } from "../../../helpers/helpHttp"
import { BoxColCen } from "../../../componentes/styledComponents/ComponentesDeEstilos"

const peticion = helpHttp()

const Clock = ({ setMinutos, paused, started, endMatch}) => {
	const [minits, setMinits] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [idInterval, setIdInterval] = useState(null)
  

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
