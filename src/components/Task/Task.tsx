import * as S from "./styles";
import { Trash } from "phosphor-react";

export function Task() {
  return (
    <S.Container>
      <S.CheckBox />
      <S.TodoTitle>Amar o wendel</S.TodoTitle>

      <S.Trash>
        <Trash size={18} alt="Trash icon" fontWeight={"bold"} />
      </S.Trash>
    </S.Container>
  );
}
