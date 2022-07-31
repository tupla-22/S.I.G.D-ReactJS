import { Button } from "@mui/material";
import { height, width } from "@mui/system";



const ButtonClassic = ({ children }) => {
  const sx1 = {
    color:"#fff",
    backgroundColor: "secondary.main",
    "&:hover": {
      backgroundColor: "secondary.main",
      opacity: [0.9, 0.8, 0.7],
      
    },
    margin: "10px",
  };

  return <Button sx={sx1}>{children}</Button>;
};

export default ButtonClassic;
