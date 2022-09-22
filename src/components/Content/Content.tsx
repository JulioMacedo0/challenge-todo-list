import { TagSimple } from "phosphor-react";
import { useState } from "react";
import { Input } from "../Input/Input";
import { Menssage } from "../Message/Menssage";
import { Task } from "../Task/Task";
import * as S from "./styles";
export function Content() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([
    {
      title: "Estudar JavarScript",
      isCheck: true,
    },
    {
      title: "Estudar React",
      isCheck: false,
    },
  ]);
 const haveTasks = tasks.length > 0;
  function addTask(title: string) {
    if (title.trim() != "") {
      const newTasks = [...tasks, { title: title, isCheck: false }];
      setTasks(newTasks);
    } else {
      console.log("erro em adcionar");
    }
    setTitle("");
  }

  function onChangeStatus(id: number) {
    const newTasks = tasks.map((task, index) => {
      if (index == id) {
        return { ...task, isCheck: !task.isCheck };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task, index) => index != id);
    setTasks(newTasks);
  }

  function getTasksDoneLength() {
    const tasksIsDoneAmount = tasks.filter( (task) => task.isCheck == true)
    return tasksIsDoneAmount.length;
  }

  return (
    <S.Container>
      <Input title={title} setTitle={setTitle} addTask={addTask} />
      <S.Header taskLengh={tasks.length}>
        <div>
          <S.LeftP>Tarefas criadas</S.LeftP>{" "}
          <S.Leftcounter>{tasks.length}</S.Leftcounter>
        </div>
        <div>
          <S.RightP>Concluídas</S.RightP>
          <div className="rightCounter">
            <span>{getTasksDoneLength()}</span>

            {haveTasks && <p>de</p> }
            {haveTasks && <span>{tasks.length}</span>}
          </div>
        </div>
      </S.Header>
      <S.Content>
        {tasks.length == 0 ? (
          <Menssage />
        ) : (
          tasks.map((task, index) => {
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
