import * as S from "./styles";
import { Trash, Check } from "phosphor-react";
export function Task() {
  return (
    <S.Container>
      <S.CheckBox />

      <S.TodoTitle>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </S.TodoTitle>

      <S.Trash>
        <Trash size={18} alt="Trash icon" fontWeight={"bold"} />
      </S.Trash>
    </S.Container>
  );
}
