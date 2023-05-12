import React, {FC, KeyboardEvent, useState} from 'react';
// @ts-ignore
import s from './CustomSelect.module.css';

type SelectItemType = {
    value: string
    title: string
}

type CustomSelectPropsType = {
    value?: string | null
    items: SelectItemType[]
    onChange: (value: string) => void
}

export const CustomSelect: FC<CustomSelectPropsType> = ({value, items, onChange}) => {
        const [active, setActive] = useState<boolean>(false);
        const [hoveredElement, setHoveredElement] = useState(value);
        const selectedItem = items.find(item => item.value === value);
        const hoveredItem = items.find(item => item.value === hoveredElement);

        const toggleItems = () => setActive(!active)
        const onChangeSelectValue = (value: string) => {
            onChange(value);
            toggleItems();
        }

        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            /*if (e.code === 'ArrowUp' && hoveredElement && hoveredElement > items[0].value) {
                value && setHoveredElement((Number(hoveredElement) - 1).toString())
            }
            if (e.code === 'ArrowDown' && hoveredElement && hoveredElement < items[items.length - 1].value) {
                value && setHoveredElement((Number(hoveredElement) + 1).toString())
            }*/
            if (e.code === 'ArrowDown' || 'ArrowUp') {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].value === hoveredElement) {
                        const pretendentElement = e.code === 'ArrowDown'
                            ? items[i + 1]
                            : items[i - 1]
                        if (pretendentElement) {
                            setHoveredElement(pretendentElement.value);
                            onChange(pretendentElement.value);
                            return;
                        }
                    }
                }
                if (!selectedItem) {
                    onChange(items[0].value)
                }
            }

            if (e.code === 'Enter' || e.code === 'Escape') {
                selectedItem && onChange(selectedItem.value)
                setActive(false);
            }
        }


        return (
            <>
                <div className={s.select}
                     tabIndex={0}
                     onKeyDown={onKeyDown}
                >
                    <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                    {
                        active && <div className={s.items}>
                            {items.map((item) => (
                                <div
                                    onMouseEnter={() => {
                                        setHoveredElement(item.value)
                                    }}
                                    className={s.item + ' ' + (hoveredItem === item ? s.selected : undefined)}
                                    key={item.value}
                                    onClick={() => onChangeSelectValue(item.value)}
                                >
                                    {item.title}</div>
                            ))}
                        </div>
                    }
                </div>
            </>

        )
    }
;