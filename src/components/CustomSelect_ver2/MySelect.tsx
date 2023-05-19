import React, {FC, MouseEvent, KeyboardEvent, useState} from 'react';
// @ts-ignore
import s from './MySelect.module.css';

export type ItemType = {
    value: string
    title: string
    city:string
    peopleCount:number
}

type SelectPropsType = {
    value?: string
    items: Array<ItemType>
    onChange: (value: string) => void
}

export const MySelect: FC<SelectPropsType> = ({value, items, onChange}) => {
    const [activeSelect, setActiveSelect] = useState<boolean>(false);
    const [hoverItem, setHoverItem] = useState(value);

    const toggleSelect = () => {
        setActiveSelect(!activeSelect);
    }
    const setHoverToElement = (newValue: string) => {
        setHoverItem(newValue);
    }

    const changeValue = (value: string) => {
        onChange(value);
        toggleSelect();
    }

    const onSelectKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (activeSelect && (e.code === 'ArrowUp' || e.code === 'ArrowDown')) {
            for (let i = 0; i < items.length; i++) {

                if (items[i].value === hoverItem) {
                    const pretendent = e.code === 'ArrowUp'
                        ? items[i - 1]
                        : items[i + 1];
                    console.log(pretendent)

                    if (pretendent) {

                        onChange(pretendent.value);
                        setHoverItem(pretendent.value);
                        return
                    }
                }
            }
        }
        if(e.code==='Enter'||e.code==='Escape'){
            hoverItem&&onChange(hoverItem);
            toggleSelect();
        }
    }

    // Определяем элемент, который будем показывать сразу исходя из параметра value переданного в селект
    const selectedItem = items.find(item => item.value === value);

    console.log('Render Select')
    return (
        <div className={s.selectBody} onKeyDown={onSelectKeyPress} tabIndex={0}>
            <div className={s.selectTitle} onClick={toggleSelect}>{selectedItem && selectedItem.title}</div>
            {activeSelect && <ul className={s.selectItems}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={hoverItem === item.value ? s.selectItem + ' ' + s.hovered : s.selectItem}
                        onMouseEnter={() => setHoverToElement(item.value)}
                        onClick={() => changeValue(item.value)}
                    >
                        {item.city}
                    </li>
                ))}
            </ul>}
        </div>
    )
};