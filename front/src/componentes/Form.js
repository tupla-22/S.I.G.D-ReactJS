import "./styles/Form.css"

const Form = ({
    children
}) => {

    return ( 
        <form
        className = "Form" >
        {children} 
        </form>
    );
}

export default Form;