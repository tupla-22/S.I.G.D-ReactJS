import Main from "../../../componentes/styledComponents/Main"
import TeamUpdateForm from "./TemaUpdateForm"
import React, { useState, useEffect } from "react"
import ChampionshipSearch from "./ChampionshipSeach"
import ChampionshipUpdateForm from "./ChampionshipUpdateForm"
import ChampionshipUpdateCard from "./ChampionshipUpdateCard"
import AlertSuccees from "../../../componentes/AlertSuccees"

const ChampionshipUpdate = () => {
	const [data, setData] = useState(null)
  const [ok, setOk] = useState(false);
	return (
		<>
			{ok && <AlertSuccees/>}

			<Main>
				{data && <ChampionshipUpdateCard setData={setData} setOk={setOk} data={data}></ChampionshipUpdateCard>}
				<ChampionshipUpdateForm setData={setData} />
				<ChampionshipSearch />
			</Main>
		</>
	)
}

export default ChampionshipUpdate
