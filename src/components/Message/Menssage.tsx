import * as S from "./styles";
import { Notepad } from "phosphor-react";

export function Menssage() {
  return (
    <S.Container>
      <Notepad size={56} color={"#333333"} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </S.Container>
  );
}
