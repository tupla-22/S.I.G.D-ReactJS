import "./styles/Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { blobToBase64 } from "../helpers/blobManager";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../helpers/helpHttp";
import { getUser, urlApi } from "../functions/globals";

const peticion = helpHttp()

const Profile = () => {
  const [photo, setPhoto] = useState({});

  const stAvatar = {
    borderRadius: "100%",
    height: "200px",
    width: "200px",
  };
  const stButton = {
    backgroundColor: "secondary.main",
    "&:hover": {
      backgroundColor: "secondary.main",
      opacity: [0.9, 0.8, 0.7],
    },
    margin: "10px",
  };
  const stIcon = { height: "100%", width: "100%", color: "#0005" };

  const navigate = useNavigate();

  const handlePassword = () => {
    navigate("changePassword");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handlePhoto = (e) => {
    blobToBase64("fotoPerfil_usuario",e.target.files,setPhoto,photo)
    
  };

  useEffect(() => {
    console.log(user.id_usuario)
    peticion.put(urlApi(`usuarios?id=${user.id_usuario}&nameID=id_usuario`),{body:new URLSearchParams(photo)}).then(e=>{
      console.log(e)
      if(e.status==200){
        user.fotoPerfil_usuario=photo.fotoPerfil_usuario;
        localStorage.setItem("user",JSON.stringify(user))
      }
    })
  }, [photo]);

  return (
    <div className="profile">
      <div className="section">
        <div className="profile__avatar">
          <form>
            <Button sx={stAvatar}  variant="contained" component="label">
              <img style={stAvatar} src={user.fotoPerfil_usuario}></img>
              <input onChange={handlePhoto} hidden accept="image/*" type="file" />
            </Button>
          </form>
        </div>
        <h3>
          {user.primerNombre_usuario} {user.primerApellido_usuario}
        </h3>
        <div>
          <Button onClick={handlePassword} sx={stButton} variant="contained">
            Cambiar contraseña
          </Button>
          
        </div>
      </div>
      <div className="section ">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
