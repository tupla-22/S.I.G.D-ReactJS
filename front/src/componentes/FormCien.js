import "./styles/FormCien.css"

const Form = ({
    children,
    sx
}) => {

    return ( 
        <form
        className = "FormCien" >
        {children} 
        </form>
    );
}

export default Form;