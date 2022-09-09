import * as S from "./styles";
import { PlusCircle } from "phosphor-react";
export function Input() {
  return (
    <S.Container>
      <div>
        <S.Input placeholder="Adicione uma nova tarefa" />
        <S.Button>
          Criar <PlusCircle size={16} weight="bold" />
        </S.Button>
      </div>
    </S.Container>
  );
}
