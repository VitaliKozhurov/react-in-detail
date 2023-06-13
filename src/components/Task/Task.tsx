import React, {ChangeEvent, FC} from 'react';
import {EditableSpan} from './EditableSpan';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TaskPropsType = {
    task: TaskType
    todoListID: string
    changeTaskStatus: (id: string, todoListID: string, isDone: boolean) => void
    changeTaskTitle: (id: string, todoListID: string, newTitle: string) => void
    removeTask: (id: string, todoListID: string) => void
}
export const Task: FC<TaskPropsType> = ({
                                            task,
                                            todoListID,
                                            changeTaskStatus,
                                            changeTaskTitle,
                                            removeTask
                                        }) => {

        return (
            <div className={task.isDone ? 'is-done' : ''}>
                <input
                    type={'checkbox'}
                    checked={task.isDone}
                    color="primary"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => changeTaskStatus(task.id, todoListID, event.currentTarget.checked)}
                />

                <EditableSpan title={task.title}
                              changeTitle={(newTitle: string) => changeTaskTitle(task.id, todoListID, newTitle)} />
                <button onClick={() => removeTask(task.id, todoListID)}>
                    Delete task
                </button>
            </div>
        )
    }
;