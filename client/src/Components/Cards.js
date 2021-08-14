import React from 'react'

const Cards = ({name, address, timestamp}) => {
    return (
        <div className="d-flex mt-35 card_Layout">
            <div className="card__Img" />
            <div className="card__Text">

                <h2 className="h-1 d-flex"> <span className="font-w6 green mr-10">#51</span> {name}</h2>
                <p className="font-w1">{address}</p>
                <p className="font-w1 f-15">Next pickup on:</p>
                <p className="font-w6">{timestamp}</p>

            </div>
        </div>
    )
}

export default Cards;