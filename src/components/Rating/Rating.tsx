import React from 'react';

type RatingProps = {
    value: number;
    /**
     * Function that change star rating
     * @param value is clicked item
     */
    setRatingValue: (value: number) => void
}

function Rating(props: RatingProps) {
    return (
        <div>
            {Array(5).fill('').map((el, ind) => <Star key={ind} starIndex={ind} param={props.value}
                                                      setRating={() => props.setRatingValue(ind + 1)} />)}
        </div>
    )
}

type StarProps = {
    starIndex: number;
    param: number;
    setRating: () => void
}

function Star(props: StarProps) {

    return (
        <>
            <span onClick={props.setRating}>{props.starIndex + 1 <= props.param ?
                <b>star </b> : 'star '}</span>
        </>
    )
}

export default Rating;