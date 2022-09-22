import { TagSimple } from "phosphor-react";
import { useState } from "react";
import { Input } from "../Input/Input";
import { Menssage } from "../Menssage/Menssage";
import { Task } from "../Task/Task";
import * as S from "./styles";
export function Content() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([
    {
      title: "Estudar JavarScript",
      isCheck: true,
    },
    {
      title: "Estudar React",
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
    setTitle("");
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

  function getTasksDoneLength() {
    const tasksIsDoneAmount = task.filter( (task) => task.isCheck == true)
    return tasksIsDoneAmount.length;
  }

  return (
    <S.Container>
      <Input title={title} setTitle={setTitle} addTask={addTask} />
      <S.Header taskLengh={task.length}>
        <div>
          <S.LeftP>Tarefas criadas</S.LeftP>{" "}
          <S.Leftcounter>{task.length}</S.Leftcounter>
        </div>
        <div>
          <S.RightP>Concluídas</S.RightP>
          <div className="rightCounter">
            <span>{getTasksDoneLength()}</span>

            {task.length > 0 ? <p>de</p> : null}
            {task.length > 0 ? <span>{task.length}</span> : null}
          </div>
        </div>
      </S.Header>
      <S.Content>
        {task.length == 0 ? (
          <Menssage />
        ) : (
          task.map((task, index) => {
            return (
              <Task
                key={index}
                onChangeStatus={() => onChangeStatus(index)}
                isCheck={task.isCheck}
                task={task.title}
                deleteTask={() => deleteTask(index)}
              />
            );
          })
        )}
      </S.Content>
    </S.Container>
  );
}
