import { Menssage } from "../Menssage/Menssage";
import * as S from "./styles";
export function Content() {
  return (
    <S.Container>
      <S.Header>
        <div>
          <S.LeftP>Tarefas criadas</S.LeftP> <S.Leftcounter>5</S.Leftcounter>
        </div>
        <div>
          <S.RightP>Concluídas</S.RightP>
          <div className="rightCounter">
            <span>2</span>
            <p>de</p>
            <span>5</span>
          </div>
        </div>
      </S.Header>
      <S.Content>
        <Menssage />
      </S.Content>
    </S.Container>
  );
}
