import "./styles/FormCien.css"

const FormCien = ({
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

export default FormCien;