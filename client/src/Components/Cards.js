import React, {useState} from 'react'
import SinglePoint from './SinglePoint';

const Cards = ({name, address, timestamp}) => {

    const [currentData, setCurrentData] = useState([]);

    const setData = (name, address, timestamp) => setCurrentData([{name, address, timestamp}]);

    return (
        <>
        <div className="d-flex mt-35 card_Layout" onClick={() => setData(name, address, timestamp)}>
            <div className="card__Img" />
            <div className="card__Text">

                <h2 className="h-1 d-flex mb-10"> <span className="font-w6 green mr-10">#51</span> {name}</h2>
                <p className="font-w1 mb-10">{address}</p>
                <p className="font-w1 f-15 mb-10">Next pickup on:</p>
                <p className="font-w6">{timestamp}</p>

            </div>
        </div>

        {currentData?.length ? <SinglePoint currentData={currentData} setCurrentData={setCurrentData}/> : null}

        </>
    )
}

export default Cards;