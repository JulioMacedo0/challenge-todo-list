import * as S from "./styles";
import { Trash, Check } from "phosphor-react";

interface taskProps {
  task: string;
  isCheck?: boolean;
  onChangeStatus: () => void;
  deleteTask: () => void;
}
export function Task({
  task,
  isCheck = false,
  onChangeStatus,
  deleteTask,
}: taskProps) {
  return (
    <S.Container>
      <S.CheckBox checked={isCheck} onChange={onChangeStatus} />

      <S.TodoTitle isCheck={isCheck}>{task}</S.TodoTitle>

      <S.Trash>
        <Trash
          size={18}
          alt="Trash icon"
          fontWeight={"bold"}
          onClick={deleteTask}
        />
      </S.Trash>
    </S.Container>
  );
}
