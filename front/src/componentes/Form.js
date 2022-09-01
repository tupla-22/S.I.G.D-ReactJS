import "./styles/Form.css"

const Form = ({
    children,
    sx
}) => {

    return ( 
        <form
        className = "Form" >
        {children} 
        </form>
    );
}

export default Form;