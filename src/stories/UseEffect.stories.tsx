import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

const meta: Meta = {
    title: "UseEffectHook",
};

export default meta;
type Story = StoryObj;

const UseEffectWithoutArr = () => {
    const [counter, setCounter] = useState(1);
    console.log("Example_1");
    // Будет вызываться при каждом вызове функции после вмонтирования компоненты
    // Сначала отрисовка контента, потом уже useEffect
    useEffect(() => {
        console.log("call useEffect");
        document.title = "" + counter;
        // Выполняем запросы на сервер
        // Установка интервалов, асинхронный код
        // работа с баззой данных
        // Обращения к шлобальным объектам
    });

    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};

const UseEffectWithoutArrDep = () => {
    const [feik, setFeik] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("Example_2");
    // Вызывается только при изменении counter
    useEffect(() => {
        console.log("call useEffect");
        document.title = "" + counter + feik;
    }, [counter]);

    return (
        <>
            <div>
                Counter: {counter} {feik}
            </div>
            {feik && <div>It is Feik</div>}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFeik(feik + 1)}>feik +</button>
        </>
    );
};

const UseEffectWithEmptyArrDep = () => {
    const [feik, setFeik] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("Example_3");
    // Вызывается только при первом вызове
    // Первый рендер (монтирование)
    useEffect(() => {
        console.log("call useEffect");
        document.title = "" + counter + feik;
    }, []);

    return (
        <>
            <div>
                Counter: {counter} {feik}
            </div>
            {feik && <div>It is Feik</div>}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFeik(feik + 1)}>feik +</button>
        </>
    );
};

export const UseEff_without_arr_dep: Story = {
    render: () => <UseEffectWithoutArr />,
};

export const UseEff_with_arr_dep: Story = {
    render: () => <UseEffectWithoutArrDep />,
};

export const UseEff_with_empty_arr_dep: Story = {
    render: () => <UseEffectWithEmptyArrDep />,
};
