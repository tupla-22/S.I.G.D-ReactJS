import { display, width } from "@mui/system";

const Main = ({children}) => {
    const sx = {
        height:"100vh",
        width:"100%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        paddingTop:"100px"
    }

    return ( 
        <div style={sx}>
            {children}
        </div>
     );
}
 
export default Main;