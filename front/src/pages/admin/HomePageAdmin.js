import Article from "../../componentes/styledComponents/Article"
import { BoxFlex } from "../../componentes/BoxFlex"
import { DivFondo } from "../../componentes/styledComponents/DivFondo"
import Main from "../../componentes/styledComponents/Main"
import CardA from "../../componentes/Card"
import { useContext } from "react"
import LanguajeContext from "../../contexts/LanguajeContext"

const HomeAdm = () => {
  const {text }= useContext(LanguajeContext)

	return (
		<Main>
			<BoxFlex>
				<Article>
					<h1 style={{ padding: 20, color: "#fff" }}>
						{text.BSIGD}
					</h1>
					<p style={{ padding: 20, color: "#fff" }}>
						{text.BSIGD2}
					</p>
				</Article>
				<BoxFlex>
          <CardA
						to={"../adminUsers/add"}
						url={
							"https://www.seoptimer.com/es/blog/wp-content/uploads/2015/05/usuarios-redes-sociales-1200x675.png"
						}
						name={text.usuarios}
					></CardA>
					<CardA
						to={"../adminTeams/add"}
						name={text.equipos}
						url={
							"https://t2.pb.ltmcdn.com/es/posts/0/1/2/trabajo_en_equipo_que_es_importancia_caracteristicas_y_ventajas_5210_600.jpg"
						}
					></CardA>
					<CardA
						to={"../championship/add"}
						name={text.campeonatos}
						url="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/Liga%20de%20Campeones%20Concacaf%20trofeo%20Champions%20League%20trophy%20%281%29.jpg?itok=1SSOHjvc"
					></CardA>
				</BoxFlex>
			</BoxFlex>
		</Main>
	)
}

export default HomeAdm
