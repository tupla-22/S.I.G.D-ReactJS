export const teamsAddInitialState = {
  nombre_equipo:"",
  id_liga_equipo:null,
  id_equipo:null,
  id_deporte_equipo:null,
  escudo_equipo:null
}


export const teamsAddReducer = ({ state, action }) => {
  switch (action.type) {
    case "ADD_TEAM":
      {

      }

      break;
    case "DEL_TEAM":
      {
      }

      break;
    case "UPDATE_TEAM":
      {
      }

      break;

    default:
      break;
  }
};
