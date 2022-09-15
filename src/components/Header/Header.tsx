import * as S from "./styles";
import todoLogo from "../../assets/Logo.svg";

export function Header() {
  return (
    <S.Container>
      <S.Img src={todoLogo} alt="" />
    </S.Container>
  );
}
