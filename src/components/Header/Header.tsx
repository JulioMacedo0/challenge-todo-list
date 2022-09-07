import * as S from "./styles";
import todoLogo from "../../assets/Logo.svg";
import { Input } from "../Input/Input";
export function Header() {
  return (
    <S.Container>
      <S.Img src={todoLogo} alt="" />

      <Input />
    </S.Container>
  );
}
