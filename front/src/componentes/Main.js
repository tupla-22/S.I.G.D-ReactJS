import { display, width } from "@mui/system";

const Main = ({children}) => {
    const sx = {
        height:"100vh",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }

    return ( 
        <div style={sx}>
            {children}
        </div>
     );
}
 
export default Main;