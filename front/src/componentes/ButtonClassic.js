import { Button, styled } from "@mui/material";



export const ButtonClassic = styled(Button)(({ theme }) => ({
  color:"#fff",
  backgroundColor: "#fb6900",
  '&:hover': {
    backgroundColor: "#fb690099",
  },
}));


