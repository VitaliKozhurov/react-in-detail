import React, {ChangeEvent, FC, useState} from 'react';

type AddItemFormPropsType = {
    title: string
    addItem: (title: string) => void
}

export const AddItemForm: FC<AddItemFormPropsType> = ({title, addItem}) => {
    const [value, setValue] = useState<string>('');

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addItemHandler = () => {
        addItem(value);
        setValue('');
    }

    return (
        <>
            <input type="text" value={value} onChange={onChangeInputHandler} />
            <button onClick={addItemHandler}>{title}</button>
        </>
    )
};