import { useState } from "react";
import { Menssage } from "../Menssage/Menssage";
import { Task } from "../Task/Task";
import * as S from "./styles";
export function Content() {
  const [title, setTile] = useState("");
  const [task, setTask] = useState([
    {
      title: "Estuda JavarScript",
      isCheck: true,
    },
    {
      title: "Estuda React",
      isCheck: false,
    },
  ]);

  function addTask(title: string) {
    if (title.trim() != "") {
      const newTasks = [...task, { title: title, isCheck: false }];
      setTask(newTasks);
    } else {
      console.log("erro em adcionar");
    }
  }

  function onChangeStatus(id: number) {
    const newTasks = task.map((task, index) => {
      if (index == id) {
        return { ...task, isCheck: !task.isCheck };
      }
      return task;
    });
    setTask(newTasks);
  }

  function deleteTask(id: number) {
    const newTasks = task.filter((task, index) => index != id);
    setTask(newTasks);
  }
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
        {task.map((task, index) => {
          return (
            <Task
              key={index}
              onChangeStatus={() => onChangeStatus(index)}
              isCheck={task.isCheck}
              task={task.title}
              deleteTask={() => deleteTask(index)}
            />
          );
        }) ?? <Menssage />}
      </S.Content>
    </S.Container>
  );
}
