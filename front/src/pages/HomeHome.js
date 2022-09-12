import CardSport from "../componentes/CardSport";
import MainCenter from "../componentes/MainCenter";
import { DivFondo } from "../componentes/DivFondo";
import Article from "../componentes/Article";
import { BoxCenter } from "../componentes/BoxCenter";

const HomeHome = () => {
  const dataBasket = "El segundo deporte más jugado";
  const dataFootball = "El deporte más jugado";
  const sx = {
    heigth: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  return (
    <MainCenter>
      <Article>
        <BoxCenter>
          <h1 style={{ margin: "30px" }}>Deportes que tú podrías probar</h1>
          <div style={sx}>
            <CardSport
              name="Football"
              data={dataFootball}
              url="https://i.pinimg.com/564x/cb/aa/1a/cbaa1a42614b3d6e7c8ba71b4ee75546.jpg"
            ></CardSport>
            <CardSport
              name="BasketBall"
              data={dataBasket}
              url="https://i.pinimg.com/564x/64/bb/ab/64bbabd677d7014a4473dd839053e5e3.jpg"
            ></CardSport>
            <CardSport
              name="Handball"
              data="Deporte frenetico!"
              url="https://i.pinimg.com/564x/c9/38/ca/c938ca341f161621f56cf8453d6a4ae8.jpg"
            ></CardSport>
          </div>
        </BoxCenter>
      </Article>
    </MainCenter>
  );
};

export default HomeHome;
