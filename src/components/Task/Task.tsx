import * as S from "./styles";
import { Trash, Check } from "phosphor-react";

interface taskProps {
  task: string;
}
export function Task({ task }: taskProps) {
  return (
    <S.Container>
      <S.CheckBox />

      <S.TodoTitle>{task}</S.TodoTitle>

      <S.Trash>
        <Trash size={18} alt="Trash icon" fontWeight={"bold"} />
      </S.Trash>
    </S.Container>
  );
}
