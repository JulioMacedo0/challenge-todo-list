import * as S from "./styles";
import { PlusCircle } from "phosphor-react";

interface inputProps {
  addTask: (arg0: string) => void;
  setTitle: (arg0: string) => void;
  title: string;
}

export function Input({ addTask, title, setTitle }: inputProps) {
  return (
    <S.Container onSubmit={(e) => e.preventDefault()}>
      <div>
        <S.Input
          onKeyDown={(e) => {
            if (e.code == "Enter" || e.code == "NumpadEnter") {
              addTask(title);
            }
          }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Adicione uma nova tarefa"
        />
        <S.Button onClick={() => addTask(title)} type="button">
          Criar <PlusCircle size={16} weight="bold" />
        </S.Button>
      </div>
    </S.Container>
  );
}
