const Title = ({children}) => {
    const sx = {
        padding:"20px"

    }
    return ( 
        <h2 style={sx}>{children}</h2>
     );
}
 
export default Title;