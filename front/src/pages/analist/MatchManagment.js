import { Outlet } from "react-router-dom";
import { BoxFlex } from "../../componentes/BoxFlex";
import CardA from "../../componentes/Card";
import Main from "../../componentes/styledComponents/Main";

const MatchManagment = () => {
  return (
    <>
    <Main>
      <BoxFlex>
        <CardA to={"../football"} url="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju" name={"Football"}></CardA>
        <CardA to={"../basketball"} url="https://www.fiba.basketball/api/img/graphic/c5132053-5932-4af1-9e9b-8597ed500e94/940/529" name={"Basketball"}></CardA>
        <CardA to={"../handball"} url="https://www.clarin.com/img/2019/12/04/el-handball-es-un-deporte___xrLeAeXU_340x340__1.jpg" name={"Handball"}></CardA>
      </BoxFlex>
      <Outlet />




    </Main>
    </>
  );
};

export default MatchManagment;
