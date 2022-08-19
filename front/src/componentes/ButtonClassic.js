import { Button } from "@mui/material";



const ButtonClassic = ({ children, handleClick, className, variant,sx,onClick}) => {
  const sx1 = {
    color:"#fff",
    backgroundColor: "secondary.main",
    "&:hover": {
      backgroundColor: "secondary.main",
      opacity: [0.9, 0.8, 0.7],
      
    },
  };

  return <Button onClick={onClick}  variant={variant} onClick={handleClick} className={className} sx={{...sx,...sx1}}>{children}</Button>;
};

export default ButtonClassic;
