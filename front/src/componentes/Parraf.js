const Parraf = ({children}) => {
    const sx = {
        padding:"20px"
    }
    return ( 
        <p style={sx}>
            {children}
        </p>
     );
}
 
export default Parraf;