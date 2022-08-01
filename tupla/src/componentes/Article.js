const Article = ({children}) => {
    const sx={
        padding:"2%",
        borderRadius:"15px",
        margin:"20px",
        boxShadow:"0px 0px 10px #0004"
    }
    
    return ( 
        <article style={sx}>
            {children}
        </article>
     );
}
 
export default Article;