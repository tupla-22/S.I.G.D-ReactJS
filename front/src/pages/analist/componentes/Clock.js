import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { set, setSeconds } from "date-fns";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { id } from "date-fns/locale";
import { Box } from "@mui/system";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";

const peticion=helpHttp();

const Clock = ({minutos,setMinutos, paused, started,endMatch,matchId,setEndMatch }) => {
  const [minits, setMinits] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [idInterval, setIdInterval] = useState(null);
  const [idMinutos, setIdMinutos] = useState(null);
  
  useEffect(() => {
    setMinutos(minits)
  }, [minits]);

  useEffect(() => {
    const matchInfo={
        body:new URLSearchParams({disputado_partido:0})
    }
    if(endMatch==true){
        peticion.put(urlApi(`partidos?id=${matchId}&nameID=id_partido`),matchInfo).then(e=>console.log(e))
        setEndMatch(false)
    }
    if(started==1 && paused==0){
        
        setIdInterval(
            setInterval(() => {
                setSeconds(seconds =>seconds + 1)
                
                
          }, 1000)) 

          setIdMinutos(
            setInterval(() => {
            setMinits(minits => minits + 1);

          }, 60000)) 

    }else{
        clearInterval(idInterval)
        clearInterval(idMinutos)
    };
  }, [started,paused]);
  
  useEffect(() => {
    if(seconds==60) setSeconds(0)
  }, [seconds]);

  return (
    <Box>
       <QueryBuilderIcon /><br/><h3>{minits}:{seconds}</h3>
      <br />
    </Box>
  );
};

export default Clock;
