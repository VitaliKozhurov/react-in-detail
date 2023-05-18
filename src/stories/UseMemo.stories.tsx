import type {Meta, StoryObj} from '@storybook/react';
import React, {useMemo, useState} from 'react';

const meta: Meta = {
    title: 'UseMemo',
};

export default meta;
type Story = StoryObj;

const ContainerComponent = () => {
    const [num_1, setNum_1] = useState<number>(5);
    const [num_2, setNum_2] = useState<number>(5);

    let result_1 = 1;
    let result_2 = 1;

    // Для оптимизации необходимо передать сложные вычисления в функцию коллбек useMemo
    // данная функция должна вернуть результат этих вычислений, которое мемоизируется
    // в зависимости передается значение при изменении, которого необходимо провести повторное вычисление
    result_1 = useMemo(()=>{
        let temp =1;
        for (let i = 1; i <= num_1; i++) {
            let fake = 0;
            while(fake<100000000){
                fake++;
                const fakeValue = Math.random();
            }
            temp = temp * i
        }
        return temp;
    },[num_1])

    for (let i = 1; i <= num_2; i++) {
        result_2 = result_2 * i
    }

    return (
        <>
            <input type="text" value={num_1} onChange={(e) => setNum_1(Number(e.currentTarget.value))} />
            <input type="text" value={num_2} onChange={(e) => setNum_2(Number(e.currentTarget.value))} />
            <hr />
            <div>Result for result_1 : {result_1}</div>
            <div>Result for result_2 : {result_2}</div>
        </>
    )
}

export const Hard_Counting: Story = {
    render: () => <ContainerComponent />
};

type UsersType = { users: Array<string> };

const SecretUsers = (props: UsersType) => {
    console.log('Users render')
    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const Users = React.memo(SecretUsers);

const ComponentWithState = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem', 'Sveta']);

    const filteredUsers = useMemo(()=>{
       return users.filter(user=>user.indexOf('a')>1)
    },[users]);

    return (
        <>
            <div>
                <div>Counter : {counter}</div>
                <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
                <button onClick={() => setUsers([...users, 'Max'])}>Add user</button>
            </div>
            <Users users={filteredUsers} />
        </>
    )
}

export const Count_value: Story = {
    render: () => <ComponentWithState />
};