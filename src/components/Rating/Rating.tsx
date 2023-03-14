import React from "react";

interface Val {
    val: number;
}

function Rating(props: Val) {
    console.log('Rating rendered');
    return (
        <div>
            {Array(5).fill('').map((el, ind) => <Star key={ind} starIndex={ind} param={props.val}/>)}
        </div>
    )
}

interface Star {
    starIndex: number;
    param: number;
}

function Star(props: Star) {

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