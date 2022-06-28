import FormLogin from "../componentes/FormLogin";
import Bar from "./componentes/Bar";
import Main from "./componentes/Main";
import "./Home.css"
const Home = () => {
    return ( 
        <div className="home">
            <Bar/>
            <Main>
                <FormLogin/>
            </Main>
        </div>
     );
}
 
export default Home;