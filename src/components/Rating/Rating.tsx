import React from "react";

type RatingProps = {
    value: number;
}

function Rating(props: RatingProps) {
    console.log('Rating rendered');
    return (
        <div>
            {Array(5).fill('').map((el, ind) => <Star key={ind} starIndex={ind} param={props.value}/>)}
        </div>
    )
}

type StarProps = {
    starIndex: number;
    param: number;
}

function Star(props: StarProps) {

    console.log('Star rendered');
    return (
        <>
            {props.starIndex < props.param
                ? <span style={{fontSize: '32px'}}> &#9733;</span>
                : <span style={{fontSize: '32px'}}> &#9734;</span>
            }
        </>
    )
}

export default Rating;