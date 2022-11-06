import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";


const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	const ciRegex = /^(\d){4,8}/i

export const useValidaterForm = (form)=> {
    const [errors, setErrors] = useState({});

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	  const ciRegex = /^(\d){4,8}/i
    const cadenaRegex=/^(\w){1,40}/i
  const numeroRegex = /^(\d){4,8}/i
    
  

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
