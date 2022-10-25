import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { urlApi } from "../../functions/globals";
import ManagmentFootballControler from "./componentes/ManagmentFootballControler";
import ManagerControl from "./componentes/ManagerControl";
import Main from "../../componentes/styledComponents/Main";
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import Clock from "./componentes/Clock";
import UserListButtons from "./componentes/UserListButtons";


const peticion = helpHttp();

const LookMatch = () => {
  const [partido, setPartido] = useState({});
  const [jugadores, setJugadores] = useState(null);
  const [locales, setLocales] = useState([]);
  const [visitantes, setVisitantes] = useState([]);
  const [deporte, setDeporte] = useState("");
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false)
  const [endMatch, setEndMatch] = useState(false);
  const [jugando, setJugando] = useState([]);
  const [minutos, setMinutos] = useState(0);

  let { matchId, sport } = useParams();


  useEffect(() => {
    jugando.forEach((e)=>{
     
      peticion.get(urlApi(`fichasJugadores?select=minutosJugados_fichaJugador&linkTo=id_fichaJugador&equalTo=${e.id_fichaJugador }`)).then(res=>{
        console.log(res,"get")
        let minitsGet= res.result[0].minutosJugados_fichaJugador
        console.log(minitsGet,"mins")
        peticion.put(urlApi(`fichasJugadores?id=${e.id_fichaJugador}&nameID=id_fichaJugador`),{body:new URLSearchParams({minutosJugados_fichaJugador:minitsGet+1})}).then(e=>console.log(e,"put"))
      })
    })
    console.log(jugando)
  }, [minutos]);

  useEffect(() => {
    peticion
      .get(urlApi(`partidos?select=*&linkTo=id_partido&equalTo=${matchId}`))
      .then((e) => setPartido(e.result[0]));
  }, [matchId]);

 
  useEffect(() => {
    console.log(jugando)
  }, [jugando]);


  useEffect(() => {
    peticion
      .get(
        urlApi(
          `equipos?select=id_deporte_equipo&linkTo=id_equipo&equalTo=${partido.id_equipoLocal_partido}`
        )
      )
      .then((e) => setDeporte(e.result[0].id_deporte_equipo));
    peticion
      .get(urlApi(`squad?teamID=${partido.id_equipoVisitante_partido}`))
      .then((e) => {
        if(e.status == 200)setVisitantes(e.result);
        
    });
    peticion
      .get(urlApi(`squad?teamID=${partido.id_equipoLocal_partido}`))
      .then((e) => {
        if(e.status==200)setLocales(e.result);
    });
  }, [partido]);

  const handleStart = () =>{
    if(!started)setStarted(true)
    else {
        setStarted(false)
        setEndMatch(true)
    }
  }

  const handlePause = ()=>{
    if(!paused)setPaused(true)
    else setPaused(false)
  }

  return (
    <>
      <Main>

        <h3>Ingresar las estadisticas del partido</h3>
        <h5>Ingresa los jugadores titulares del partido presionando en sus nombres</h5>
        <UserListButtons jugando={jugando} setJugando={setJugando}  visitantes={visitantes} locales={locales}/>
        <ManagerControl
          matchId={matchId}
          visitantes={visitantes}
          locales={locales}
          sport={deporte}
          
        />
        <Clock minutos={minutos} setMinutos={setMinutos} matchId={matchId} setEndMatch={setEndMatch} endMatch={endMatch} started={started} paused={paused}/>
        {!started ? (<Button onClick={handleStart} variant="contained">Empezar partido    <PlayArrowIcon/></Button>):(<Button onClick={handleStart} variant="contained">Terminar partido   <StopIcon/></Button>)}
        {!paused ? (<Button onClick={handlePause} sx={{margin:"5px"}} variant="contained">Pausar   <PauseIcon/></Button>):(<Button sx={{margin:"5px"}} onClick={handlePause} variant="contained">Quitar pausa   <PlayArrowIcon/></Button>)}
      </Main>
    </>
  );
};

export default LookMatch;
