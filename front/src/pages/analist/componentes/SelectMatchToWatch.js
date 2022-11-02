import { useParams } from "react-router-dom"
import MatchList from "../../admin/componentes/MatchList"

const SelectMatchToWatch = () => {
	const { sport } = useParams()
	return (
		<>
			<MatchList sport={sport} />
		</>
	)
}

export default SelectMatchToWatch
