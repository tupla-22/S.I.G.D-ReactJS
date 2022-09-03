import { display, width } from "@mui/system";

const MainCenter = ({children}) => {
    const sx = {
        minHeight:"100vh",
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
 
export default MainCenter;