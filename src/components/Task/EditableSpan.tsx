import React, {ChangeEvent, FC, useState} from 'react';


type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditableSpan: FC<EditableSpanPropsType> = ({title, changeTitle}) => {
    const [newTitle, setNewTitle] = useState<string>(title);
    const [mode, setMode] = useState<boolean>(false);



    const changeEditMode = () => {
        !mode && setMode(true);

        if (mode) {
            if (!newTitle.length) {
                alert('Fill empty field');
                return
            }
            setMode(false)
            changeTitle(newTitle)
        }
    }

    return (
        <>
            {
                !mode
                    ? <span onDoubleClick={changeEditMode}>{title}</span>
                    : <input
                        type="text"
                        value={newTitle}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)}
                        onBlur={changeEditMode}
                        autoFocus
                    />
            }

        </>
    )
};