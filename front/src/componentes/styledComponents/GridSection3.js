import styled from "styled-components";


export const GridSection3 = styled.section`

display: flex;
    align-items: center;
    justify-content: start;
    width: 50%;
    height: 100vh;
    min-width: 300px;



    @media only screen and (max-width:900px){
    .profile{
        flex-direction: column;
    }
    .section{
        width: 100%;
    }
}

`