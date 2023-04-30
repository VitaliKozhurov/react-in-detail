import React, {useState} from 'react';

type StarType = {
    starsRating: number
    onClickRating: (value: number) => void
}

export const UnControlledRating = () => {
    const [startRating, setStartRating] = useState<number>(0);
  /*  const onClickRating = (value: number) => {
        setStartRating(value);
    }*/

    return (
        <>
            <Stars starsRating={startRating} onClickRating={setStartRating} />
        </>
    )
};

const Stars: React.FC<StarType> = ({starsRating, onClickRating}) => {
    const starsArr = Array(5).fill('');

    return (
        <>
            <h2>Stars Rating</h2>
            {starsArr.map((star, index) => {
                const value = index + 1 <= starsRating ?<b>star </b>:'star ';
                return (
                    <span onClick={() => onClickRating(index + 1)}>{value}</span>)
            })
            }
        </>
    )
}