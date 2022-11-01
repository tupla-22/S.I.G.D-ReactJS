import { Route, Routes, Params } from "react-router-dom"
import "./App.css"
import Help from "./pages/Help"
import Fixture from "./componentes/Fixture"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ChangePassword from "./componentes/ChangePassword"
import Profile from "./componentes/Profile"
import HomeStudent from "./pages/student/HomeStudent"
import Error404 from "./componentes/Error404"
import HomeAdmin from "./pages/admin/HomeAdmin"
import UserAdd from "./pages/admin/componentes/UserAdd"
import TeamsAll from "./componentes/TeamsAll"
import Teams from "./componentes/Teams"
import MyTeam from "./pages/student/MyTeam"
import Stats from "./pages/student/componentes/Stats"
import History from "./pages/student/componentes/History"
import AdminUsers from "./pages/admin/AdminUsers"
import AdminTeams from "./pages/admin/AdminTeams"
import changePassword from "./componentes/ChangePassword"
import UserUpdate from "./pages/admin/componentes/UserUpdate"
import UserDelete from "./pages/admin/componentes/UserDelete"
import TeamAdd from "./pages/admin/componentes/TeamAdd"
import TeamDelete from "./pages/admin/componentes/TeamDelete"
import TeamUpdate from "./pages/admin/componentes/TeamUpdate"
import HomeAdm from "./pages/admin/HomePageAdmin"
import HomeHome from "./pages/HomeHome"
import HomeDT from "./pages/DT/HomeDT"
import DTBar from "./pages/DT/componentes/DTBar"
import HomePageDT from "./pages/DT/HomePageDT"
import MyTeams from "./pages/DT/MyTeams"
import ChampionshipsLoadBar from "./componentes/ChampionshipsLoadBar"
import ChampionshipsLoad from "./componentes/ChampionshipsLoad"
import AllTeams from "./componentes/AllTeams"
import MatchesHistory from "./componentes/MatchesHistory"
import { UserProvider } from "./contexts/UserContext"
import HomeAnalist from "./pages/analist/HomeAnalist"
import HomeJudge from "./pages/judge/HomeJudge"
import HomeScout from "./pages/scout/HomeScout"
import HomePageAnalist from "./pages/analist/HomePageAnalist"
import HomePageJudge from "./pages/judge/HomePageJudge"
import HomePageScout from "./pages/scout/HomePageScout"
import AdminNav from "./pages/admin/componentes/AdminNav"
import Link from "./componentes/Link"
import NavLink from "./componentes/NavLink"
import ChampionshipAdd from "./pages/admin/componentes/ChampionshipAdd"
import AdminChampionships from "./pages/admin/AdminChampionships"
import ChampionshipDeleteForm from "./pages/admin/componentes/ChampionshipDelForm"
import ChampionshipUpdate from "./pages/admin/componentes/ChampionshipUpdate"
import AdminMatch from "./pages/admin/AdminMatch"
import MatchAdd from "./pages/admin/componentes/MatchAdd"
import MatchDel from "./pages/admin/componentes/MatchDelete"
import MatchUpdate from "./pages/admin/componentes/MatchUpdate"
import StatsMyTeams from "./pages/DT/StatsMyTeams"
import MatchManagment from "./pages/analist/MatchManagment"
import MatchList from "./pages/admin/componentes/MatchList"
import FixtureFB from "./componentes/FixtureFB"
import FixtureBB from "./componentes/FixtureBB"
import FixtureHB from "./componentes/FixtureHB"
import MatchesListButtons from "./pages/analist/componentes/MatchesListButton"
import LookMatch from "./pages/analist/LookMatch"
import CheckStats from "./pages/judge/CheckStats"
import ChampionshipDel from "./pages/admin/componentes/ChampionshipDelete"
import MatchCheckes from "./pages/judge/componentes/MatchCheckes"
import Footer from "./Footer"
import { LanguajeProvider } from "./contexts/LanguajeContext"
import FindPlayer from "./pages/scout/FindPlayer"
import ChangeContactInformation from "./componentes/ChangeContactInformation"
import Championships from "./pages/student/Championships"
import ChampionshipsOpen from "./pages/student/componentes/ChampionshipsOpen"
import ChampionshipsClosed from "./pages/student/componentes/ChampionshipsClosed"

function App() {
	return (
		<LanguajeProvider>
			<div className="App">
				<UserProvider>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="" element={<HomeHome />}></Route>
							<Route path="login" element={<Login />}></Route>
							<Route path="help" element={<Help />}></Route>
						</Route>

						<Route path="/student/:userId" element={<HomeStudent />}>
							<Route path="history" element={<History/>}></Route>
							<Route path="Home" element={<Fixture />}>
								<Route path="fixtureFB" element={<MatchList sport={"football"} />} />
								<Route path="fixtureBB" element={<MatchList sport={"basketball"} />} />
								<Route path="fixtureHB" element={<MatchList sport={"handball"} />} />
							</Route>
							<Route path="teams" element={<Teams />}>
								<Route path="teamsAll" element={<AllTeams />}></Route>
								<Route path="myTeam" element={<MyTeam />}></Route>
							</Route>
							<Route path="myStats" element={<Stats />}></Route>
							<Route path="profile" element={<Profile />}>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
								<Route path="changePassword" element={<ChangePassword />}></Route>
							</Route>
							<Route path="championships" element={<Championships />}>
								<Route path="open" element={<ChampionshipsOpen/>}></Route>
								<Route path="closed" element={<ChampionshipsClosed/>}></Route>
							</Route>
						</Route>

						<Route path="/admin/:userId" element={<HomeAdmin />}>
							<Route element={<AdminMatch />} path="match">
								<Route path="add" element={<MatchAdd />}></Route>
								<Route path="delete" element={<MatchDel />}></Route>
								<Route path="update" element={<MatchUpdate />}></Route>
							</Route>
							<Route path="championship" element={<AdminChampionships />}>
								<Route path="add" element={<ChampionshipAdd />}></Route>
								<Route path="delete" element={<ChampionshipDeleteForm />}></Route>
								<Route path="update" element={<ChampionshipUpdate />}></Route>
							</Route>
							<Route path="userAdd" element={<UserAdd />} />
							<Route path="adminUsers" element={<AdminUsers />}>
								<Route path="add" element={<UserAdd />}>
									{" "}
								</Route>
								<Route path="update" element={<UserUpdate />}>
									{" "}
								</Route>
								<Route path="delete" element={<UserDelete />}>
									{" "}
								</Route>
							</Route>
							<Route path="adminTeams" element={<AdminTeams />}>
								<Route path="add" element={<TeamAdd />}></Route>
								<Route path="delete" element={<TeamDelete />}></Route>
								<Route path="update" element={<TeamUpdate />}></Route>
							</Route>
							<Route path="profile" element={<Profile />}>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
								<Route path="changePassword" element={<ChangePassword />}></Route>
							</Route>
							<Route path="home" element={<HomeAdm></HomeAdm>}></Route>
						</Route>
						<Route path="/administrative/:userId" element={<HomeAdmin />}>
							<Route element={<AdminMatch />} path="match">
								<Route path="add" element={<MatchAdd />}></Route>
								<Route path="delete" element={<MatchDel />}></Route>
								<Route path="update" element={<MatchUpdate />}></Route>
							</Route>
							<Route path="championship" element={<AdminChampionships />}>
								<Route path="add" element={<ChampionshipAdd />}></Route>
								<Route path="delete" element={<ChampionshipDeleteForm />}></Route>
								<Route path="update" element={<ChampionshipUpdate />}></Route>
							</Route>
							<Route path="userAdd" element={<UserAdd />} />
							<Route path="adminUsers" element={<AdminUsers />}>
								<Route path="add" element={<UserAdd />}>
									{" "}
								</Route>
								<Route path="update" element={<UserUpdate />}>
									{" "}
								</Route>
								<Route path="delete" element={<UserDelete />}>
									{" "}
								</Route>
							</Route>
							<Route path="adminTeams" element={<AdminTeams />}>
								<Route path="add" element={<TeamAdd />}></Route>
								<Route path="delete" element={<TeamDelete />}></Route>
								<Route path="update" element={<TeamUpdate />}></Route>
							</Route>
							<Route path="profile" element={<Profile />}>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
								<Route path="changePassword" element={<ChangePassword />}></Route>
							</Route>
							<Route path="home" element={<HomeAdm></HomeAdm>}></Route>
						</Route>
						<Route path="/administrative/:userId" element={<HomeAdmin />}>
							<Route path="profile" element={<Profile />}>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
								<Route path="changePassword" element={<ChangePassword />}></Route>
							</Route>
							<Route path="userAdd" element={<UserAdd />} />
							<Route path="adminUsers" element={<AdminUsers />}>
								<Route path="userAdd" element={<UserAdd />}>
									{" "}
								</Route>
								<Route path="userUpdate" element={<UserUpdate />}>
									{" "}
								</Route>
								<Route path="userDelete" element={<UserDelete />}>
									{" "}
								</Route>
							</Route>
							<Route path="adminTeams" element={<AdminTeams />}>
								<Route path="teamAdd" element={<TeamAdd></TeamAdd>}></Route>
								<Route path="teamDelete" element={<TeamDelete />}></Route>
								<Route path="teamUpdate" element={<TeamUpdate />}></Route>
							</Route>
							<Route path="profile" element={<Profile />}>
								<Route path="changePassword" element={<ChangePassword />}></Route>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
							</Route>
							<Route path="home" element={<HomeAdm></HomeAdm>}></Route>
						</Route>

						<Route path="/dt/:userId" element={<HomeDT />}>
							<Route path="profile" element={<Profile />}>
								<Route path="changePassword" element={<ChangePassword />}></Route>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
							</Route>
							<Route path="home" element={<HomePageDT />}></Route>
							<Route path="adminTeams" element={<AdminTeams />}>
								<Route path="add" element={<TeamAdd></TeamAdd>}></Route>
								<Route path="delete" element={<TeamDelete />}></Route>
								<Route path="update" element={<TeamUpdate />}></Route>
							</Route>
							<Route path="championshipsLoad" element={<AdminChampionships />}>
								<Route path="add" element={<ChampionshipAdd />}></Route>
								<Route path="delete" element={<ChampionshipDel />}></Route>
								<Route path="update" element={<ChampionshipUpdate />}></Route>
							</Route>
							<Route path="myteams" element={<MyTeams></MyTeams>}></Route>
							<Route path="stats" element={<StatsMyTeams />}></Route>
						</Route>

						<Route path="analist/:userId" element={<HomeAnalist />}>
							<Route path="lookMatch/:matchId" element={<LookMatch />}></Route>

							<Route path="matchManagment" element={<MatchManagment />}></Route>

							<Route path="basketball" element={<MatchesListButtons sport={"basketball"} />}></Route>
							<Route path="football" element={<MatchesListButtons sport={"football"} />}></Route>
							<Route path="handball" element={<MatchesListButtons sport={"handball"} />}></Route>
							<Route path="home" element={<HomePageAnalist />}></Route>
							<Route path="profile" element={<Profile />}>
								<Route path="changePassword" element={<ChangePassword />}></Route>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
							</Route>
						</Route>

						<Route path="judge/:userId" element={<HomeJudge />}>
							<Route path="checkMatch/:idMatchCheck" element={<MatchCheckes />}></Route>
							<Route path="checkStats" element={<CheckStats></CheckStats>}>
								<Route></Route>
							</Route>
							<Route path="profile" element={<Profile />}>
								<Route path="contactInformation"></Route>
								<Route path="changePassword" element={<ChangePassword />}></Route>
							</Route>
							<Route path="home" element={<HomePageJudge />}></Route>
						</Route>
						<Route path="scout/:userId" element={<HomeScout />}>
							<Route path="findPlayer" element={<FindPlayer />}></Route>
							<Route path="profile" element={<Profile />}>
								<Route path="changePassword" element={<ChangePassword />}></Route>
								<Route path="contactInformation" element={<ChangeContactInformation />}></Route>
							</Route>
							<Route path="home" element={<HomePageScout />}></Route>
						</Route>

						<Route path="/*" element={<Error404 />}></Route>
					</Routes>
				</UserProvider>
				<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
					<Footer></Footer>
				</div>
			</div>
		</LanguajeProvider>
	)
}

export default App
