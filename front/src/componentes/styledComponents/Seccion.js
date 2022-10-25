import styled from "styled-components";



export const Seccion = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    box-shadow: 0 0 10px #0003;
    width: 60%;
    border-radius: 15px;
    margin: 25px 0;
    background-color: #fff;
    align-items:center;

@media screen and (max-width:900px){
    &{
        width: 98% ;
    }
}


`