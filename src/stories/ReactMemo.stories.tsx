import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';

const meta: Meta = {
    title: 'ReactMemo',
};

export default meta;
type Story = StoryObj;

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersType = { users: Array<string> }

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

    return (
        <>
            <div>
                <NewMessageCounter count={counter} />
                <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
                <button onClick={() => setUsers([...users, 'Max'])}>Add user</button>
            </div>
            <Users users={users} />
        </>
    )
}

export const Example_1: Story = {
    render: () => <ComponentWithState />
};
