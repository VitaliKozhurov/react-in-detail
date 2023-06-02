import type { Meta, StoryObj } from "@storybook/react";
import { useState, useMemo } from "react";

const meta: Meta = {
    title: "UseState",
};

export default meta;
type Story = StoryObj;

const dificultCounting = () => {
    let i = 0;
    while (i < 1000000000) {
        let a = i * i;
        i++;
    }
    console.log("call hard func");
    return 0;
};

const UseStateWithHardFunc = () => {
    console.log("hqrd");
    const initValue = dificultCounting(); // Делаем тяжелые вычисления каждый раз при вызове функции, но по факту они нужны 1 раз
    const [counter, setCounter] = useState(initValue);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <button onClick={increaseCounter}>+</button>
            <div>Counter: {counter}</div>
        </>
    );
};

const UseStateWithHardFuncAndUseMemo = () => {
    const initValue = useMemo(dificultCounting, []); // Используем useMemo для того чтобы запомнить результат вычислений, в итоге функция будет вызываться 1 раз

    const [counter, setCounter] = useState(initValue);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <button onClick={increaseCounter}>+</button>
            <div>Counter: {counter}</div>
        </>
    );
};

const UseStateWithtCallBack = () => {
    const [counter, setCounter] = useState(dificultCounting); // Передаем функцию в коллбек, она вызовется только один раз
    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <button onClick={increaseCounter}>+</button>
            <div>Counter: {counter}</div>
        </>
    );
};

const UseStateForSetter = () => {
    const [counter, setCounter] = useState(1);
    const inc = (prevState: number) => {
        console.log(prevState);
        return prevState + 1;
    };
    const increaseCounter = () => {
        // В сеттер можно передавать функцию
        setCounter(inc);
        setCounter(inc);
    };

    return (
        <>
            <button onClick={increaseCounter}>+</button>
            <div>Counter: {counter}</div>
        </>
    );
};

export const UseStateExample_with_hard_func: Story = {
    render: () => <UseStateWithHardFunc />,
};
export const UseStateExample_with_useMemo: Story = {
    render: () => <UseStateWithHardFuncAndUseMemo />,
};
export const UseStateExample_with_useState_callback: Story = {
    render: () => <UseStateWithtCallBack />,
};
export const UseStateExample_with_setter_callback: Story = {
    render: () => <UseStateForSetter />,
};
